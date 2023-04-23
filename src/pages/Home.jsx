import { useRef, forwardRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitTextToWords, splitTextToChars } from "@utils";
import { CoffeeLanding, ImageCardsLanding } from "@layouts";

gsap.registerPlugin(ScrollTrigger);

// !! forwardRef expects a function that accepts props and ref as arguments, thus destructuring is a recommended approach
const Home = forwardRef(({ playAnimation, className }, ref) => {
  // ============================= Landing Animations ============================= //
  // Scoped reference containing child elements that you want to animate
  const textSectionRef = useRef(null);
  // Child references
  const sippingOnTextRef = useRef(null);
  const creativityTextRef = useRef(null);
  const coffeeTextRef = useRef(null);
  const coffeeTextCopyRef = useRef(null);
  const oneCupOfTextRef = useRef(null);
  const atTimeTextRef = useRef(null);
  const oneCupOfCoffeeTextRef = useRef(null);
  const scrollTextRef = useRef(null);
  const scrollLineRef = useRef(null);
  // Child Component reference
  const imageCardsRef = useRef(null);
  // Timeline reference for scroll animation
  const textTweens = useRef(null);

  // Update animation when playAnimation is triggered
  useEffect(() => {
    // If playAnimation is not triggered yet than skip
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
      textTweens.current = gsap.to(
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
    ref.current = gsap
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
      .add(imageCardsRef.current, ">rolling-text")
      .from(
        scrollTextRef.current,
        {
          id: "home-scroll-text",
          duration: 1,
          opacity: 0,
          ease: "out",
        },
        ">-1.3"
      )
      .from(
        scrollLineRef.current,
        {
          id: "home-scroll-line",
          duration: 1,
          opacity: 0,
          scaleY: 0,
          transformOrigin: "top",
          ease: "out",
          clearProps: true,
        },
        ">-0.5"
      );

    // Clean animation: prevent continuing to execute even after component unmounted
    return () => {
      textTweens.current?.scrollTrigger?.kill();
      textTweens.current?.kill();
      imageCardsRef.current?.kill();
      // imageCardsRef.current = null;
      ref.current?.scrollTrigger?.kill();
      ref.current?.kill();
      console.log("[LOG] (Home1.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // =========================== Scroll Line Animations =========================== //
  // Scroll Line Reference
  const scrollLineWrapperRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      // Calculate the scroll percentage based on the window's scroll position,
      // the document's height, and the window's height.
      const wintop = window.pageYOffset,
        docheight = document.documentElement.scrollHeight,
        winheight = window.innerHeight;
      // Select the referenced element and update its style property to change its width.
      const scrolled = (wintop / (docheight - winheight)) * 100;
      const scrolled15vh = (+scrolled + 15).toFixed(2); // Initial height: 15vh
      // If reached to maximum 45vh then pause
      if (scrollLineWrapperRef.current && scrolled15vh < 45) {
        scrollLineWrapperRef.current.style.height = scrolled15vh + "vh";
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="home" className={className}>
      {/* ------------------------ First Home section ------------------------ */}
      <div
        id="home-1"
        className="h-screen
        xl:px-[150px] lg:px-[100px] md:px-[70px] sm:px-[45px] xs:px-[35px] px-[20px]"
      >
        <div
          // overflow grid on purpose via "fixed"
          className="h-[90vh] pt-[10vh] grid gap-[20px]
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
              {/* texts into one line (inline) - necessary due to animation */}
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
          <div
            className="row-start-1 row-end-6 xl:row-span-full 
            xl:col-start-6 md:col-start-4 xs:col-start-2 col-start-1 col-span-full
            relative"
          >
            <ImageCardsLanding
              ref={imageCardsRef}
              playAnimation={playAnimation}
            />
          </div>
        </div>

        {/* -------- Scroll Line -------- */}
        <div ref={scrollLineWrapperRef} className="relative h-[15vh]">
          <div className="absolute top-[-5vh] w-full h-full flex flex-col justify-center items-center gap-1">
            <div
              ref={scrollTextRef}
              className="text-coffee-600 dark:text-coffee-300 text-[13px]
            font-default-sans font-medium tracking-[0.2em] uppercase"
            >
              Scroll
            </div>
            <div
              ref={scrollLineRef}
              className="h-full w-[1px] bg-coffee-600"
            ></div>
          </div>
        </div>
      </div>

      {/* ------------------------ Second Home section ------------------------ */}
      <CoffeeLanding
        id="home-2"
        className="h-screen xl:my-[300px] lg:my-[100px]"
      />
    </section>
  );
});

// !! Sets the default value for the playAnimation prop to false to prevent errors when they are not passed by the parent component.
Home.defaultProps = { playAnimation: false, className: "" };

export default Home;
