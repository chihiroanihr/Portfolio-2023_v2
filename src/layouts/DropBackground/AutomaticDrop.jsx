import React, {
  useRef,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { Drop } from "./index";
import { PlayAnimationContext } from "@contexts";

const AutomaticDrop = ({ parentRef, isOverlayCompleted }) => {
  console.log("[Render] @layouts/DropBackground/AutomaticDrop.jsx");

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  const dropRef = useRef(null);

  const [dropAnimationCycleCount, setDropAnimationCycleCount] = useState(0);
  const [dropPosition, setDropPosition] = useState({
    // Initial Drop positions
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // ====================== Automatic Drop ====================== //
  // !! use useCallback so that reference never changes when often mounted/unmounted
  const handleDropAnimationIteration = useCallback(
    (event) => {
      // Choose and focus only one of the animations (otherwise count gets doubled)
      if (
        event.animationName === "milky-drop1" ||
        event.animationName === "chocolate-drop1" // dark mode
      ) {
        // Calculate current window's position (updates on each drop)
        const relativePositionHeight =
          window.innerHeight - parentRef.current?.getBoundingClientRect()?.top;

        // Every 5th iterations, drop at center of the window
        if (dropAnimationCycleCount % 5 === 0) {
          setDropPosition({
            x: window.innerWidth / 2,
            y: relativePositionHeight - window.innerHeight / 2,
          });
        }
        // Drop at random place within the current window position
        else {
          const maxX = window.innerWidth;
          const maxY = relativePositionHeight;
          const minY = relativePositionHeight - window.innerHeight;
          const newX = Math.floor(Math.random() * maxX);
          const newY = Math.floor(Math.random() * (maxY - minY + 1) + minY); // const newY = Math.floor(Math.random() * maxY);
          setDropPosition({ x: newX, y: newY });
        }

        // Increment the number of iteration
        setDropAnimationCycleCount((prevCount) => prevCount + 1);
      }
    },
    [dropAnimationCycleCount]
  );

  // ======================== Enter View ======================== //
  useEffect(() => {
    if (!playAnimation || !dropRef.current) return;

    // When Entering work section overlay
    if (isOverlayCompleted) {
      // Add Drop animation iterations to the event listener
      dropRef.current.addEventListener(
        "animationiteration",
        handleDropAnimationIteration
      );
    }

    // When leaving from work section overlay
    else {
      // Reset the iteration number
      setDropAnimationCycleCount(0);
    }

    // Remove from the event listener when unmounted
    return () =>
      dropRef.current?.removeEventListener(
        "animationiteration",
        handleDropAnimationIteration
      );
  }, [isOverlayCompleted, dropAnimationCycleCount]);

  return (
    <Drop
      ref={dropRef}
      id="drop"
      className={
        isOverlayCompleted
          ? "animate-milky-drop1 dark:animate-chocolate-drop1 before:animate-milky-drop2 dark:before:animate-chocolate-drop2"
          : "animate-none before:animate-none"
      }
      x={dropPosition.x}
      y={dropPosition.y}
    />
  );
};

// Re-render only when DropBackground resizes
export default React.memo(AutomaticDrop);
