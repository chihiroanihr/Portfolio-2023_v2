import { useContext, useLayoutEffect, useRef } from "react";
import { Button } from "@components";
import { PlayAnimationContext } from "@contexts";
import { buttonStyle, colorStyle } from "@constants";
import { useDarkLightButtonAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

// Forward Ref from Parent Component
const DarkLightButton = ({
  className,
  handleToggleDarkMode,
  addToLandingTimeline,
  animateIndex,
}) => {
  console.log("[Render] @components/DarkLightButton.jsx");

  // DOM Reference
  const darkLightRef = useRef(null);

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // Render / Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (DarkLightButton.jsx) Animation Started");

    // Get Animation
    const animation = useDarkLightButtonAnimation(darkLightRef.current);
    // Add timeline to parent component's timeline
    addToLandingTimeline(animation, animateIndex);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(animation);
      console.log("[LOG] (DarkLightButton.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <Button
      ref={darkLightRef}
      className={`${className} ${buttonStyle.darkLightBtnStyle} cursor-pointer`}
      onClick={handleToggleDarkMode}
    >
      <svg
        className={`w-10 ${colorStyle.darkLightButtonColor} transition-all duration-500"`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </Button>
  );
};

export default DarkLightButton;
