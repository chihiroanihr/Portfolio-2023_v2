import React, { useState, useContext, useRef } from "react";
import { DeviceTypeContext } from "@contexts";
import AutomaticDrop from "./AutomaticDrop";
import ClickedDrop from "./ClickedDrop";

const DropBackground = ({ id, className, isOverlayCompleted }) => {
  console.log("[Render] @layouts/DropBackground.jsx");

  // Allow Click Drop depending on device type
  const { isTouchDevice } = useContext(DeviceTypeContext);

  // DOM References
  const dropBackgroundWrapperRef = useRef(null);

  // ======================= Clicked Drop ======================= //
  const [clickedPosition, setClickedPosition] = useState({ x: 0, y: 0 });

  // When clicked
  const handleDropClick = (event) => {
    // Get click position
    const { clientX: x, clientY: y } = event;
    setClickedPosition({ x, y });
  };

  return (
    // =========== Click Drop Area =========== //
    <div
      ref={dropBackgroundWrapperRef}
      id={id}
      className={className}
      onClick={
        isTouchDevice
          ? null // If touch device then remove onClick drop animations
          : handleDropClick
      }
    >
      {/* ============== Drops ============== */}
      {/* Clicked Drops */}
      <ClickedDrop
        clickedPosition={clickedPosition}
        parentRef={dropBackgroundWrapperRef}
        isOverlayCompleted={isOverlayCompleted}
      />
      {/* Normal/Automatic Drop */}
      <AutomaticDrop
        parentRef={dropBackgroundWrapperRef}
        isOverlayCompleted={isOverlayCompleted}
      />
    </div>
  );
};

export default React.memo(DropBackground);
