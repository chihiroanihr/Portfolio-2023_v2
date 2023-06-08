import React from "react";
import clsx from "clsx";

const Heading = ({ id, value }) => {
  // ************************* CSS ************************* //
  const headingFontFamily = "font-default-serif";

  const headingTextStyle = clsx(
    "text-center",
    "md:text-[90px] xs:text-[42px] text-[30px]",
    "leading-tight",
    "tracking-widest"
  );

  const behindWritingFontFamily = "font-banirmet-dua-cursive";

  const behindWritingTextStyle = clsx(
    "whitespace-pre",
    "md:text-[120px] xs:text-[62px] text-[30px]",
    "tracking-normal",
    "text-white"
  );

  // ************************* JSX ************************* //
  return (
    // Heading text
    <h1
      id={id}
      className={clsx(
        "relative",
        "md:px-[50px] sm:px-[40px] px-[20px]",
        headingFontFamily,
        headingTextStyle
      )}
    >
      {/* Behind background text */}
      <div
        className={clsx(
          "z-[-1]",
          "absolute",
          "top-1/2 -translate-y-1/2",
          "left-1/2 -translate-x-1/2",
          "rotate-[-10deg]",
          behindWritingFontFamily,
          behindWritingTextStyle,
          "prevent-select"
        )}
      >
        {value}.
      </div>
      {value}
    </h1>
  );
};

export default React.memo(Heading);
