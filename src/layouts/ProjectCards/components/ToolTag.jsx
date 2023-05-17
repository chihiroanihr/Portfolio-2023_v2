import React from "react";
import clsx from "clsx";
import { projectCardsItemStyle } from "@themes";

const ToolTag = ({ item }) => {
  const toolTagColor = projectCardsItemStyle.colorStyle.toolTagColor;
  const toolTagFont = projectCardsItemStyle.fontStyle.toolTagFont;

  const toolTagStyle = clsx(
    toolTagColor,
    toolTagFont,
    "whitespace-nowrap",
    // layout style
    "rounded-full py-[2px] px-[8px]",
    "before:content-['#'] before:pr-[2px]",
    // border style
    "border"
  );

  return (
    <li className={clsx(toolTagStyle, "flex justify-center items-center")}>
      {item}
    </li>
  );
};

export default React.memo(ToolTag);
