import React from "react";
import clsx from "clsx";

const ToolTag = ({ item }) => {
  // ************************* CSS ************************* //
  const toolTagBgColor = "bg-coffee-400";
  const toolTagtextColor = "text-white";

  const toolTagStyle = clsx(
    // layout
    "px-[10px] py-[3px]",
    "rounded-sm",
    // font
    "text-[12px]",
    // color
    toolTagBgColor,
    toolTagtextColor
  );

  // ************************* JSX ************************* //
  return <li className={clsx("inline-block", toolTagStyle)}>{item}</li>;
};

export default React.memo(ToolTag);
