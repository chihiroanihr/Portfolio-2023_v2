// Credits: @cssbuttons-io
// https://uiverse.io/cssbuttons-io/brown-otter-21

import React from "react";
import clsx from "clsx";
import { Button } from "./index";

const FancyButton = ({ id, className, value, onClick, btnStyle, children }) => {
  return (
    <Button
      id={id}
      className={clsx(
        className,
        "group",
        // position style
        "relative",
        "inline-block float-right",
        // layout style
        "rounded-3xl",
        "px-6 py-3",
        "border-2 border-solid",
        "text-center",
        // font style
        btnStyle.fontFamily,
        // color style
        btnStyle.bgColor,
        btnStyle.borderColor,
        // animation
        "[transition:border-color_300ms_ease-in-out,background-color_300ms_ease-in-out]"
      )}
      onClick={onClick}
    >
      {/* ------------ Hyphen ------------ */}
      <span
        className={clsx(
          // position style
          "absolute",
          "top-1/2 left-[1.5em]",
          "-translate-y-1/2 origin-left",
          // layout style
          "w-7 h-[2px]",
          "group-hover:scale-x-50 group-focus-visible:scale-x-50",
          // color style
          btnStyle.hyphenColor,
          // animation
          "[transition:transform_300ms_linear,background-color_300ms_ease-in-out]"
        )}
      />
      {/* ----------- Top key ------------ */}
      <span
        className={clsx(
          // position style
          "absolute",
          "-top-[2px]",
          "left-5",
          "group-hover:left-0 group-focus-visible:left-0",
          // layout style
          "w-9 h-[2px]",
          "group-hover:w-0 group-focus-visible:w-0",
          // color style
          btnStyle.emptyKeyColor,
          // animation
          "[transition:width_500ms_ease-out,left_300ms_ease-out,background-color_700ms]", // dark mode transition
          "will-change-[background-color]"
        )}
      />
      {/* ------------- Text ------------- */}
      <div
        className={clsx(
          // layout style
          "pl-[1.7em]",
          "group-hover:pl-[1em] group-focus-visible:pl-[1em]",
          "text-left uppercase",
          // font style
          "sm:text-[24px] xs:text-[20px] text-[15px]",
          // color style
          btnStyle.textColor,
          // animation
          "[transition:padding_300ms_linear,color_300ms_ease-in-out]"
        )}
      >
        {children ? children : value}
      </div>
      {/* ------- Bottom key large ------- */}
      <span
        className={clsx(
          // position style
          "absolute",
          "-bottom-[2px]",
          "right-12",
          "group-hover:right-6 group-focus-visible:right-6",
          // layout style
          "w-8 h-[2px]",
          "group-hover:w-0 group-focus-visible:w-0",
          // color sytle
          btnStyle.emptyKeyColor,
          // animation
          "[transition:width_300ms_ease-out,right_300ms_ease-out,background-color_700ms]", // dark mode transition
          "will-change-[background-color]"
        )}
      />
      {/* ------- Bottom key small ------- */}
      <span
        className={clsx(
          // position style
          "absolute",
          "right-5 -bottom-[2px]",
          "group-hover:right-0 group-focus-visible:right-0",
          // layout style
          "w-4 h-[2px]",
          "group-hover:w-0 group-focus-visible:w-0",
          // color style
          btnStyle.emptyKeyColor,
          // animation
          "[transition:width_500ms_ease-out,right_300ms_ease-out,background-color_700ms]", // dark mode transition
          "will-change-[background-color]"
        )}
      />
    </Button>
  );
};

export default React.memo(FancyButton);
