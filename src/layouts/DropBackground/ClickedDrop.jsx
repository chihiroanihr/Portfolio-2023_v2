import { useState, useMemo, useCallback, useEffect, useContext } from "react";
import clsx from "clsx";
import { Drop } from "./index";
import { InsideSectionContext } from "@contexts";

const ClickedDrop = ({ clickedPosition, parentNodeRef }) => {
  console.log("[Render] @layouts/DropBackground/ClickedDrop.jsx");

  // Retrieve state from context
  const { isInsideSection } = useContext(InsideSectionContext);

  // Clicked Drop buffers
  const [addedDropPositions, setAddedDropPositions] = useState([]);

  // ----- Calculate relative Drop position ----- //
  const newDropPosition = useMemo(() => {
    // Calculate current window's relative position (height)
    const relativePositionHeight =
      window.innerHeight - parentNodeRef.current?.getBoundingClientRect()?.top;
    // Calculate x and y axis of the new Clicked Drop
    return {
      x: clickedPosition.x,
      y: relativePositionHeight - (window.innerHeight - clickedPosition.y),
    };
  }, [clickedPosition]);

  // --------------- Add new Drop --------------- //
  const addNewDrop = useCallback(() => {
    // Register new drop positions
    setAddedDropPositions((prevDropPositions) => [
      ...prevDropPositions,
      newDropPosition,
    ]);
  }, [newDropPosition]);

  // --------- Remove/Clear Drop buffer --------- //
  const removeDrop = useCallback(() => {
    setAddedDropPositions([]);
  }, []);

  // Calculate Drop position and add new Drop
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

  // Remove Drops immediately when left from view
  useEffect(() => {
    removeDrop();
  }, [isInsideSection]);

  // Render added Drops
  const addedDrops = addedDropPositions.map((drop, index) => (
    <Drop
      key={index}
      x={drop.x}
      y={drop.y}
      className={clsx(
        "animate-clicked-milky-drop1 dark:animate-clicked-chocolate-drop1", // Outer Drop Circle Animation Style
        "before:animate-clicked-milky-drop2 dark:before:animate-clicked-chocolate-drop2" // Inner Drop Circle Animation Style
      )}
    />
  ));

  return isInsideSection ? addedDrops : null;
};

export default ClickedDrop;
