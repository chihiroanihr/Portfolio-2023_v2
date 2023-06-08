import React from "react";
import clsx from "clsx";
import { Signature } from "@components/SVG";

const NavbarBrandDefault = ({ id, className, textColor }) => {
  // CSS
  const navbarBrandFirstTextStyle = clsx(
    textColor,
    "font-cabin-sans",
    "text-[10px]",
    "tracking-widest",
    "uppercase"
  );
  const navbarBrandSecondTextStyle = clsx(
    textColor,
    "font-banirmet-dua-cursive",
    "xs:text-3xl text-2xl"
  );

  // JSX
  return (
    <div
      id={id}
      className={clsx(
        className,
        "h-full",
        "text-center",
        "flex flex-col justify-center",
        "sm:gap-[4px] gap-[2px]"
      )}
    >
      <p className={navbarBrandFirstTextStyle}>UI/UX Designer + Developer</p>
      <p className={navbarBrandSecondTextStyle}>Rhina Kim</p>
    </div>
  );
};

const NavbarBrandCustom = ({ id, className, textColor, fillColor }) => {
  // CSS
  const navbarBrandTextStyle = clsx(
    "whitespace-nowrap",
    textColor,
    "font-cabin-sans",
    "xs:text-[12px] text-[10px]",
    "tracking-widest",
    "uppercase"
  );

  // JSX
  return (
    <div
      id={id}
      className={clsx(
        className,
        "h-full",
        "text-center",
        "flex flex-col justify-center",
        "sm:gap-[4px] gap-[2px]"
      )}
    >
      {/* Text */}
      <p className={clsx("mt-[-45px]", navbarBrandTextStyle)}>
        UI/UX Designer + Developer
      </p>

      {/* Signature SVG */}
      <Signature
        fillColor={fillColor}
        className={clsx("absolute", "pr-[15px]")}
      />
    </div>
  );
};

const NavbarBrand = ({ id, className, defaultStyle = true }) => {
  console.log("[Render] @layouts/Navbar/NavbarBrand.jsx");

  // CSS
  const navbarBrandTextColor = "text-coffee-600 dark:text-coffee-300";
  const signatureSvgFillColor = "fill-coffee-600/40 dark:fill-coffee-300/30";

  // JSX
  return defaultStyle ? (
    <NavbarBrandDefault
      id={id}
      className={clsx(className, navbarBrandTextColor)}
    />
  ) : (
    <NavbarBrandCustom
      id={id}
      className={className}
      textColor={navbarBrandTextColor}
      fillColor={signatureSvgFillColor}
    />
  );
};

export default React.memo(NavbarBrand);
