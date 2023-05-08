import React, {
  useMemo,
  useRef,
  useState,
  useContext,
  useLayoutEffect,
  useCallback,
} from "react";
import { HiOutlineCode, HiOutlineLink } from "react-icons/hi";
import { Card } from "@components";
import { PlayAnimationContext, DeviceTypeContext } from "@contexts";
import { workCardsItemStyle } from "@constants";
import { worksData } from "@data";
import { useResizeObserverCallback } from "@utils";
import { useWorkCardsItemAnimationOnScroll } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const WorkCardsItem = ({ id, className }) => {
  console.log("[Render] @layouts/WorkCardsItem.jsx");

  // DOM References
  const categoryLinksContainerRef = useRef(null);
  const categoryRef = useRef(null);
  const linksRef = useRef(null);

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);
  // Allow Hover depending on device type
  const { isTouchDevice } = useContext(DeviceTypeContext);

  // Memoize data array to avoid getting created on every re-render
  const memoizedWorksData = useMemo(() => worksData, []);

  // ============= Flex Wrap Justify Position Calculation ============= //
  const [isFlexWrapped, setIsFlexWrapped] = useState(false);

  // If flex wrapped occured during viewport resize then set state
  const computeIsFlexWrapped = useCallback(() => {
    setIsFlexWrapped(
      Math.max(
        categoryRef.current.offsetHeight,
        linksRef.current.offsetHeight
      ) < categoryLinksContainerRef.current.offsetHeight
    );
  }, []);

  // Keep track of categoryLinksContainerRef container height via Observer Hook
  useResizeObserverCallback(categoryLinksContainerRef, computeIsFlexWrapped);

  // ====================== Landing Animations ====================== //
  // DOM References for Landing Animations
  const workCardsContainerRef = useRef();

  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (WorkCardsItem.jsx) Animation Started");

    const ctx = useWorkCardsItemAnimationOnScroll(
      workCardsContainerRef.current
    );

    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (WorkCardsItem.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <div
      ref={workCardsContainerRef}
      id={id}
      className={`${className} flex flex-col jusity-center items-center gap-10`}
    >
      {memoizedWorksData.map((item, index) => (
        <Card
          key={item.id}
          id={`card${item.id}`}
          className={`
          ${
            isTouchDevice
              ? workCardsItemStyle.colorStyle.cardItemColorMobile
              : workCardsItemStyle.colorStyle.cardItemColor +
                " transition-color duration-200"
          }
          ${workCardsItemStyle.layoutStyle.cardItemLayout}
          ${workCardsItemStyle.positionStyle[index]}`}
        >
          {/* Thumbnails */}
          <div
            className={`
            ${workCardsItemStyle.layoutStyle.thumbnailLayout}
            ${workCardsItemStyle.colorStyle.thumbnailColor}
            shadow-btn-on-cards`}
          ></div>

          {/* Title */}
          <div
            className={`
            ${workCardsItemStyle.colorStyle.titleColor}
            ${workCardsItemStyle.fontStyle.titleFont}`}
            style={{ textShadow: "2px 2px 1px rgba(80, 46, 21, 0.25)" }}
          >
            {item.title}
          </div>

          {/* Description */}
          <div
            className={`
            ${workCardsItemStyle.colorStyle.descriptionColor}
            ${workCardsItemStyle.fontStyle.descriptionFont}`}
            style={{ textShadow: "2px 2px 1px rgba(80, 46, 21, 0.25)" }}
          >
            {item.description}
          </div>

          {/* Tools Tags */}
          {item.tools && item.tools.length > 0 && (
            <ul className={`mt-[10px] list-none flex flex-wrap gap-1`}>
              {item.tools.map((tool) => (
                <li
                  key={tool}
                  className={`
                  ${workCardsItemStyle.layoutStyle.toolTagLayout}
                  ${workCardsItemStyle.colorStyle.toolTagColor}
                  ${workCardsItemStyle.fontStyle.toolTagFont}
                  flex justify-center items-center`}
                >
                  {tool}
                </li>
              ))}
            </ul>
          )}

          {/* Category / Link to Project */}
          <div
            ref={categoryLinksContainerRef}
            id="category-links-container"
            className={`mt-[20px] flex flex-wrap items-center gap-3 ${
              isFlexWrapped ? "justify-center" : "justify-between"
            }`}
          >
            {/* Category */}
            <div
              ref={categoryRef}
              id="category"
              className={`
              ${workCardsItemStyle.layoutStyle.categoryTagLayout}
              ${workCardsItemStyle.colorStyle.categoryTagColor}
              ${workCardsItemStyle.fontStyle.categoryTagFont}
              shadow-btn-on-cards`}
            >
              {item.category}
            </div>

            {/* Links */}
            <div
              ref={linksRef}
              id="links"
              className="flex justify-center items-center gap-2"
            >
              {/* Link to Source Code */}
              <a
                href={item.sourceCode}
                target="_blank"
                // className={disabled ? "pointer-events-none" : ""}
                className={`
                ${workCardsItemStyle.layoutStyle.linkTagLayout}
                ${workCardsItemStyle.colorStyle.linkTagColor}
                shadow-btn-on-cards`}
              >
                <HiOutlineCode className="text-[20px]" strokeWidth={2.3} />
              </a>
              {/* Link to Project */}
              <a
                href={item.website}
                target="_blank"
                // className={disabled ? "pointer-events-none" : ""}
                className={`
                ${workCardsItemStyle.layoutStyle.linkTagLayout}
                ${workCardsItemStyle.colorStyle.linkTagColor}
                shadow-btn-on-cards`}
              >
                <HiOutlineLink className="text-[20px]" strokeWidth={2.3} />
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default React.memo(WorkCardsItem);
