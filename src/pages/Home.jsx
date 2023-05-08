import React, { useRef, useContext, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollLine } from "@components";
import { CoffeeLanding, ImageCardsLandingItem } from "@layouts";
import { PlayAnimationContext } from "@contexts";
import { layoutStyle } from "@constants";
import {
  splitTextToWords,
  splitTextToChars,
  addGsapChildTimelinesInOrder,
} from "@utils";
import { useHomeTextAnimationOnScroll } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ addToLandingTimeline, animateIndex }) => {
  console.log("[Render] @pages/Home.jsx");

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM References for Landing Animations
  const sippingOnTextRef = useRef(null);
  const creativityTextRef = useRef(null);
  const coffeeTextRef = useRef(null);
  const coffeeTextCopyRef = useRef(null);
  const oneCupOfTextRef = useRef(null);
  const atTimeTextRef = useRef(null);
  const oneCupOfCoffeeTextRef = useRef(null);
  // DOM Reference for Scroll Animation
  const textSectionRef = useRef(null);

  // GSAP Home Timeline Reference
  const homeTimelineRef = useRef();

  // Temporary Child Component Timelines Reference
  const tempChildTimelinesListRef = useRef({});

  // Child Component Timelines Animation Timing
  const animateChildTimelineTimings = {
    0: ">rolling-text",
    1: ">-1.3",
  };

  // Add Child Component Timelines to Parent Timeline Function
  const addToTempChildTimelineLists = (childTimeline, animateIndex) => {
    tempChildTimelinesListRef.current[animateIndex] = childTimeline;
  };

  // Update animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (Home1.jsx) Animation Started");

    // Split texts from refs into words / chars
    const sippingOnWords = splitTextToWords(sippingOnTextRef.current);
    const creativityChars = splitTextToChars(creativityTextRef.current);
    const oneCupOfWords = splitTextToWords(oneCupOfTextRef.current);
    const coffeeText = coffeeTextRef.current;
    const atTimeWords = splitTextToWords(atTimeTextRef.current);
    const coffeeChars = splitTextToChars(coffeeTextRef.current);
    const coffeeCharsCopy = splitTextToChars(coffeeTextCopyRef.current);

    // Allow scroll triggered animations on complete
    const allowTextSectionScrollAnim = () => {
      homeTimelineRef.current.add(
        useHomeTextAnimationOnScroll(
          // Trigger Targets
          [
            sippingOnTextRef.current,
            creativityTextRef.current,
            oneCupOfCoffeeTextRef.current,
            atTimeTextRef.current,
          ],
          // Triggerer
          textSectionRef.current
        )
      );
    };

    // Register animations to the timeline
    homeTimelineRef.current = gsap
      .timeline({
        onComplete: allowTextSectionScrollAnim,
      })
      // Custom: set perspective to "creativity" title text
      .set(creativityTextRef.current, {
        perspective: 400,
      })
      // Add all animations
      .from(sippingOnWords, {
        id: "home-sipping-on-words",
        duration: 2,
        opacity: 0,
        stagger: 0.06,
        ease: "out",
      })
      .from(
        creativityChars,
        {
          id: "home-creativity-chars",
          duration: 1.5,
          y: -40,
          rotationX: -90,
          transformOrigin: "0% 50% -50",
          opacity: 0,
          scale: 1,
          stagger: 0.05,
          ease: "out",
        },
        "=-2"
      )
      .from(
        oneCupOfWords,
        {
          id: "home-one-cup-of-words",
          duration: 2,
          opacity: 0,
          ease: "out",
          stagger: 0.06,
        },
        "=-1.5"
      )
      .from(
        coffeeText,
        {
          id: "home-coffee-text",
          duration: 2,
          opacity: 0,
          ease: "out",
        },
        ">-2"
      )
      .from(
        atTimeWords,
        {
          id: "home-at-a-time-words",
          duration: 2,
          opacity: 0,
          stagger: 0.06,
          ease: "out",
        },
        "=-2"
      )
      .addLabel("rolling-text", "<0.5")
      .to(
        coffeeChars,
        {
          id: "home-coffee-chars",
          duration: 0.15,
          y: -20,
          opacity: 0,
          stagger: 0.05,
          ease: "power4.out",
        },
        "rolling-text"
      )
      .from(
        coffeeCharsCopy,
        {
          id: "home-coffee-chars-copy",
          duration: 0.15,
          y: 20,
          opacity: 0,
          stagger: 0.05,
          ease: "power4.out",
        },
        ">"
      );

    // Sort and append child timelines to timeline
    addGsapChildTimelinesInOrder(
      tempChildTimelinesListRef.current,
      animateChildTimelineTimings,
      homeTimelineRef.current
    );

    // Add Timeline to parent component's timeline
    addToLandingTimeline(homeTimelineRef.current, animateIndex);

    // Clean Up Animations
    // ! prevent continuing to execute even after component unmounted
    return () => {
      cleanUpGsapAnimation(homeTimelineRef.current);
      console.log("[LOG] (Home1.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <section
      id="home"
      className={`overflow-hidden ${layoutStyle.sectionLayoutMaxSize}`}
    >
      {/* ------------------------ First Home section ------------------------ */}
      <div
        id="home-1"
        className={`h-screen ${layoutStyle.sectionHomeLayoutPaddingX}`}
      >
        <div
          // !! overflow grid on purpose via "fixed"
          className="min-h-[90vh] pt-[10vh] grid gap-[20px]
          grid-rows-6 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-fixed-6 grid-cols-fixed-4"
        >
          {/* -------- Text Area -------- */}
          <div
            ref={textSectionRef}
            className="xxxl:row-start-1 xxl:row-start-2 md:row-start-3 row-start-4 row-span-full
            xl:col-span-6 lg:col-span-7 md:col-span-6 sm:col-span-5 col-span-full
            xl:col-start-1 lg:col-start-1 md:col-start-1 sm:col-start-1 col-start-1
            flex flex-col justify-center leading-snug z-10"
          >
            <div
              ref={sippingOnTextRef}
              className="xl:mb-[35px] md:mb-[30px] mb-[15px]
              lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]
              font-default-sans md:font-extralight font-light text-coffee-600 dark:text-coffee-300"
            >
              Sipping on
            </div>
            <div
              ref={creativityTextRef}
              id="creativity"
              className="lg:text-[96px] md:text-[72px] xs:text-[48px] text-[36px] z-10 pl-[8px]
              font-title-cursive whitespace-nowrap text-coffee-600 dark:text-coffee-300"
            >
              Creativity
            </div>
            <div
              className="lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]
              font-default-sans md:font-extralight font-light text-coffee-600 dark:text-coffee-300"
            >
              {/* !! texts into one line (inline) - necessary due to animation */}
              <div
                ref={oneCupOfCoffeeTextRef}
                className="relative inline-block"
              >
                <span ref={oneCupOfTextRef}>one cup of </span>
                <span
                  ref={coffeeTextRef}
                  className="md:font-light font-normal prevent-select"
                >
                  coffee
                </span>
                <span
                  ref={coffeeTextCopyRef}
                  className="absolute top-0 right-0 md:font-light font-normal text-yellow-500"
                >
                  coffee
                </span>
              </div>
              <p ref={atTimeTextRef}>at a time.</p>
            </div>
          </div>

          {/* -------- Image Area -------- */}
          <ImageCardsLandingItem
            addToHomeTimeline={addToTempChildTimelineLists}
            animateIndex={0}
            className="row-start-1 row-end-6 xl:row-span-full 
            xl:col-start-6 md:col-start-4 xs:col-start-2 col-start-1 col-span-full"
          />
        </div>

        {/* -------- Scroll Line -------- */}
        <ScrollLine
          addToHomeTimeline={addToTempChildTimelineLists}
          animateIndex={1}
          className="h-[15vh]"
        />
      </div>

      {/* ------------------------ Second Home section ------------------------ */}
      <CoffeeLanding
        id="home-2"
        className="h-screen xl:my-[300px] lg:my-[100px]"
      />
    </section>
  );
};

export default React.memo(Home);
