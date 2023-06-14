import React, { useRef, useEffect, useContext } from "react";
import clsx from "clsx";
import { SocialIcons, CreditsList, Copyright } from "./components";
import { Signature } from "@components/SVG";
import { DeviceTypeContext } from "@contexts";
import { useFooterAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const Footer = ({ className }) => {
  console.log("[Render] @layouts/Footer.jsx");

  // Node Reference
  const footerSectionNodeRef = useRef(null);

  const { isTouchDevice } = useContext(DeviceTypeContext);

  // --------------- Animate text section --------------- //
  useEffect(() => {
    if (!footerSectionNodeRef.current) return;
    console.log("[LOG] (Footer.jsx) Animation Started");

    // Retrive animation and register to timeline
    const animation = useFooterAnimation(
      footerSectionNodeRef.current,
      isTouchDevice
    );

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(animation);
      console.log("[LOG] (Footer.jsx) Animation Killed");
    };
  }, []);

  // ************************* CSS ************************* //
  const fontType = "font-default-sans";
  const textColor = "text-coffee-600 dark:text-coffee-300";
  const signatureSvgFillColor = "fill-coffee-600/40 dark:fill-coffee-300/30";

  // ************************* JSX ************************* //
  return (
    <footer
      ref={footerSectionNodeRef}
      id="footer"
      className={clsx(
        className,
        "page-layout default-page-spacing",
        "overflow-hidden",
        "w-full",
        fontType,
        textColor,
        "flex flex-col justify-center items-center"
      )}
    >
      {/* Social Icons */}
      <SocialIcons id="social-icons" />

      {/* Signature SVG */}
      <Signature
        id="signature"
        fillColor={signatureSvgFillColor}
        className={clsx("pr-[15px]", "w-full h-[50px]", "xs:scale-90 scale-75")}
      />

      {/* Credits */}
      <CreditsList id="credits" className="mt-10" />

      {/* Copyright */}
      <Copyright className="mt-20" />
    </footer>
  );
};

export default React.memo(Footer);
