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
  const projectCardsItemFont = "font-default-sans";

  //bg-coffee-300/50
  const cardItemBgColorMobile = "bg-white/20 dark:bg-coffee-300/20"; // No hover on mobile version
  const cardItemBgColor = "bg-white/20 dark:bg-coffee-300/10";
  const cardItemBgHoverColor = "hover:bg-white/40 dark:hover:bg-coffee-300/20";
  const cardItemBorderColor = "border-white/30 dark:border-coffee-300/30";

  const cardItemStyle = clsx(
    // color style
    isTouchDevice
      ? cardItemBgColorMobile
      : clsx(cardItemBgColor, cardItemBgHoverColor),
    cardItemBorderColor,
    "[transition:background-color_200ms]",
    // layout style
    "w-[80%] max-w-[400px]",
    "min-h-[400px]",
    "rounded-[20px]",
    // border style
    "border border-b-2",
    // effect style
    "backdrop-blur-[15px]"
  );

  // ************************* JSX ************************* //
  // Memoize the mapped projectsListData array
  const memoizedProjectCardListItems = useMemo(() => {
    return projectsListData.map((item, index) => (
      <Card
        key={item.id}
        id={`card${item.id}`}
        className={clsx(
          cardItemStyle,
          projectCardsItemFont,
          projectCardsItemStyle.positionStyle[index]
        )}
      >
        {/* New */}
        {item.new && <NewTag id="new-tag" />}

        {/* Thumbnails */}
        <Thumbnail item={item.thumbnails} />

        {/* Title */}
        <Title item={item.title} className="mt-[10px]" />

        {/* Description */}
        <Description item={item.description} />

        {/* Tools Tags */}
        {item.tools && item.tools.length > 0 && (
          <ToolTagsList className="mt-[10px]" item={item.tools} />
        )}

        {/* Category / Link to Project */}
        <CategoryLinksContainer
          className="mt-[20px]"
          category={item.category}
          sourceCode={item.sourceCode}
          website={item.website}
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
