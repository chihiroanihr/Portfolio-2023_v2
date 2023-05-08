import React, { useRef, useState, useContext, useLayoutEffect } from "react";
import { SpiralText, Coffee } from "./index";
import { PlayAnimationContext } from "@contexts";
import { colorStyle } from "@constants";
import { useCoffeeLandingAnimationOnScroll } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const CoffeeLanding = ({ id, className }) => {
  console.log("[Render] @layouts/CoffeeLanding.jsx");

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM References for Scroll Animations
  const coffeeLandingRef = useRef(null);

  // Children DOM States
  const [spiralTextData, setSpiralTextData] = useState({
    textPathDOM: null,
    spiralPathDOM: null,
    totalPathLength: 0,
  });

  // Handle children DOM data
  const handleChildData = (textPathDOM, spiralPathDOM, totalPathLength) => {
    setSpiralTextData({
      textPathDOM,
      spiralPathDOM,
      totalPathLength,
    });
  };

  // Update Animation when playAnimation is triggered &
  // when spiral svg paths/texts are updated
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (CoffeeLanding.jsx) Animation Started");

    // Compute Start Position
    const startOffset = spiralTextData.totalPathLength - 400;

    // Register Scroll Triggered Animation
    const animation = useCoffeeLandingAnimationOnScroll(
      spiralTextData.textPathDOM, // scroll target
      coffeeLandingRef.current, // scroll triggerer
      startOffset // start position
    );

    // Clean up Animations
    return () => {
      cleanUpGsapAnimation(animation);
      console.log("[LOG] (CoffeeLanding.jsx) Animation Killed");
    };
  }, [playAnimation, spiralTextData]);

  return (
    <div
      ref={coffeeLandingRef}
      id={id}
      className={`${className} prevent-select
      relative flex justify-center items-center`}
    >
      {/* <CoffeeAlt /> */}
      <Coffee />
      <SpiralText
        className="absolute
        xxl:scale-[120%] xl:scale-[130%] md:scale-[160%] scale-[210%]
        font-default-sans font-medium xxxl:text-xl text-2xl"
        fillColor={colorStyle.spiralTextTextColor}
        onDataUpdate={handleChildData}
      />
    </div>
  );
};

export default React.memo(CoffeeLanding);
