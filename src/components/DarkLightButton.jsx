import { useContext, useLayoutEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { PlayAnimationContext } from "@contexts";
import { buttonStyle } from "@constants";

// Forward Ref from Parent Component
const DarkLightButton = forwardRef((props, ref) => {
  // Retrieve Props
  const classes = props.className;
  const handleToggleDarkMode = props.handleToggleDarkMode;

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM references
  const darkLightRef = useRef(null);

  // Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (DarkLightButton.jsx) Animation Started");

    // Register animations to the timeline
    ref.current.timeline = gsap
      .timeline({ defaults: { clearProps: true } })
      .from(
        darkLightRef.current,
        {
          id: "dark-light-button",
          y: -10,
          opacity: 0,
          duration: 1,
          ease: "inOut",
        },
        ">-0.5"
      );

    // Clean Up Animations
    return () => {
      ref.current.timeline?.kill();
      console.log("[LOG] (DarkLightButton.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <div
      ref={darkLightRef}
      className={`${classes} ${buttonStyle.darkLightBtnStyle} cursor-pointer`}
      onClick={handleToggleDarkMode}
    >
      <svg
        className="w-10 fill-transparent dark:fill-yellow-400 stroke-coffee-600 dark:stroke-yellow-400
          transition-all duration-500"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
  );
});

// Default Props
DarkLightButton.defaultProps = { classes: "", handleToggleDarkMode: null };

export default DarkLightButton;
