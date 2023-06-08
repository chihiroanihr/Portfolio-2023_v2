import clsx from "clsx";

const Line = ({ id, className, children }) => {
  // ************************* CSS ************************* //
  const lineColorStyle = "before:bg-coffee-400";

  const lineStyle = clsx(
    // position
    "before:absolute before:top-0 before:md:left-1/2 before:left-[8px]",
    // layout
    "before:content-['']",
    "before:w-[1px] before:h-full",
    // color
    lineColorStyle
  );

  // ************************* JSX ************************* //
  return (
    <div
      id={id}
      className={clsx(
        className,
        "relative",
        "overflow-hidden",
        "mx-auto",
        "sm:py-[50px] py-[30px]",
        "w-full",
        lineStyle
      )}
    >
      {children}
    </div>
  );
};

export default Line;
