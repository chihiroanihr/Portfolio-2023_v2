import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Drop } from "./index";

const ClickedDrop = ({ clickedPosition, parentRef, isOverlayCompleted }) => {
  console.log("[Render] @layouts/DropBackground/ClickedDrop.jsx");

  // Drop buffers
  const [addedDropPositions, setAddedDropPositions] = useState([]);

  // Calculate relative Drop position
  const newDropPosition = useMemo(() => {
    // Compute current window's relative position (height)
    const relativePositionHeight =
      window.innerHeight - parentRef.current?.getBoundingClientRect()?.top;
    // Compute x and y axis
    return {
      x: clickedPosition.x,
      y: relativePositionHeight - (window.innerHeight - clickedPosition.y),
    };
  }, [clickedPosition, parentRef]);

  // Add new Drop
  const addNewDrop = useCallback(() => {
    setAddedDropPositions((prevDropPositions) => [
      ...prevDropPositions,
      newDropPosition,
    ]);
  }, [newDropPosition]);

  // Remove/Clear Drop
  const removeDrop = useCallback(() => {
    setAddedDropPositions([]);
  }, []);

  // Calculate Drop position and add new Drops
  useEffect(() => {
    addNewDrop();
  }, [clickedPosition]);

  // Remove Drops with delay
  useEffect(() => {
    let timer;
    if (addedDropPositions.length > 0) {
      timer = setTimeout(() => {
        removeDrop();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [addedDropPositions]);

  // Render added Drops
  const addedDrops = addedDropPositions.map((drop, index) => (
    <Drop
      key={index}
      x={drop.x}
      y={drop.y}
      className="animate-clicked-milky-drop1 dark:animate-clicked-chocolate-drop1
      before:animate-clicked-milky-drop2 dark:before:animate-clicked-chocolate-drop2"
    />
  ));

  // Remove Drops buffer when leaving the view
  return isOverlayCompleted ? addedDrops : null;
};

// Re-render only when DropBackground clicked position value changes
// Re-render only when DropBackground resizes
export default React.memo(ClickedDrop);
