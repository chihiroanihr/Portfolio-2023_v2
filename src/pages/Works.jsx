import React, {
  useRef,
  useState,
  useContext,
  useCallback,
  useLayoutEffect,
} from "react";
import clsx from "clsx";
import { DropBackground, ProjectCardsList } from "@layouts";
import { SectionOverlay } from "@components";
import { DeviceTypeContext, InsideSectionProvider } from "@contexts";
import { positionStyle } from "@themes";
import { useResizeObserverCallback } from "@utils";
import { useWorksAnimation } from "@animations";
import {
  useMemoizedGsapContext,
  cleanUpGsapAnimation,
} from "@animations/utils";

const Works = ({ onChangeBgColor }) => {
  console.log("[Render] @pages/Works.jsx");

  const overlayFillColor = "fill-milky dark:fill-chocolate";
  const mobileBgColor = "bg-milky dark:bg-chocolate";

  // Node references
  const worksSectionNodeRef = useRef(null);
  const projectCardsListContainerNodeRef = useRef(null);

  // Allow SectionOverlay depending on device type
  const { isTouchDevice } = useContext(DeviceTypeContext);

  // Inside section state
  const [isInsideSection, setIsInsideSection] = useState(false);
  // Toggle function
  const handleInsideSection = useCallback((state) => {
    setIsInsideSection(state);
  }, []);

  // =========== Dynamically Change Parent Div Height =========== //
  // Calculate total height of the Project Cards (including its distances from the top)
  const updateContainerHeight = useCallback(() => {
    if (!projectCardsListContainerNodeRef.current) return;

    let totalHeight = 0;
    // Select all the cards and iterate
    projectCardsListContainerNodeRef.current
      .querySelectorAll('[id^="card"]')
      .forEach((card) => {
        if (card.offsetTop < totalHeight) {
          if (card.offsetTop + card.offsetHeight > totalHeight) {
            totalHeight += card.offsetTop + card.offsetHeight - totalHeight;
          }
        } else {
          totalHeight += card.offsetTop - totalHeight + card.offsetHeight;
        }
      });
    // Update node height
    projectCardsListContainerNodeRef.current.style.height = totalHeight + "px";
  }, []);

  // Keep track of cards list container height via Observer Hook
  useResizeObserverCallback(
    projectCardsListContainerNodeRef,
    updateContainerHeight
  );

  // ==================== Landing Animations ==================== //
  // Memoized gsap context animation
  const ctx = useMemoizedGsapContext(worksSectionNodeRef);

  useLayoutEffect(() => {
    if (!worksSectionNodeRef.current) return;
    console.log("[LOG] (Works.jsx) Animation Started");

    const worksSectionNode = worksSectionNodeRef.current;

    // Initial Index
    worksSectionNode.style.zIndex = -1;

    // Retrieve Animation
    ctx.add(() => {
      useWorksAnimation({
        worksSectionNode,
        handleInsideSection,
        isTouchDevice,
        onChangeBgColor,
        mobileBgColor,
      });
    });

    // Clean Animation
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (Works.jsx) Animation Killed");
    };
  }, []);

  return (
    <section
      ref={worksSectionNodeRef}
      id="works"
      className={clsx("relative", "overflow-hidden", "w-screen min-h-screen")}
      style={{ marginTop: -positionStyle.workToAboutSectionTransitionPosition }}
    >
      <InsideSectionProvider isInsideSection={isInsideSection}>
        {!isTouchDevice && (
          <SectionOverlay
            className={clsx(
              "absolute",
              "w-full h-full",
              overlayFillColor,
              "transition-dark-mode duration-700 will-change-dark-mode"
            )}
            parentRef={worksSectionNodeRef}
            duration={0.8}
          />
        )}
        <div
          id="wrapper"
          className={clsx(
            "z-[1]",
            "relative",
            "page-layout",
            "min-h-screen",
            "mt-[100vh]",
            "mb-[50vh]"
          )}
        >
          {/* --------- Headings -------- */}
          <div
            id="heading"
            className={clsx(
              "prevent-select",
              "z-10",
              "relative",
              // color style
              "text-milky dark:text-chocolate-light",
              // font shadow style
              "text-shadow-milky dark:text-shadow-chocolate",
              // font size style
              "lg:text-[150px] md:text-[100px] sm:text-[90px] xs:text-[70px] text-[55px]",
              "lg:leading-[140px] md:leading-[100px] sm:leading-[90px] xs:leading-[70px] leading-[55px]",
              // font type style
              "font-fredoka-sans",
              "font-black tracking-wide uppercase text-center",
              // transition style
              "transition-dark-mode duration-700 will-change-dark-mode"
            )}
          >
            Featured Works
          </div>

          {/* --------- Works -------- (Outer div necessary because of ClickedDrop to work) */}
          <div
            ref={projectCardsListContainerNodeRef}
            className={clsx("relative", "sm:mt-[100px] mt-[50px]")}
          >
            <ProjectCardsList
              id="cards"
              className="relative z-10"
              parentRef={worksSectionNodeRef}
            />
          </div>

          {/* --------- Background -------- */}
          <DropBackground
            id="background"
            className={clsx("absolute", "top-0", "h-full w-full")}
          />
        </div>
      </InsideSectionProvider>
    </section>
  );
};

export default React.memo(Works);
