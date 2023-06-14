import React, { useEffect, useRef } from "react";
import clsx from "clsx";

// Forward Ref from Parent Component
const ScrollLine = ({ className }) => {
  console.log("[Render] [src] @components/ScrollLine.jsx ----- Memoized");

  // ============================= Landing Animations ============================= //
  // Node References for Animations
  const scrollLineWrapperNodeRef = useRef(null);

  // ============================= Scroll Animations ============================= //
  // Configure
  const initScrollHeight = 15;
  const maxScrollHeight = 45;
  const scrollSpeed = 200;

  // Calculate Scroll Line Length
  const computeLineLengthOnScroll = () => {
    // Calculate the scroll percentage based on the window's scroll position, the document's height, and the window's height.
    const winTop = window.pageYOffset,
      docHeight = document.documentElement.scrollHeight,
      winHeight = window.innerHeight;

    // Select the referenced element and update its style property to change its width.
    const scrolled = (winTop / (docHeight - winHeight)) * scrollSpeed; // speed
    const initScrolled = (scrolled + initScrollHeight).toFixed(2); // Initial scrolled height

    // If reached to maximum 45vh then pause
    if (scrollLineWrapperNodeRef.current && initScrolled < maxScrollHeight) {
      scrollLineWrapperNodeRef.current.style.height = initScrolled + "vh";
    }
  };

  useEffect(() => {
    if (!scrollLineWrapperNodeRef.current) return;

    // Add to event listener
    window.addEventListener("scroll", computeLineLengthOnScroll);

    // Remove from event listener when unmounted
    return () =>
      window.removeEventListener("scroll", computeLineLengthOnScroll);
  }, []);

  // ************************* CSS ************************* //
  const scrollTextFontType = "font-default-sans";
  const scrollTextColor = "text-coffee-600 dark:text-coffee-300";
  const scrollLineColor = "bg-coffee-600 dark:bg-coffee-300";

  const scrollTextStyle = clsx(
    "uppercase",
    "text-[13px]", // text size
    "font-medium",
    "tracking-[0.2em]",
    scrollTextColor,
    scrollTextFontType
  );

  const scrollLineStyle = clsx(
    "w-[1px]", // line width
    "h-full",
    scrollLineColor
  );

  // ************************* JSX ************************* //
  return (
    <div
      ref={scrollLineWrapperNodeRef}
      id="scroll-line"
      className={clsx(className, "relative")}
    >
      <div
        className={clsx(
          "absolute",
          "-top-[5vh]",
          "w-full h-full",
          "flex flex-col justify-center items-center",
          "gap-1"
        )}
      >
        {/* Scroll Text */}
        <div id="text" className={clsx(scrollTextStyle, "prevent-select")}>
          Scroll
        </div>
        {/* Scroll Line */}
        <div id="line" className={scrollLineStyle} />
      </div>
    </div>
  );
};

export default React.memo(ScrollLine);
