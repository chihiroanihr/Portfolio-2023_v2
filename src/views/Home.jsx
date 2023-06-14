import React, { useRef, useContext, useLayoutEffect } from "react";
import clsx from "clsx";
import { ImageCardsList } from "@layouts";
import { ScrollLine } from "@components";
import { PlayAnimationContext } from "@contexts";
import { splitTextToWords, splitTextToChars } from "@utils";
import { useHomeAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const Home = ({ addToLandingTimeline, animateIndex }) => {
  console.log("[Render] [src] @views/Home.jsx ----- Memoized");

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // Node References for Landing Animations
  const sippingOnTextNodeRef = useRef(null);
  const creativityTextNodeRef = useRef(null);
  const coffeeTextNodeRef = useRef(null);
  const coffeeTextNodeCopyRef = useRef(null);
  const oneCupOfTextNodeRef = useRef(null);
  const atTimeTextNodeRef = useRef(null);

  // Node Reference for Landing Animation Scope
  const homeSectionContainerRef = useRef(null);

  // Node Reference for Scroll Animation
  const textContainerNodeRef = useRef(null);

  // Update animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (Home.jsx) Animation Started");

    // Split texts from refs into words / chars
    const sippingOnWords = splitTextToWords(sippingOnTextNodeRef.current);
    const creativityChars = splitTextToChars(creativityTextNodeRef.current);
    const oneCupOfWords = splitTextToWords(oneCupOfTextNodeRef.current);
    const coffeeText = coffeeTextNodeRef.current;
    const atTimeWords = splitTextToWords(atTimeTextNodeRef.current);
    const coffeeChars = splitTextToChars(coffeeTextNodeRef.current);
    const coffeeCharsCopy = splitTextToChars(coffeeTextNodeCopyRef.current);

    // Retrive animation and register to timeline
    const animation = useHomeAnimation({
      scopeNode: homeSectionContainerRef.current,
      textContainerNode: textContainerNodeRef.current,
      splitTextNodes: {
        sippingOnWords,
        creativityChars,
        oneCupOfWords,
        coffeeText,
        atTimeWords,
        coffeeChars,
        coffeeCharsCopy,
      },
    });

    // Add Timeline to parent component's timeline
    addToLandingTimeline(animation, animateIndex);

    // Clean Up Animations (prevent continuing to execute even after component unmounted)
    return () => cleanUpGsapAnimation(animation);
  }, [playAnimation]);

  // ************************* CSS ************************* //
  const defaultTextFont = "font-default-sans";
  const creativityTextFont = "font-title-cursive";
  const defaultTextColor = "text-coffee-600 dark:text-coffee-300";
  const hightlightTextColor = "text-yellow-500";

  const defaultTextStyle = clsx(
    "leading-snug",
    "md:font-extralight font-light",
    "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
  );

  const creativityTextStyle = clsx(
    "whitespace-nowrap",
    "lg:text-[140px] md:text-[116px] xs:text-[72px] text-[60px]"
  );

  const coffeeTextStyle = clsx(
    "leading-snug",
    "md:font-light font-normal",
    "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
  );

  // ************************* JSX ************************* //
  const homeTextSection = (
    <>
      <div
        ref={sippingOnTextNodeRef}
        id="sipping-on"
        className={clsx(defaultTextStyle)}
      >
        Sipping on
      </div>

      <div
        ref={creativityTextNodeRef}
        id="creativity"
        className={clsx(
          // !customFontAvailableRef.current ? "pl-[8px] :",
          "relative",
          "xxxl:font-bold font-normal",
          creativityTextStyle,
          creativityTextFont
        )}
      >
        Creativity
      </div>

      <div id="one-cup-of-coffee" className={clsx("relative inline-block")}>
        <span ref={oneCupOfTextNodeRef} className={defaultTextStyle}>
          one cup of{" "}
        </span>

        <span
          ref={coffeeTextNodeRef}
          className={clsx("absolute", "prevent-select", coffeeTextStyle)}
        >
          coffee
        </span>

        <span
          ref={coffeeTextNodeCopyRef}
          className={clsx(
            "absolute top-0",
            coffeeTextStyle,
            hightlightTextColor
          )}
        >
          coffee
        </span>
      </div>

      <div id="at-a-time" ref={atTimeTextNodeRef} className={defaultTextStyle}>
        at a time.
      </div>
    </>
  );

  return (
    <section
      ref={homeSectionContainerRef}
      id="home"
      className="page-layout home-page-spacing h-screen"
    >
      <div
        className={clsx(
          "min-h-[90vh] pt-[10vh]",
          "grid gap-[20px]",
          "grid-rows-6",
          "lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-fixed-6 grid-cols-fixed-4" // !! overflow grid on purpose via "fixed"
        )}
      >
        {/* ---------------- Text Area ---------------- */}
        <div
          ref={textContainerNodeRef}
          className={clsx(
            "z-10",
            "xxxl:row-start-1 xxl:row-start-2 md:row-start-3 row-start-4 row-span-full",
            "xl:col-start-1 lg:col-start-1 md:col-start-1 sm:col-start-1 col-start-1",
            "xl:col-span-6 lg:col-span-7 md:col-span-6 sm:col-span-5 col-span-full",
            "flex flex-col justify-center",
            defaultTextFont,
            defaultTextColor
          )}
        >
          {homeTextSection}
        </div>

        {/* ---------------- Image Area ---------------- */}
        <ImageCardsList
          className={clsx(
            "row-start-1 row-end-6 xl:row-span-full",
            "xl:col-start-6 md:col-start-4 xs:col-start-2 col-start-1 col-span-full"
          )}
        />
      </div>

      {/* ---------------- Scroll Line ---------------- */}
      <ScrollLine className="h-[15vh]" />
    </section>
  );
};

export default React.memo(Home);
