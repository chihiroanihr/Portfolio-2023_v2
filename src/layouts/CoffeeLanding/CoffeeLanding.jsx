import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import clsx from "clsx";
import { SpiralText, Coffee } from "./components";
import { checkObjectNullEmpty } from "@utils";
import { useCoffeeLandingAnimationOnScroll } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const CoffeeLanding = () => {
  console.log(
    "[Render] [src] @layouts/CoffeeLanding/CoffeeLanding.jsx ----- Memoized"
  );

  // Node References for Scroll Animations
  const coffeeLandingContainerNodeRef = useRef(null);

  // Children Node States
  const [spiralTextData, setSpiralTextData] = useState({
    textPathNode: null,
    spiralPathNode: null,
    totalPathLength: 0,
  });

  // Handle Children Node data
  const handleChildData = useCallback(
    (textPathNode, spiralPathNode, totalPathLength) => {
      setSpiralTextData({
        textPathNode,
        spiralPathNode,
        totalPathLength,
      });
    },
    []
  );

  // Update Animation when playAnimation is triggered & when spiral svg paths/texts are updated
  useLayoutEffect(() => {
    if (
      !coffeeLandingContainerNodeRef.current ||
      checkObjectNullEmpty(spiralTextData)
    )
      return;
    console.log("[LOG] (CoffeeLanding.jsx) Animation Started");

    // Compute Start Position
    const startOffset = spiralTextData.totalPathLength - 400;

    // Retrieve Animation
    const animation = useCoffeeLandingAnimationOnScroll(
      spiralTextData.textPathNode, // scroll target
      coffeeLandingContainerNodeRef.current, // scroll triggerer
      startOffset // start position
    );

    // Clean Up Animations
    return () => cleanUpGsapAnimation(animation);
  }, [spiralTextData]);

  // ************************* CSS ************************* //
  const spiralTextFont = "font-default-sans";
  const spiralTextFillColor = "fill-coffee-600 dark:fill-coffee-300";

  const spiralTextTextStyle = clsx(
    "font-medium",
    "xxxl:text-xl text-2xl",
    spiralTextFont,
    spiralTextFillColor
  );

  // ************************* JSX ************************* //
  return (
    <div
      ref={coffeeLandingContainerNodeRef}
      id="coffee-landing"
      className={clsx(
        "prevent-select",
        "relative",
        "h-screen xl:my-[300px] lg:my-[100px]",
        "flex justify-center items-center"
      )}
    >
      <Coffee />
      <SpiralText
        className={clsx(
          "absolute",
          "xxl:scale-[100%] xl:scale-[130%] md:scale-[160%] scale-[210%]",
          spiralTextTextStyle
        )}
        fillColor={spiralTextFillColor}
        onDataUpdate={handleChildData}
      />
    </div>
  );
};

export default React.memo(CoffeeLanding);
