import { useRef, forwardRef, useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollLine } from "@components";
import { CoffeeLanding, ImageCardsLanding } from "@layouts";
import { PlayAnimationContext } from "@contexts";
import { splitTextToWords, splitTextToChars } from "@utils";

gsap.registerPlugin(ScrollTrigger);

// Forward Ref from Parent Component
// ! forwardRef expects a function that accepts only props and ref as arguments
const Home = forwardRef((props, ref) => {
  // Retrieve Props
  const classes = props.className;

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
  // DOM Reference to Child Components for Landing Animations
  const imageCardsRef = useRef({ timeline: null });
  const scrollLineRef = useRef({ timeline: null });
  // DOM Reference for Scroll Animation
  const textSectionRef = useRef(null);
  // Timeline Reference for Scroll Animation
  const textScrollTweenRef = useRef(null);

  // Update animation when playAnimation is triggered
  useEffect(() => {
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
      textScrollTweenRef.current = gsap.to(
        [
          sippingOnTextRef.current,
          creativityTextRef.current,
          oneCupOfCoffeeTextRef.current,
          atTimeTextRef.current,
        ],
        {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            id: "home-text-section-on-scroll",
            trigger: textSectionRef.current,
            scrub: 2,
            start: "top top",
            end: "bottom top",
            // markers: true,
          },
        }
      );
    };

    // Register animations to the timeline
    ref.current.timeline = gsap
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
        opacity: 0,
        duration: 2,
        stagger: 0.06,
        ease: "out",
      })
      .from(
        creativityChars,
        {
          id: "home-creativity-chars",
          y: -40,
          rotationX: -90,
          transformOrigin: "0% 50% -50",
          opacity: 0,
          scale: 1,
          duration: 1.5,
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
          y: -20,
          opacity: 0,
          duration: 0.15,
          stagger: 0.05,
          ease: "power4.out",
        },
        "rolling-text"
      )
      .from(
        coffeeCharsCopy,
        {
          id: "home-coffee-chars-copy",
          y: 20,
          opacity: 0,
          duration: 0.15,
          stagger: 0.05,
          ease: "power4.out",
        },
        ">"
      )
      // Add children component's animations
      .add(imageCardsRef.current.timeline, ">rolling-text")
      .add(scrollLineRef.current.timeline, ">-1.3");

    // Clean Up Animations
    // ! prevent continuing to execute even after component unmounted
    return () => {
      textScrollTweenRef.current?.scrollTrigger?.kill();
      textScrollTweenRef.current?.kill();
      imageCardsRef.current.timeline?.kill();
      // imageCardsRef.current = null;
      scrollLineRef.current.timeline?.kill();
      ref.current.timeline?.scrollTrigger?.kill();
      ref.current.timeline?.kill();
      console.log("[LOG] (Home1.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <section id="home" className={classes}>
      {/* ------------------------ First Home section ------------------------ */}
      <div
        id="home-1"
        className="min-h-screen
        xl:px-[150px] lg:px-[100px] md:px-[70px] sm:px-[45px] xs:px-[35px] px-[20px]"
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
          <ImageCardsLanding
            ref={imageCardsRef}
            className="row-start-1 row-end-6 xl:row-span-full 
            xl:col-start-6 md:col-start-4 xs:col-start-2 col-start-1 col-span-full"
          />
        </div>

        {/* -------- Scroll Line -------- */}
        <ScrollLine ref={scrollLineRef} className="h-[15vh]" />
      </div>

      {/* ------------------------ Second Home section ------------------------ */}
      <CoffeeLanding
        id="home-2"
        className="h-screen xl:my-[300px] lg:my-[100px]"
      />
    </section>
  );
});

// Default Props
// ! Sets the default value to prevent errors when they are not passed by the parent component.
Home.defaultProps = { classes: "" };

export default Home;
