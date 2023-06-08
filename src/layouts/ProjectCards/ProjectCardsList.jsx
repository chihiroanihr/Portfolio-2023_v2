import React, { useMemo, useRef, useContext, useLayoutEffect } from "react";
import clsx from "clsx";
import {
  NewTag,
  Thumbnail,
  Title,
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
import {
  useMemoizedGsapContext,
  cleanUpGsapAnimation,
} from "@animations/utils";

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

  // Memoized gsap context animation
  const ctx = useMemoizedGsapContext(projectCardsListNodeRef);

  useLayoutEffect(() => {
    if (!projectCardsListNodeRef.current) return;
    console.log("[LOG] (ProjectCardsList.jsx) Animation Started");

    // No memoization of context since individual cards animation have to restart when inside overlay
    ctx.add(() => {
      useProjectCardsListAnimation(
        projectCardsListNodeRef.current,
        parentRef.current
      );
    }, projectCardsListNodeRef);

    // Clean up animation
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (ProjectCardsList.jsx) Animation Killed");
    };
  }, [isIntersected]);

  // ************************* CSS ************************* //
  const projectCardsItemFont = "font-default-sans";
  //bg-coffee-300/50
  const cardItemBgColor = clsx(
    isTouchDevice
      ? "bg-white/20 dark:bg-coffee-300/20" // mobile
      : "bg-white/20 dark:bg-coffee-300/10" // desktop
  );
  const cardItemBorderColor = "border-white/30 dark:border-coffee-300/30";

  const cardItemStyle = clsx(
    "group",
    "relative",
    // layout style
    "w-[80%] max-w-[400px]",
    "min-h-[400px]",
    "rounded-[20px]",
    // border style
    "border border-b-2",
    // effect style
    "backdrop-blur-[15px]",
    // font style
    projectCardsItemFont,
    // color style
    cardItemBgColor,
    cardItemBorderColor,
    // animation
    "[transition:background-color_200ms]"
  );
  const cardItemShineStyle = clsx(
    "overflow-hidden",
    "absolute",
    "top-0 left-0",
    "w-full h-full",
    "rounded-[20px]",
    "opacity-50 dark:opacity-10",
    "blur-[3px]",
    "before:content-['']",
    "before:absolute",
    "before:top-0 before:-translate-x-[150%]",
    "before:w-full before:h-full",
    "before:-skew-x-[25deg]",
    "before:bg-gradient-to-r before:from-transparent before:to-white",
    "before:group-hover:translate-x-[125%]",
    "before:[transition:transform_700ms]"
  );
  const cardItemThumbnailShineStyle = clsx(
    "overflow-hidden",
    "relative",
    "before:content-['']",
    "before:absolute",
    "before:opacity-40 dark:before:opacity-10",
    "before:top-0 before:-translate-x-[125%]",
    "before:w-full before:h-full",
    "before:-skew-x-[25deg]",
    "before:bg-gradient-to-r before:from-transparent before:to-white",
    "before:group-hover:translate-x-[190%]",
    "before:[transition:transform_700ms]"
  );

  // ************************* JSX ************************* //
  // Memoize the mapped projectsListData array
  const memoizedProjectCardListItems = useMemo(() => {
    return projectsListData.map((item, index) => (
      <Card
        key={item.id}
        id={`card${item.id}`}
        className={clsx(
          projectCardsItemStyle.positionStyle[index], // position
          cardItemStyle
        )}
      >
        {/* Card Shining Effect */}
        <div className={cardItemShineStyle} />

        {/* New */}
        {item.new && <NewTag id="new-tag" className="z-[2]" />}

        {/* Thumbnails */}
        <Thumbnail
          items={item.thumbnails}
          alt={item.title}
          className={clsx("z-[1]")} // cardItemThumbnailShineStyle
        />

        {/* Title */}
        <Title
          item={item.title}
          className={clsx("z-[1]", "mt-[15px] mb-[10px]")}
        />

        {/* Description */}
        <Description item={item.description} className={clsx("z-[1]")} />

        {/* Tools Tags */}
        {item.tools && item.tools.length > 0 && (
          <ToolTagsList
            item={item.tools}
            className={clsx("z-[1]", "mt-[10px]")}
          />
        )}

        {/* Category / Link to Project */}
        <CategoryLinksContainer
          category={item.category}
          sourceCode={item.sourceCode}
          website={item.website}
          className="z-[1] mt-[20px]"
        />
      </Card>
    ));
  }, [projectsListData]);

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

// Reference: https://coco-factory.jp/ugokuweb/move01/7-1-40/ (card shining style)
