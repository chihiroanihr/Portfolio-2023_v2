import React, { useMemo } from "react";
import clsx from "clsx";
import { imageCardsItemStyle } from "@themes";
import { imageCardsListData } from "@data";

const ImageCardsList = ({ className }) => {
  console.log("[Render] [src] @layouts/ImageCardsList.jsx ----- Memoized");

  // ************************* JSX ************************* //
  const memoizedImageCards = useMemo(() => {
    return imageCardsListData.map(({ id, img }, index) => (
      <img
        id="image-card"
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
    <div id="image-cards-container" className={clsx(className, "relative")}>
      {memoizedImageCards}
    </div>
  );
};

export default React.memo(ImageCardsList);
