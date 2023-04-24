import { useState, useContext, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpiralText, Coffee } from "@components";
import { PlayAnimationContext } from "@contexts";

gsap.registerPlugin(ScrollTrigger);

const CoffeeLanding = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM References for Scroll Animations
  const coffeeLandingRef = useRef(null);

  // Children DOM References
  const [textPathRef, setTextPathRef] = useState(null);
  const [spiralPathDOM, setSpiralPathDOM] = useState(null);
  const [totalPathLength, setTotalPathLength] = useState(0);

  // Handle children DOM data
  const handleChildData = (textPathRef, spiralPathDOM, totalPathLength) => {
    setTextPathRef(textPathRef);
    setSpiralPathDOM(spiralPathDOM);
    setTotalPathLength(totalPathLength);
  };

  // Update Animation when playAnimation is triggered &
  // when spiral svg paths/texts are updated
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (CoffeeLanding.jsx) Animation Started");

    // Register Scroll Triggered Animation
    const timeline = gsap.to(textPathRef.current, {
      attr: { startOffset: totalPathLength - 400 },
      scrollTrigger: {
        id: "home-spiral-text-on-scroll",
        trigger: coffeeLandingRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=100%",
        // !! scroll position after this section gets messed up due to pinned element
        // thus refresh it first
        refreshPriority: 1,
      },
    });

    // Clean up Animations
    return () => {
      timeline.scrollTrigger.kill();
      timeline.kill();
      console.log("[LOG] (CoffeeLanding.jsx) Animation Killed");
    };
  }, [playAnimation, textPathRef, spiralPathDOM, totalPathLength]);

  return (
    <div
      ref={coffeeLandingRef}
      className={`${classes} flex justify-center items-center`}
    >
      {/* <CoffeeAlt /> */}
      <Coffee />
      <SpiralText
        onDataUpdate={handleChildData}
        className="absolute xxl:scale-[120%] xl:scale-[130%] md:scale-[160%] scale-[210%]
        font-default-sans font-medium xxxl:text-xl text-2xl"
        fillColor="fill-coffee-600 dark:fill-coffee-300"
      />
    </div>
  );
};

// Default Props
CoffeeLanding.defaultProps = {
  classes: "",
};

export default CoffeeLanding;
