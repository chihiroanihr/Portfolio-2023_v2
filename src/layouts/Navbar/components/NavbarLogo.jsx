import React from "react";
import clsx from "clsx";

const NavbarLogo = ({ id, className }) => {
  // ************************* CSS ************************* //
  const fillColor = "fill-coffee-600 dark:fill-coffee-300";
  const textColor = "text-coffee-600 dark:text-coffee-300";

  const logoTextStyle = clsx(
    "font-banirmet-dua-cursive",
    "font-bold",
    "line-through",
    textColor,
    "md:text-[25px] text-[20px]"
  );

  // ************************* JSX ************************* //
  return (
    <a
      id={id}
      className={clsx(
        className,
        "relative",
        "h-full",
        "md:max-w-[80px] max-w-[70px]",
        "flex flex-col justify-center items-start"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {/* Logo Text Arch Path */}
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          id="SunCatcherStudio"
          fill="none"
          stroke="none"
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
        />
        <text
          className={fillColor}
          fontSize={25}
          letterSpacing={9}
          fontFamily="serif"
          fontWeight="bold"
        >
          <textPath xlinkHref="#SunCatcherStudio" side="left" startOffset={240}>
            {"PORTFOLIO"}
          </textPath>
        </text>
      </svg>

      {/* Logo */}
      <div
        className={clsx(
          "absolute",
          "ml-[-10px]",
          "h-full w-full",
          "flex justify-center items-center",
          logoTextStyle
        )}
      >
        R
      </div>
    </a>
  );
};
export default React.memo(NavbarLogo);
