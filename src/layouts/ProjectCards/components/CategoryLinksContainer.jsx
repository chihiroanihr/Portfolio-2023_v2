import React, { useRef, useState, useCallback } from "react";
import clsx from "clsx";
import { HiOutlineCode, HiOutlineLink } from "react-icons/hi";
import { Link } from "@components";
import { projectCardsItemStyle } from "@themes";
import { useResizeObserverCallback } from "@utils";

const CategoryLinksContainer = ({ className, item }) => {
  console.log("[Render] @layouts/ProjectCardsListContainer.jsx");

  // Node references for flex-wrap calculation
  const categoryLinksContainerNodeRef = useRef(null);
  const categoryNodeRef = useRef(null);
  const linksNodeRef = useRef(null);

  // ============= Flex Wrap Justify Position Calculation ============= //
  const [isFlexWrapped, setIsFlexWrapped] = useState(false);

  // If flex wrapped occured during viewport resize then set state
  const handleIsFlexWrapped = useCallback(() => {
    if (
      !categoryLinksContainerNodeRef.current ||
      !categoryNodeRef.current ||
      !linksNodeRef.current
    )
      return;

    setIsFlexWrapped(
      Math.max(
        categoryNodeRef.current.offsetHeight,
        linksNodeRef.current.offsetHeight
      ) < categoryLinksContainerNodeRef.current.offsetHeight
    );
  }, []);

  // Keep track of categoryLinksContainerNodeRef container height via Observer Hook
  useResizeObserverCallback(categoryLinksContainerNodeRef, handleIsFlexWrapped);

  // ************************* CSS ************************* //
  const categoryTagColor = projectCardsItemStyle.colorStyle.categoryTagColor;
  const categoryTagFont = projectCardsItemStyle.fontStyle.categoryTagFont;
  const linkTagColor = projectCardsItemStyle.colorStyle.linkTagColor;

  const categoryTagStyle = clsx(
    categoryTagColor,
    categoryTagFont,
    // layout style
    "rounded-3xl px-[16px] py-[8px]",
    // effect style
    "shadow-btn-on-cards"
  );
  const linkTagStyle = clsx(
    linkTagColor,
    // layout style
    "rounded-full p-[8px]",
    // effect style
    "shadow-btn-on-cards"
  );

  return (
    <div
      ref={categoryLinksContainerNodeRef}
      id="category-links-container"
      className={clsx(
        className,
        {
          "justify-center": isFlexWrapped,
          "justify-between": !isFlexWrapped,
        },
        "flex flex-wrap items-center",
        "gap-3"
      )}
    >
      {/* Category */}
      <div ref={categoryNodeRef} id="category" className={categoryTagStyle}>
        {item.category}
      </div>

      {/* Links */}
      <div
        ref={linksNodeRef}
        id="links"
        className={clsx("flex justify-center items-center", "gap-2")}
      >
        {/* Link to Source Code */}
        <Link
          href={item.sourceCode}
          target="_blank"
          className={clsx(linkTagStyle, !item.sourceCode && "opacity-40")}
          disabled={!item.sourceCode && true}
        >
          <HiOutlineCode className="text-[20px]" strokeWidth={2.3} />
        </Link>
        {/* Link to Project */}
        <Link
          href={item.website}
          target="_blank"
          className={clsx(linkTagStyle, !item.website && "opacity-40")}
          disabled={!item.website && true}
        >
          <HiOutlineLink className="text-[20px]" strokeWidth={2.3} />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(CategoryLinksContainer);
