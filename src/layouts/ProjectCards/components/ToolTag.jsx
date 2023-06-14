import clsx from "clsx";

const ToolTag = ({ item }) => {
  // ************************* CSS ************************* //
  const toolTagTextColor = "text-coffee-400/90";
  const toolTagBorderColor = "border-coffee-400/60";

  const toolTagTextFontStyle = clsx("font-medium", "xs:text-[10px] text-[8px]");

  const toolTagStyle = clsx(
    // color style
    toolTagBorderColor,
    toolTagTextColor,
    // font style
    "whitespace-nowrap",
    toolTagTextFontStyle,
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

export default ToolTag;
