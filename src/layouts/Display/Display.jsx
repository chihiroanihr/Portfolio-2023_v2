import React, { useRef } from "react";
import clsx from "clsx";
import { DisplayText, ScrollTextFlow } from "./components";
import { IdeaLightBulb } from "@components/SVG";
import { positionStyle } from "@themes";

const Display = () => {
  console.log("[Render] [src] @layouts/Display/Display.jsx ----- Memoized");

  const displaySectionWrapperRef = useRef(null);

  return (
    <div
      ref={displaySectionWrapperRef}
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
          "md:max-w-[80%]",
          "max-w-full",
          "flex justify-center items-center", // xl:flex-row-reverse
          "gap-5"
        )}
      >
        <DisplayText
          className="flex-[2]"
          parentRef={displaySectionWrapperRef}
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
        <ScrollTextFlow parentRef={displaySectionWrapperRef} />
      </div>
    </div>
  );
};

export default React.memo(Display);
