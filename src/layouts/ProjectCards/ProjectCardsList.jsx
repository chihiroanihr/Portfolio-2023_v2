import React, { useMemo, useRef, useContext, useLayoutEffect } from "react";
import clsx from "clsx";
import {
  NewTag,
  Description,
  CategoryLinksContainer,
  ToolTagsList,
} from "./components";
import { Card } from "@components";
import { DeviceTypeContext } from "@contexts";
import { projectCardsItemStyle } from "@themes";
import { projectsListData } from "@data";
import { useIntersectionObserver } from "@utils";
import { useProjectCardsListAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const ProjectCardsList = ({ id, className, parentRef }) => {
  console.log("[Render] @layouts/ProjectCardsList.jsx");

  // Node reference for animation
  const projectCardsListNodeRef = useRef();

  // Allow hover depending on device type
  const { isTouchDevice } = useContext(DeviceTypeContext);

  // ====================== Animations ====================== //
  // Re-render when entering and leave-back from Work section view to reset animation
  const isIntersected = useIntersectionObserver(parentRef, {
    rootMargin: "0px 0px -100%",
  });

  useLayoutEffect(() => {
    if (!projectCardsListNodeRef.current) return;
    console.log("[LOG] (ProjectCardsList.jsx) Animation Started");

    // No memoization of context since individual cards animation have to restart when inside overlay
    const ctx = useProjectCardsListAnimation(
      projectCardsListNodeRef.current,
      parentRef.current
    );

    // Clean up animation
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (ProjectCardsList.jsx) Animation Killed");
    };
  }, [isIntersected]);

  // ************************* CSS ************************* //
  const cardItemColor = projectCardsItemStyle.colorStyle.cardItemColor;
  const cardItemColorMobile =
    projectCardsItemStyle.colorStyle.cardItemColorMobile;
  const thumbnailColor = projectCardsItemStyle.colorStyle.thumbnailColor;
  const titleColor = projectCardsItemStyle.colorStyle.titleColor;
  const titleFont = projectCardsItemStyle.fontStyle.titleFont;

  const cardItemStyle = clsx(
    // color style
    isTouchDevice ? cardItemColorMobile : cardItemColor,
    "transition-color duration-200",
    // layout style
    "w-[80%] max-w-[400px]",
    "min-h-[400px]",
    "rounded-[20px]",
    // border style
    "border border-b-2",
    // effect style
    "backdrop-blur-[15px]"
  );
  const thumbnailStyle = clsx(
    thumbnailColor,
    // layout style
    "w-full",
    "xs:h-[200px] h-[150px]",
    "rounded-[10px]",
    // effect style
    "shadow-btn-on-cards"
  );
  const titleStyle = clsx(titleColor, titleFont);

  // ************************* JSX ************************* //
  // Memoize the mapped projectsListData array
  const memoizedProjectCardListItems = useMemo(() => {
    return projectsListData.map((item, index) => (
      <Card
        key={item.id}
        id={`card${item.id}`}
        className={clsx(
          cardItemStyle,
          projectCardsItemStyle.positionStyle[index]
        )}
      >
        {/* New */}
        {item.new && <NewTag id="new-tag" />}

        {/* Thumbnails */}
        <div className={thumbnailStyle}></div>

        {/* Title */}
        <div
          className={titleStyle}
          style={{ textShadow: "2px 2px 1px rgba(80, 46, 21, 0.25)" }}
        >
          {item.title}
        </div>

        {/* Description */}
        <Description
          item={item.description}
          style={{
            textShadow: isTouchDevice
              ? "rgba(165, 154, 153, 1) 1px 2px 2px" // mobile
              : "rgba(165, 154, 153, 0.8) 1px 1.8px 2px", // desktop
          }} // 2px 2px 1px rgba(80, 46, 21, 0.25)
        />

        {/* Tools Tags */}
        {item.tools && item.tools.length > 0 && (
          <ToolTagsList className="mt-[10px]" item={item.tools} />
        )}

        {/* Category / Link to Project */}
        <CategoryLinksContainer className="mt-[20px]" item={item} />
      </Card>
    ));
  }, [isTouchDevice, projectsListData]);

  return (
    <div
      ref={projectCardsListNodeRef}
      id={id}
      className={clsx(
        className,
        "flex flex-col jusity-center items-center",
        "gap-10"
      )}
    >
      {memoizedProjectCardListItems}
    </div>
  );
};

export default React.memo(ProjectCardsList);
