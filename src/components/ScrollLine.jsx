import { useContext, useLayoutEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { PlayAnimationContext } from "@contexts";

// Forward Ref from Parent Component
const ScrollLine = forwardRef((props, ref) => {
  // Retrieve Props
  const classes = props.className;

  // ============================= Landing Animations ============================= //
  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM References for Landing Animations
  const scrollTextRef = useRef(null);
  const scrollLineRef = useRef(null);

  // Update animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (ScrollLine.jsx) Animation Started");

    // Register animations to the timeline
    ref.current.timeline = gsap
      .timeline({ defaults: { clearProps: true } })
      .from(scrollTextRef.current, {
        id: "home-scroll-text",
        duration: 1,
        opacity: 0,
        ease: "out",
      })
      .from(
        scrollLineRef.current,
        {
          id: "home-scroll-line",
          duration: 1,
          opacity: 0,
          scaleY: 0,
          transformOrigin: "top",
          ease: "out",
        },
        ">-0.5"
      );

    // Clean Up Animations
    return () => {
      ref.current.timeline?.kill();
      console.log("[LOG] (ScrollLine.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ============================= Scroll Animations ============================= //
  // DOM References for Scroll Animations
  const scrollLineWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      // Calculate the scroll percentage based on the window's scroll position,
      // the document's height, and the window's height.
      const wintop = window.pageYOffset,
        docheight = document.documentElement.scrollHeight,
        winheight = window.innerHeight;
      // Select the referenced element and update its style property to change its width.
      const scrolled = (wintop / (docheight - winheight)) * 100;
      const scrolled15vh = (+scrolled + 15).toFixed(2); // Initial height: 15vh
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
    <div ref={scrollLineWrapperRef} className={`${classes} relative`}>
      <div
        className="absolute top-[-5vh] w-full h-full
        flex flex-col justify-center items-center gap-1"
      >
        {/* Scroll Text */}
        <div
          ref={scrollTextRef}
          className="text-coffee-600 dark:text-coffee-300 text-[13px]
          font-default-sans font-medium tracking-[0.2em] uppercase"
        >
          Scroll
        </div>
        {/* Scroll Line */}
        <div ref={scrollLineRef} className="h-full w-[1px] bg-coffee-600" />
      </div>
    </div>
  );
});

// Default Props
ScrollLine.defaultProps = { classes: "" };

export default ScrollLine;
