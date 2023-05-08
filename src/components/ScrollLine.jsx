import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { PlayAnimationContext } from "@contexts";
import { colorStyle } from "@constants";
import { useScrollLineAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

// Forward Ref from Parent Component
const ScrollLine = ({ className, addToHomeTimeline, animateIndex }) => {
  console.log("[Render] @components/ScrollLine.jsx");

  // ============================= Landing Animations ============================= //
  // DOM References for Animations
  const scrollLineWrapperRef = useRef(null);

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // Update animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (ScrollLine.jsx) Animation Started");

    // Add animetion timeline to context
    const ctx = gsap.context(
      () => {
        const animation = useScrollLineAnimation();
        addToHomeTimeline(animation, animateIndex);
      },
      // Scope
      scrollLineWrapperRef
    );

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (ScrollLine.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ============================= Scroll Animations ============================= //
  useLayoutEffect(() => {
    const onScroll = () => {
      // Calculate the scroll percentage based on the window's scroll position,
      // the document's height, and the window's height.
      const wintop = window.pageYOffset,
        docheight = document.documentElement.scrollHeight,
        winheight = window.innerHeight;
      // Select the referenced element and update its style property to change its width.
      const scrolled = (wintop / (docheight - winheight)) * 200; // speed
      const scrolled15vh = (scrolled + 15).toFixed(2); // Initial height: 15vh
      // If reached to maximum 45vh then pause
      if (scrollLineWrapperRef.current && scrolled15vh < 45) {
        scrollLineWrapperRef.current.style.height = scrolled15vh + "vh";
      }
    };

    // Add to event listener
    window.addEventListener("scroll", onScroll);

    // Remove from event listener when unmounted
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={scrollLineWrapperRef} className={`${className} relative`}>
      <div
        className="absolute top-[-5vh] w-full h-full
        flex flex-col justify-center items-center gap-1"
      >
        {/* Scroll Text */}
        <div
          id="scroll-text"
          className={`text-[13px] ${colorStyle.scrollLineTextColor}
          font-default-sans font-medium tracking-[0.2em] uppercase`}
        >
          Scroll
        </div>
        {/* Scroll Line */}
        <div
          id="scroll-line"
          className={`h-full w-[1px] ${colorStyle.scrollLineColor}`}
        />
      </div>
    </div>
  );
};

export default ScrollLine;
