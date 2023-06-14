import React, { useRef } from "react";
import clsx from "clsx";
import { DisplayText, ScrollTextFlow } from "./components";
import { IdeaLightBulb } from "@components/SVG";
import { positionStyle } from "@themes";

const Display = () => {
  console.log("[Render] [src] @layouts/Display/Display.jsx ----- Memoized");

  const scrollTextFlowContainerRef = useRef(null);

  return (
    <div
      ref={scrollTextFlowContainerRef}
      id="display"
      className={clsx(
        "relative",
        "min-h-screen",
        "h-full",
        "overflow-hidden",
        "page-layout default-page-spacing",
        positionStyle.displayToWorkSectionTransitionPosition
      )}
    >
      {/* Headings */}
      <div
        className={clsx(
          "mx-auto",
          "xl:aspect-[5/3]",
          "max-w-[80%]",
          "xl:flex-row-reverse flex justify-center items-center",
          "gap-5"
        )}
      >
        <DisplayText
          className="flex-[2]"
          parentRef={scrollTextFlowContainerRef}
        />
        <IdeaLightBulb
          className={clsx("flex-1", "w-full h-full", "max-h-screen")}
        />
      </div>

      {/* Display */}
      <div
        className={clsx(
          "mt-[100px]",
          "w-full",
          "flex justify-center items-center"
        )}
      >
        <ScrollTextFlow parentRef={scrollTextFlowContainerRef} />
      </div>
    </div>
  );
};

export default React.memo(Display);
