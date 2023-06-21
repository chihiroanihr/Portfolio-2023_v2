import React, { useMemo } from "react";
import clsx from "clsx";
import { RevealAnimationWrapper } from "@components";

const Credit = ({ title, children }) => {
  // Memoize
  const memoizedTitleSection = useMemo(() => {
    return (
      <RevealAnimationWrapper inputText={title}>
        {({ text }) => (
          <p id="title" className={clsx("font-medium", "text-center")}>
            {text}
          </p>
        )}
      </RevealAnimationWrapper>
    );
  }, [title]);

  return (
    <div id="credit" className={clsx("flex-1", "w-full")}>
      {/* Title */}
      {memoizedTitleSection}

      {/* Content */}
      <div
        id="content"
        className={clsx("flex flex-col", "gap-y-3", "xs:mt-5 mt-3")}
      >
        {children}
      </div>
    </div>
  );
};

export default Credit;
