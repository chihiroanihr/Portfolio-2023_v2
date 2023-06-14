import { useRef, useState, useCallback } from "react";
import clsx from "clsx";
import { HiOutlineCode, HiOutlineLink } from "react-icons/hi";
import { Link } from "@components";
import { useResizeObserverCallback } from "@hooks";

const CategoryLinksContainer = ({
  className,
  category,
  sourceCode,
  website,
}) => {
  console.log(
    "[Render] [src] @layouts/ProjectCards/CategoryLinksContainer.jsx"
  );

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
  const textColor = "text-coffee-400 dark:text-coffee-800/70";
  const categoryTagBgColor = "bg-white dark:bg-coffee-300";
  const linkTagBgColor = "bg-white dark:bg-coffee-300";
  const linkTagBgHoverColor = "hover:bg-white/60 dark:hover:bg-coffee-300/80";

  const categoryTagStyle = clsx(
    // color style
    categoryTagBgColor,
    textColor,
    // font style
    "font-semibold sm:text-[14px] xs:text-[12px] text-[10px]",
    // layout style
    "rounded-3xl",
    "xs:px-[16px] xs:py-[8px]",
    "px-[14px] py-[6px]",
    // effect style
    "shadow-btn-on-cards",
    // dark mode transition
    "[transition:background-color_700ms] will-change-[background-color]"
  );
  const linkTagStyle = clsx(
    // color style
    linkTagBgColor,
    linkTagBgHoverColor,
    textColor,
    // layout style
    "rounded-full p-[8px]",
    // effect style
    "shadow-btn-on-cards",
    // animation on hover
    "[transition:background-color_200ms]"
  );

  return (
    <div
      ref={categoryLinksContainerNodeRef}
      id="category-links-container"
      className={clsx(
        className,
        isFlexWrapped ? "justify-center" : "justify-between",
        "flex flex-wrap items-center",
        "gap-x-3 gap-y-4"
      )}
    >
      {/* Category */}
      <div ref={categoryNodeRef} id="category" className={categoryTagStyle}>
        {category}
      </div>

      {/* Links */}
      <div
        ref={linksNodeRef}
        id="links"
        className={clsx("flex justify-center items-center", "gap-2")}
      >
        {/* Link to Source Code */}
        <Link
          href={sourceCode}
          target="_blank"
          className={clsx(linkTagStyle, !sourceCode && "opacity-40")}
          disabled={!sourceCode || sourceCode.trim().length === 0}
        >
          <HiOutlineCode
            className="xs:text-[20px] text-[15px]"
            strokeWidth={2.3}
          />
        </Link>

        {/* Link to Project */}
        <Link
          href={website}
          target="_blank"
          className={clsx(linkTagStyle, !website && "opacity-40")}
          disabled={!website || website.trim().length === 0}
        >
          <HiOutlineLink
            className="xs:text-[20px] text-[15px]"
            strokeWidth={2.3}
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryLinksContainer;
