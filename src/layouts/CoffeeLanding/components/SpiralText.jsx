// Credits: distillocafe
// https://distillocaffe.com/en/

import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import { spiralSvgData } from "@data";

const SpiralText = ({ className, fillColor, onDataUpdate }) => {
  console.log(
    "[Render] [src] @layouts/CoffeeLanding/SpiralText.jsx ----- Memoized"
  );

  // Node References
  const textPathNodeRef = useRef(null);
  const spiralPathNodeRef = useRef(null);

  // Obtain Node elements and pass it to parent component
  useEffect(() => {
    if (!textPathNodeRef.current || !spiralPathNodeRef.current) return;

    // Get Total Length of the SVG
    const totalPathLength = spiralPathNodeRef.current.getTotalLength();

    // Pass values to parent component
    onDataUpdate(
      textPathNodeRef.current,
      spiralPathNodeRef.current,
      totalPathLength
    );
  }, [textPathNodeRef.current, spiralPathNodeRef.current]);

  return (
    <svg xmlSpace="preserve" viewBox="0 0 1900 780" className={className}>
      <defs>
        <path
          ref={spiralPathNodeRef}
          id="spiral-path"
          d={spiralSvgData.pathData}
          style={{ fill: "none", stroke: "none" }}
        />
      </defs>
      <text>
        <textPath
          ref={textPathNodeRef}
          id="spiral-text-path"
          xlinkHref="#spiral-path"
          aria-label={spiralSvgData.textData}
          textLength={5420}
          startOffset={0}
          className={clsx(
            fillColor,
            "transition-[fill] duration-300 will-change-[fill]" // dark mode transition
          )}
          // style={{letterSpacing: "10px"}}
          // textRendering="optimizeSpeed"
        >
          {spiralSvgData.textData}
        </textPath>
      </text>
    </svg>
  );
};

export default React.memo(SpiralText);
