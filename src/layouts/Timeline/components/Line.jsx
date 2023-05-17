import clsx from "clsx";

const Line = ({ id, children }) => {
  // ************************* CSS ************************* //
  const lineColorStyle = "before:bg-coffee-400";

  const lineStyle = clsx(
    // position
    "before:absolute before:top-0 before:md:left-1/2 before:sm:left-[58px] before:left-[38px]",
    // layout
    "before:content-[''] before:-ml-px",
    "before:w-[2px] before:h-full",
    // color
    lineColorStyle
  );

  // ************************* JSX ************************* //
  return (
    <div
      id={id}
      className={clsx(
        "relative",
        "overflow-hidden",
        "mx-auto md:my-[30px] my-[20px]",
        "sm:p-[50px] p-[30px]",
        "w-full",
        lineStyle
      )}
    >
      {children}
    </div>
  );
};

export default Line;
