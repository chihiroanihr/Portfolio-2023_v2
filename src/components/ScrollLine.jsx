import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { PlayAnimationContext } from "@contexts";
import { useScrollLineAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

// Forward Ref from Parent Component
const ScrollLine = ({ className, addToHomeTimeline, animateIndex }) => {
  console.log("[Render] @components/ScrollLine.jsx");

  // ============================= Landing Animations ============================= //
  // Node References for Animations
  const scrollLineWrapperNodeRef = useRef(null);
  // GSAP Timeline Reference
  const scrollLineTimelineRef = useRef(null);

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // Update animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (ScrollLine.jsx) Animation Started");

    const ctx = gsap.context(
      () => {
        // Retrieve animation
        scrollLineTimelineRef.current = useScrollLineAnimation();
      },
      // Scope
      scrollLineWrapperNodeRef
    );

    // Add timeline to parent component's timeline
    addToHomeTimeline(scrollLineTimelineRef.current, animateIndex);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (ScrollLine.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ============================= Scroll Animations ============================= //
  // Configure
  const initScrollHeight = 15;
  const maxScrollHeight = 45;
  const scrollSpeed = 200;

  useEffect(() => {
    const onScroll = () => {
      // Calculate the scroll percentage based on the window's scroll position,
      // the document's height, and the window's height.
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

    // Add to event listener
    window.addEventListener("scroll", onScroll);

    // Remove from event listener when unmounted
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ************************* CSS ************************* //
  const scrollTextFontType = "font-default-sans";
  const scrollTextFontSize = "text-[13px]";
  const scrollTextColor = "text-coffee-600 dark:text-coffee-300";
  const scrollLineColor = "bg-coffee-600";

  const scrollTextStyle = clsx(
    scrollTextFontSize,
    scrollTextFontType,
    "font-medium",
    "tracking-[0.2em] uppercase",
    scrollTextColor
  );

  const scrollLineStyle = clsx("w-[1px] h-full", scrollLineColor);

  // ************************* JSX ************************* //
  return (
    <div ref={scrollLineWrapperNodeRef} className={clsx(className, "relative")}>
      <div
        className={clsx(
          "absolute top-[-5vh]",
          "w-full h-full",
          "flex flex-col justify-center items-center",
          "gap-1"
        )}
      >
        {/* Scroll Text */}
        <div id="scroll-text" className={scrollTextStyle}>
          Scroll
        </div>
        {/* Scroll Line */}
        <div id="scroll-line" className={scrollLineStyle} />
      </div>
    </div>
  );
};

export default React.memo(ScrollLine);
