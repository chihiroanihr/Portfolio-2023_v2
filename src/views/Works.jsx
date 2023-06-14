import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";
import clsx from "clsx";
import { DropBackground, ProjectCardsList } from "@layouts";
import { InsideSectionProvider } from "@contexts";
import { positionStyle } from "@themes";
import { useResizeObserverCallback } from "@hooks";
import { useWorksAnimation } from "@animations";
import {
  useMemoizedGsapContext,
  cleanUpGsapAnimation,
} from "@animations/utils";

const Heading = React.memo(({ id, className }) => {
  const fontType = "font-fredoka-sans";
  const textColor = "text-milky dark:text-chocolate-light";
  const textShadowColor = "text-shadow-milky dark:text-shadow-chocolate";

  return (
    <div
      id={id}
      className={clsx(
        className,
        "prevent-select",
        "relative",
        textColor, // text style
        textShadowColor, // text shadow style
        fontType, // font type style
        "font-black tracking-wide uppercase text-center", // font style
        // font size style
        "lg:text-[150px] md:text-[100px] sm:text-[90px] xs:text-[70px] text-[55px]",
        "lg:leading-[140px] md:leading-[100px] sm:leading-[90px] xs:leading-[70px] leading-[55px]",
        // transition style
        "[transition:color_0.7s,text-shadow_0.7s] will-change-[color,text-shadow]" // dark mode transition
      )}
    >
      Featured Works
    </div>
  );
});

const Works = ({ parentRef }) => {
  console.log("[Render] [src] @views/Works.jsx ----- Memoized");

  // Node references
  const worksSectionNodeRef = useRef(null);
  const projectCardsListContainerNodeRef = useRef(null);

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
      useWorksAnimation({ worksSectionNode, handleInsideSection });
    }, worksSectionNodeRef);

    // Clean Animation
    return () => {
      cleanUpGsapAnimation(ctx);
    };
  }, []);

  // =============== Change Root Background Color =============== // (only for mobile device)
  useEffect(() => {
    if (!parentRef.current) return;

    // Background Color Change
    if (isInsideSection) {
      parentRef.current.classList.remove("bg-root-color");
      parentRef.current.classList.add("bg-milky", "dark:bg-chocolate");
    } else {
      if (
        parentRef.current.classList.contains("bg-milky", "dark:bg-chocolate")
      ) {
        parentRef.current.classList.remove("bg-milky", "dark:bg-chocolate");
        parentRef.current.classList.add("bg-root-color");
      }
    }
  }, [isInsideSection]);

  return (
    <section
      ref={worksSectionNodeRef}
      id="works"
      className={clsx("relative", "overflow-hidden", "w-screen min-h-screen")}
      style={{ marginTop: -positionStyle.workToAboutSectionTransitionPosition }}
    >
      <div
        id="wrapper"
        className={clsx(
          "z-[1]",
          "relative",
          "page-layout",
          "min-h-screen",
          "mt-[100vh]",
          positionStyle.workToDisplaySectionTransitionPosition
        )}
      >
        {/* --------- Headings -------- */}
        <Heading id="heading" className="z-10" />

        {/* --------- Works -------- (Outer div necessary because of ClickedDrop to work) */}
        <div
          ref={projectCardsListContainerNodeRef}
          className={clsx("relative", "sm:mt-[100px] mt-[50px]")}
        >
          <ProjectCardsList
            id="cards"
            className={clsx("relative", "z-10")}
            parentRef={worksSectionNodeRef}
          />
        </div>

        {/* --------- Background -------- */}
        <InsideSectionProvider isInsideSection={isInsideSection}>
          <DropBackground
            id="background"
            className={clsx("absolute", "top-0", "h-full w-full")}
          />
        </InsideSectionProvider>
      </div>
    </section>
  );
};

export default React.memo(Works);
