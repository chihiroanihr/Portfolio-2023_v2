import React, { useRef, useContext, useLayoutEffect, useMemo } from "react";
import clsx from "clsx";
import { PlayAnimationContext } from "@contexts";
import { imageCardsItemStyle } from "@themes";
import { imageCardsListData } from "@data";
import { useImageCardsListAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const ImageCardsList = ({ className, addToHomeTimeline, animateIndex }) => {
  console.log("[Render] @layouts/ImageCardsList.jsx");

  // Node References for Landing Animations
  const imageCardNodesRefs = useRef([]);

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (ImageCardsList.jsx) Animation Started");

    // Retrieve Animation
    const animation = useImageCardsListAnimation(imageCardNodesRefs.current);
    // Add timeline to parent component's timeline
    addToHomeTimeline(animation, animateIndex);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(animation, true);
      console.log("[LOG] (ImageCardsList.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ************************* JSX ************************* //
  const memoizedImageCards = useMemo(() => {
    return imageCardsListData.map(({ id, img }, index) => (
      <img
        ref={(el) => (imageCardNodesRefs.current[index] = el)}
        key={id}
        src={img}
        alt={id}
        className={clsx(
          "pointer-events-none prevent-select",
          "object-cover object-center",
          // Image Cards Size Styling
          "xxl:w-[400px] xxl:h-[650px]",
          "md:w-[300px] md:h-[500px]",
          "xs:w-[250px] xs:h-[400px]",
          "w-[180px] h-[300px]",
          // Image Cards Layout Styling
          "rounded-2xl",
          "shadow-img-cards-light dark:shadow-img-cards-dark",
          // Image Cards Position / Rotation / Brightness Styling (varies)
          imageCardsItemStyle.positionStyle[index],
          imageCardsItemStyle.rotationStyle[index],
          imageCardsItemStyle.brightnessStyle[index]
        )}
      />
    ));
  }, [imageCardsListData]);

  return (
    <div className={clsx(className, "relative")}>{memoizedImageCards}</div>
  );
};

export default React.memo(ImageCardsList);
