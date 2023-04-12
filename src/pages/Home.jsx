import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitTextToWords, SplitTextToChars } from "../utils/SplitText";
import { LandingImageCards } from "../components";

const Home = ({ playAnimation }) => {
  // Create Refs
  const sippingOnTextRef = useRef(null);
  const creativityTextRef = useRef(null);
  const coffeeTextRef = useRef(null);
  const coffeeTextCopyRef = useRef(null);
  const oneCupOfTextRef = useRef(null);
  const atTimeTextRef = useRef(null);

  // Define text node references and animation configurations
  const textNodes = [
    {
      ref: sippingOnTextRef,
      splitTextFunction: SplitTextToWords,
      animationFunction: "from",
      animation: { duration: 0.2, opacity: 0, ease: "inOut", stagger: 0.1 },
    },
    {
      ref: creativityTextRef,
      splitTextFunction: SplitTextToChars,
      animationFunction: "from",
      animation: {
        duration: 1,
        opacity: 0,
        scale: 1,
        y: -40,
        rotationX: -90,
        transformOrigin: "0% 50% -50",
        ease: "inOut",
        stagger: 0.05,
      },
      offset: ">-0.15",
    },
    {
      ref: oneCupOfTextRef,
      splitTextFunction: SplitTextToWords,
      animationFunction: "from",
      animation: { duration: 0.2, opacity: 0, ease: "inOut", stagger: 0.05 },
      offset: ">-0.6",
    },
    {
      ref: coffeeTextRef,
      animationFunction: "from",
      animation: { duration: 0.07, opacity: 0, ease: "inOut" },
      offset: ">-0.08",
    },
    {
      ref: atTimeTextRef,
      splitTextFunction: SplitTextToWords,
      animationFunction: "from",
      animation: { duration: 0.2, opacity: 0, ease: "inOut", stagger: 0.05 },
    },
    {
      ref: coffeeTextRef,
      splitTextFunction: SplitTextToChars,
      animationFunction: "to",
      animation: {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.15,
        ease: "power4.out",
      },
    },
    {
      ref: coffeeTextCopyRef,
      splitTextFunction: SplitTextToChars,
      animationFunction: "from",
      animation: {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.15,
        ease: "power4.out",
      },
    },
  ];

  // Create Animation Timeline
  const timeline = useRef(gsap.timeline());

  // Start or Update Animation when playAnimation is triggered
  useEffect(() => {
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;

    // Custom: set perspective to "creativity" title text
    timeline.current.set(creativityTextRef.current, {
      perspective: 400,
    });

    // Loop through each text node and register its animation to the timeline
    textNodes.forEach(
      ({
        ref,
        splitTextFunction = null,
        animationFunction,
        animation,
        offset = null,
      }) => {
        // if target ref exists
        if (ref.current) {
          // Split text if function specified
          const refToAnimate = splitTextFunction
            ? splitTextFunction(ref.current)
            : ref.current;

          // Animate
          switch (animationFunction) {
            case "from":
              timeline.current.from(refToAnimate, animation, offset && offset);
              break;
            case "to":
              timeline.current.to(refToAnimate, animation, offset && offset);
              break;
            case "fromTo":
              timeline.current.fromTo(
                refToAnimate,
                animation.from,
                animation.to,
                offset && offset
              );
              break;
            default:
              console.log(
                "[Error]: Inappropriate GSAP animation function given."
              );
              break;
          }
        }
      }
    );

    // Gather child timelines into one parent timeline
    // timeline.current.add(LandingImageCards.timeline.current)

    return () => {
      timeline.current.kill();
    };
  }, [playAnimation]);

  return (
    <section
      id="home"
      className="h-screen bg-coffee-100 dark:bg-coffee-800 overflow-x-hidden"
    >
      <div
        // overflow grid on purpose via "fixed"
        className="grid gap-[20px] grid-rows-6 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-fixed-6 grid-cols-fixed-4
        h-full max-w-screen-xxxl mx-auto xl:px-[150px] lg:px-[100px] md:px-[70px] xs:px-[35px] px-[20px]"
      >
        {/* -------- Text Area -------- */}
        <div
          className="xxxl:row-start-1 xxl:row-start-2 md:row-start-3 row-start-4 row-span-full
          xl:col-span-6 lg:col-span-7 md:col-span-6 sm:col-span-5 col-span-full
          xl:col-start-1 lg:col-start-1 md:col-start-1 sm:col-start-1 col-start-1
          flex flex-col justify-center leading-snug z-10"
        >
          <div
            ref={sippingOnTextRef}
            className="xl:mb-[35px] md:mb-[30px] mb-[20px]
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
            {/* texts into one line (inline) - necessary due to animation */}
            <div
              // ref={(el) => (lastWordsRefs.current[0] = el)}
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
        <div
          className="row-start-1 row-end-6 xl:row-span-full 
          xl:col-start-6 md:col-start-4 xs:col-start-2 col-start-1 col-span-full
          relative"
        >
          <LandingImageCards playAnimation={playAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Home;
