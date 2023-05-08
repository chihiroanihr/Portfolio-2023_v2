import React, { useRef, useEffect } from "react";
import { spiralSvgData } from "@data";

const SpiralText = ({ className, fillColor, onDataUpdate }) => {
  console.log("[Render] @layouts/CoffeeLanding/SpiralText.jsx");

  // DOM References
  const textPathRef = useRef(null);
  const spiralPathRef = useRef(null);

  // Obtain DOM elements and pass it to parent component
  useEffect(() => {
    if (!textPathRef || !spiralPathRef) return;

    // Get Total Length of the SVG
    const totalPathLength = spiralPathRef.current.getTotalLength();
    // Pass values to parent component
    onDataUpdate(textPathRef.current, spiralPathRef.current, totalPathLength);
  }, [textPathRef, spiralPathRef]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1900 780"
      className={className}
    >
      <defs>
        <path
          ref={spiralPathRef}
          id="spiral-path"
          d={spiralSvgData.pathData}
          style={{
            fill: "none",
            stroke: "none",
          }}
        />
      </defs>
      <text>
        <textPath
          ref={textPathRef}
          id="spiral-text-path"
          xlinkHref="#spiral-path"
          aria-label={spiralSvgData.textData}
          side="right"
          textLength={5420}
          startOffset={0}
          className={fillColor}
        >
          {spiralSvgData.textData}
        </textPath>
      </text>
    </svg>
  );
};

export default React.memo(SpiralText);
