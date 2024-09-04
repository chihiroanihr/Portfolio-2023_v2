import React from "react";
import clsx from "clsx";
import { Signature } from "@components/SVG";

const NavbarBrandDefault = ({ textColor }) => {
  // CSS
  const navbarBrandFirstTextStyle = clsx(
    textColor,
    "font-cabin-sans",
    "tracking-widest",
    "uppercase",
    "text-[10px]"
  );
  const navbarBrandSecondTextStyle = clsx(
    textColor,
    "font-radditya-signature-cursive",
    "xs:text-3xl text-2xl"
  );

  // JSX
  return (
    <>
      <p className={navbarBrandFirstTextStyle}>UI/UX Designer + Developer</p>
      <p
        className={clsx(navbarBrandSecondTextStyle, "mt-[-5px]", "opacity-50")}
      >
        Rhina Kim
      </p>
    </>
  );
};

const NavbarBrandCustom = ({ textColor, fillColor }) => {
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
    <>
      {/* Text */}
      <p className={clsx("mt-[-45px]", navbarBrandTextStyle)}>
        Creative Developer
      </p>
      {/* Signature SVG */}
      <Signature
        fillColor={fillColor}
        className={clsx("absolute", "pr-[15px]")}
      />
    </>
  );
};

const NavbarBrand = ({ id, className, defaultStyle = true }) => {
  console.log("[Render] [src] @layouts/Navbar/NavbarBrand.jsx ----- Memoized");

  // CSS
  const navbarBrandTextColor = "text-coffee-600 dark:text-coffee-300";
  const signatureSvgFillColor = "fill-coffee-600/40 dark:fill-coffee-300/30";

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
      {defaultStyle ? (
        <NavbarBrandDefault textColor={navbarBrandTextColor} />
      ) : (
        <NavbarBrandCustom
          textColor={navbarBrandTextColor}
          fillColor={signatureSvgFillColor}
        />
      )}
    </div>
  );
};

export default React.memo(NavbarBrand);
