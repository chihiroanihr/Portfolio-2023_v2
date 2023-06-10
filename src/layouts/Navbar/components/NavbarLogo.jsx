import React from "react";
import clsx from "clsx";
import logoImg from "@assets/images/logo.png";

const NavbarLogo = ({ id, className }) => {
  const fillColor = "fill-coffee-600 dark:fill-coffee-300";

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
      <img
        src={logoImg}
        alt={"Back to Home"}
        className={clsx(
          "absolute",
          "w-full h-full",
          "ml-[-10px]",
          "sm:p-[20px] p-[15px]",
          "object-contain",
          "brightness-125 dark:brightness-150"
        )}
      />
    </a>
  );
};
export default React.memo(NavbarLogo);
