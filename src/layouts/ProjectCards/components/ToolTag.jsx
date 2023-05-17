import React from "react";
import clsx from "clsx";

const ToolTag = ({ item }) => {
  // ************************* CSS ************************* //
  const toolTagTextColor = "text-coffee-400/90";
  const toolTagBorderColor = "border-coffee-400/60";
  const toolTagTextFont = "font-medium text-[10px]";

  const toolTagStyle = clsx(
    // color style
    clsx(toolTagTextColor, toolTagBorderColor),
    // font style
    "whitespace-nowrap",
    toolTagTextFont,
    // layout style
    "rounded-full py-[2px] px-[8px]",
    "before:content-['#'] before:pr-[2px]",
    // border style
    "border"
  );

  // ************************* JSX ************************* //
  return (
    <li className={clsx(toolTagStyle, "flex justify-center items-center")}>
      {item}
    </li>
  );
};

export default React.memo(ToolTag);
