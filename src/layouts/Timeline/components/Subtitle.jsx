import React from "react";
import clsx from "clsx";

const Subtitle = ({ id, index, children }) => {
  // ************************* CSS ************************* //
  const subtitleTextColor = "text-coffee-400";

  const subtitleTextStyle = clsx(
    "sm:text-[14px] xs:text-[13px] text-[12px]",
    subtitleTextColor
  );

  // ************************* JSX ************************* //
  return (
    <div
      id={id}
      className={clsx(
        "mt-[5px]",
        "flex flex-wrap items-center",
        { "md:self-end": index % 2 === 0 },
        "gap-x-2 gap-y-1",
        subtitleTextStyle
      )}
    >
      {children}
    </div>
  );
};

export default Subtitle;
