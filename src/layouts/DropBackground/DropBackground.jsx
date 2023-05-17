import React, { useState, useContext, useRef } from "react";
import { AutomaticDrop, ClickedDrop } from "./index";
import { DeviceTypeContext } from "@contexts";

const DropBackground = ({ id, className }) => {
  console.log("[Render] @layouts/DropBackground.jsx");

  // Node Reference
  const dropBackgroundNodeRef = useRef(null);

  // Allow Click Drop depending on device type
  const { isTouchDevice } = useContext(DeviceTypeContext);

  // ======================= Clicked Drop ======================= //
  const [clickedPosition, setClickedPosition] = useState({ x: 0, y: 0 });

  const handleDropClick = (event) => {
    // Get click position
    const { clientX: x, clientY: y } = event;
    setClickedPosition({ x, y });
  };

  return (
    // =========== Click Drop Area =========== //
    <div
      ref={dropBackgroundNodeRef}
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
        parentNodeRef={dropBackgroundNodeRef}
      />
      {/* Normal/Automatic Drop */}
      <AutomaticDrop parentNodeRef={dropBackgroundNodeRef} />
    </div>
  );
};

export default React.memo(DropBackground);
