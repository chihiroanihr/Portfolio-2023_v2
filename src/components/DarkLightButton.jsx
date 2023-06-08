import { useContext, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import { Button } from "@components";
import { PlayAnimationContext } from "@contexts";
import { useDarkLightButtonAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

// Forward Ref from Parent Component
const DarkLightButton = ({
  className,
  handleToggleDarkMode,
  addToLandingTimeline,
  animateIndex,
}) => {
  console.log("[Render] @components/DarkLightButton.jsx");

  // Node Reference
  const darkLightButtonNodeRef = useRef(null);

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // Render / Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (DarkLightButton.jsx) Animation Started");

    // Get Animation
    const animation = useDarkLightButtonAnimation(
      darkLightButtonNodeRef.current
    );

    // Add timeline to parent component's timeline
    addToLandingTimeline(animation, animateIndex);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(animation);
      console.log("[LOG] (DarkLightButton.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ************************* CSS ************************* //
  const darkLightButtonFillColor = "fill-transparent dark:fill-yellow-400";
  const darkLightButtonStrokeColor =
    "stroke-coffee-600 dark:stroke-transparent";

  const darkLightButtonStyle = clsx(
    "rounded-full p-2",
    "shadow-light-btn-200 dark:shadow-dark-btn-200"
  );

  const darkLightButtonSvgStyle = clsx(
    "w-10",
    darkLightButtonFillColor,
    darkLightButtonStrokeColor,
    "[transition:fill_500ms,stroke_500ms] will-change-[fill,stroke]" // dark mode transition
  );

  // ************************* JSX ************************* //
  return (
    <Button
      ref={darkLightButtonNodeRef}
      className={clsx(className, darkLightButtonStyle)}
      onClick={handleToggleDarkMode}
    >
      <svg
        className={darkLightButtonSvgStyle}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </Button>
  );
};

export default DarkLightButton;
