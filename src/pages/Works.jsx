import {
  useRef,
  useState,
  useCallback,
  useContext,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DropBackground, WorkCardsItem } from "@layouts";
import { SectionOverlay } from "@components";
import { PlayAnimationContext } from "@contexts";
import { layoutStyle, positionStyle } from "@constants";
import { useResizeObserverCallback } from "@utils";
import {
  useWorkHeadingAnimationOnScroll,
  useWorkAnimationOnEnter,
  useWorkAnimationOnEnterBack,
  useWorkAnimationOnLeave,
  useWorkAnimationOnLeaveBack,
} from "@animations";
import {
  useMemoizedGsapContext,
  cleanUpGsapAnimation,
} from "@animations/utils";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  console.log("[Render] @pages/Works.jsx");

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM Reference
  const cardsRef = useRef(null);
  const worksSectionRef = useRef(null);

  // Timeline References
  const headingTimelineRef = useRef(null);

  // =========== Dynamically Change Parent Div Height =========== //
  // Calculate Total Height of the Cards (including its distances from the top)
  const updateContainerHeight = useCallback(() => {
    let totalHeight = 0;
    // Select all the cards and iterate
    cardsRef.current.querySelectorAll('[id^="card"]').forEach((card) => {
      if (card.offsetTop < totalHeight) {
        if (card.offsetTop + card.offsetHeight > totalHeight) {
          totalHeight += card.offsetTop + card.offsetHeight - totalHeight;
        }
      } else {
        totalHeight += card.offsetTop - totalHeight + card.offsetHeight;
      }
    });
    // Update DOM Height
    cardsRef.current.style.height = totalHeight + "px";
  }, []);

  // Keep track of cardsRef container height via Observer Hook
  useResizeObserverCallback(cardsRef, updateContainerHeight);

  // ==================== Landing Animations ==================== //
  const useWorkAnimationOnEnterRef = useRef(null);
  const useWorkAnimationOnEnterBackRef = useRef(null);
  const useWorkAnimationOnLeaveRef = useRef(null);
  const useWorkAnimationOnLeaveBackRef = useRef(null);

  // Memoized Gsap Context Animation
  const ctx = useMemoizedGsapContext(worksSectionRef);

  useLayoutEffect(() => {
    if (!playAnimation || !worksSectionRef) return;
    console.log("[LOG] (Works.jsx) Animation Started");

    // Assign to Refs
    useWorkAnimationOnEnterRef.current = useWorkAnimationOnEnter(
      worksSectionRef.current
    );
    useWorkAnimationOnEnterBackRef.current = useWorkAnimationOnEnterBack();
    useWorkAnimationOnLeaveRef.current = useWorkAnimationOnLeave();
    useWorkAnimationOnLeaveBackRef.current = useWorkAnimationOnLeaveBack(
      worksSectionRef.current
    );

    // Initial Index
    worksSectionRef.current.style.zIndex = -1;

    ctx.add(() => {
      // Scroll Animations for Heading
      headingTimelineRef.current = useWorkHeadingAnimationOnScroll(
        worksSectionRef.current
      );

      // Begin Animations when Scrolled Inside Work Section
      ScrollTrigger.create({
        trigger: worksSectionRef.current,
        start: "top top",
        end: "bottom-=300 top",
        onEnter: () => {
          // Avoid Timelag (necessary for updating z-index immediately)
          useWorkAnimationOnLeaveBackRef.current.pause();
          useWorkAnimationOnEnterRef.current.play(0);
        },
        onLeave: () => {
          useWorkAnimationOnLeaveRef.current.play(0);
        },
        onEnterBack: () => {
          useWorkAnimationOnEnterBackRef.current.play(0);
        },
        onLeaveBack: () => {
          useWorkAnimationOnEnterRef.current.pause();
          useWorkAnimationOnLeaveBackRef.current.play(0);
        },
      });
    });

    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (Works.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ============= Section Overlay (Child Component) State ============= //
  const [isOverlayCompleted, setIsOverlayCompleted] = useState(false);

  const handleOverlayCompleted = (state) => {
    setIsOverlayCompleted(state);
  };

  return (
    <section
      ref={worksSectionRef}
      id="works"
      className="relative w-screen min-h-screen overflow-hidden"
      style={{ marginTop: -positionStyle.workToAboutSectionTransitionPosition }}
    >
      <SectionOverlay
        className="absolute h-full w-full fill-milky dark:fill-chocolate"
        parentRef={worksSectionRef}
        isOpened={true}
        handleOverlayCompleted={handleOverlayCompleted}
      />
      <div
        id="wrapper"
        className={`relative min-h-screen mt-[100vh] mb-[100px] z-[1] ${layoutStyle.sectionLayoutMaxSize}`}
      >
        {/* --------- Headings -------- */}
        <div
          id="heading"
          className="relative z-10 prevent-select
          text-milky dark:text-chocolate-light text-shadow-milky dark:text-shadow-chocolate
          font-fredoka-sans font-black text-center uppercase tracking-wide
          lg:text-[150px] md:text-[100px] sm:text-[90px] xs:text-[70px] text-[55px]
          lg:leading-[140px] md:leading-[100px] sm:leading-[90px] xs:leading-[70px] leading-[55px]"
        >
          Featured Works
        </div>

        {/* --------- Works -------- (Outer div important because of ClickedDrop) */}
        <div ref={cardsRef} className="relative sm:mt-[100px] mt-[50px]">
          <WorkCardsItem id="cards" className="relative z-10" />
        </div>

        {/* --------- Background -------- */}
        <DropBackground
          id="background"
          className="absolute top-0 h-full w-full"
          isOverlayCompleted={isOverlayCompleted}
        />
      </div>
      <SectionOverlay
        className="absolute h-full w-full fill-milky dark:fill-chocolate"
        parentRef={worksSectionRef}
        handleOverlayCompleted={handleOverlayCompleted}
      />
      <div className="h-screen"></div>
    </section>
  );
};

export default Works;
