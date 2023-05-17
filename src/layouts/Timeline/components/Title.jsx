import React from "react";
import clsx from "clsx";

const Title = ({ id, index, whiteSpace = null, children }) => {
  // ************************* CSS ************************* //
  const titleTextStyle = clsx(
    whiteSpace,
    "font-medium",
    "md:text-[25px] sm:text-[20px] xs:text-[16px] text-[14px]"
  );

  // ************************* JSX ************************* //
  return (
    <div
      id={id}
      className={clsx(
        "mt-[5px]",
        "flex md:items-end items-center justify-between",
        { "md:self-end md:flex-row-reverse": index % 2 === 0 },
        "gap-x-2",
        titleTextStyle
      )}
    >
      {children}
    </div>
  );
};

export default Title;
