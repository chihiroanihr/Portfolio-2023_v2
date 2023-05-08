import { useRef, useContext, useLayoutEffect } from "react";
import { PlayAnimationContext } from "@contexts";
import { imageCardsLandingItemStyle } from "@constants";
import { imageCardsData } from "@data";
import { useImageCardsLandingItemAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

// Forward Ref from Parent Component
const ImageCardsLandingItem = ({
  className,
  addToHomeTimeline,
  animateIndex,
}) => {
  console.log("[Render] @layouts/ImageCardsLandingItem.jsx");

  // DOM References for Landing Animations
  const imageCardsRefs = useRef([]);

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (ImageCardsLandingItem.jsx) Animation Started");

    // Get Animation
    const animation = useImageCardsLandingItemAnimation(imageCardsRefs.current);
    // Add timeline to parent component's timeline
    addToHomeTimeline(animation, animateIndex);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(animation, true);
      console.log("[LOG] (ImageCardsLandingItem.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <div className={`${className} relative`}>
      {imageCardsData.map(({ id, img }, index) => (
        <img
          ref={(el) => (imageCardsRefs.current[index] = el)}
          key={id}
          src={img}
          alt={id}
          className={`pointer-events-none prevent-select
          xxl:w-[400px] xxl:h-[650px]
          md:w-[300px] md:h-[500px]
          xs:w-[250px] xs:h-[400px]
          w-[180px] h-[300px]
          ${imageCardsLandingItemStyle.cardStyle}
          ${imageCardsLandingItemStyle.positionStyle[index]}
          ${imageCardsLandingItemStyle.rotationStyle[index]}
          ${imageCardsLandingItemStyle.brightnessStyle[index]}
          `}
        />
      ))}
    </div>
  );
};

export default ImageCardsLandingItem;
