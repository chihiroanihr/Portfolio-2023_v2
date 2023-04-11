import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextToChars from "../utils/SplitTextToChars";

import coffeeImg1 from "../assets/images/coffee-1.jpg";
import coffeeImg2 from "../assets/images/coffee-2.jpg";
import coffeeImg3 from "../assets/images/coffee-3.jpg";

const Home = ({ playAnimation }) => {
  const animateCreativityCharRef = useRef(null);
  const animateCoffeeCharRef = useRef(null);
  const animateCoffeeCharCopyRef = useRef(null);

  useEffect(() => {
    if (playAnimation) {
      if (animateCreativityCharRef.current) {
        const creativityChars = SplitTextToChars(
          animateCreativityCharRef.current
        );

        gsap.set(animateCreativityCharRef.current, {
          perspective: 400,
        });

        gsap.from(
          creativityChars,
          {
            duration: 0.4,
            delay: 0.5,
            opacity: 0,
            scale: 1,
            y: -40,
            rotationX: -90,
            transformOrigin: "0% 50% -50",
            ease: "inOut",
            stagger: 0.05,
          },
          "+=0"
        );
      }

      if (animateCoffeeCharRef.current && animateCoffeeCharCopyRef) {
        const coffeeChars = SplitTextToChars(animateCoffeeCharRef.current);
        const coffeeCharsCopy = SplitTextToChars(
          animateCoffeeCharCopyRef.current
        );

        gsap.fromTo(
          coffeeChars,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -20,
            opacity: 0,
            stagger: 0.05,
            duration: 0.15,
            ease: "power4.out",
          },
          "+=0"
        );

        gsap.fromTo(
          coffeeCharsCopy,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.15,
            ease: "power4.out",
          },
          "+=0"
        );
      }
    }
  }, [playAnimation]);

  return (
    <section
      id="home"
      className="h-screen bg-coffee-100 dark:bg-coffee-800 overflow-x-hidden"
    >
      <div
        // Overflow grid on purpose via "fixed"
        className="grid gap-[20px] grid-rows-6 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-fixed-6 grid-cols-fixed-4
        h-full max-w-screen-xxxl mx-auto xl:px-[150px] lg:px-[100px] md:px-[70px] xs:px-[35px] px-[20px]"
      >
        {/* Text Area */}
        <div
          className="xxxl:row-start-1 xxl:row-start-2 md:row-start-3 row-start-4 row-span-full
          xl:col-span-6 lg:col-span-7 md:col-span-6 sm:col-span-5 col-span-full
          xl:col-start-1 lg:col-start-1 md:col-start-1 sm:col-start-1 col-start-1
          flex flex-col justify-center leading-snug z-10"
        >
          <p
            className="xl:mb-[35px] md:mb-[30px] mb-[20px]
            lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]
            font-default-sans md:font-extralight font-light text-coffee-600 dark:text-coffee-300"
          >
            Sipping on
          </p>
          <p
            ref={animateCreativityCharRef}
            id="creativity"
            className="lg:text-[96px] md:text-[72px] xs:text-[48px] text-[36px] z-10 pl-[8px]
            font-title-cursive whitespace-nowrap text-coffee-600 dark:text-coffee-300"
          >
            Creativity
          </p>
          <div
            className="lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]
            font-default-sans md:font-extralight font-light text-coffee-600 dark:text-coffee-300"
          >
            <div className="relative inline-block">
              one cup of{" "}
              <span
                ref={animateCoffeeCharRef}
                className="md:font-light font-normal prevent-select"
              >
                coffee
              </span>
              <span
                ref={animateCoffeeCharCopyRef}
                className="absolute top-0 right-0 md:font-light font-normal text-yellow-500"
              >
                coffee
              </span>
            </div>
            <p> at a time.</p>
          </div>
        </div>

        {/* Image Area */}
        <div
          className="row-start-1 row-end-6 xl:row-span-full 
          xl:col-start-6 md:col-start-4 xs:col-start-2 col-start-1 col-span-full
          relative"
        >
          <img
            src={coffeeImg3}
            alt="coffee-image-3"
            className="absolute top-[45%] right-[50%] -rotate-[17deg] -translate-y-1/2
            xxl:w-[400px] xxl:h-[650px] md:w-[300px] md:h-[500px] xs:w-[250px] xs:h-[400px] w-[200px] h-[350px]
            rounded-2xl shadow-cards-light dark:shadow-cards-dark dark:brightness-[0.7] object-cover object-center
            pointer-events-none prevent-select"
          />
          <img
            src={coffeeImg2}
            alt="coffee-image-2"
            className="absolute top-1/2 xs:right-[30%] right-[34%] -rotate-6 -translate-y-1/2
            xxl:w-[400px] xxl:h-[650px] md:w-[300px] md:h-[500px] xs:w-[250px] xs:h-[400px] w-[200px] h-[350px]
            rounded-2xl shadow-cards-light dark:shadow-cards-dark dark:brightness-75 object-cover object-center
            pointer-events-none prevent-select"
          />
          <img
            src={coffeeImg1}
            alt="coffee-image-1"
            className="absolute top-[60%] xs:right-[5%] right-[16%] rotate-6 -translate-y-1/2
            xxl:w-[400px] xxl:h-[650px] md:w-[300px] md:h-[500px] xs:w-[250px] xs:h-[400px] w-[200px] h-[350px]
            rounded-[16px] shadow-cards-light dark:shadow-cards-dark dark:brightness-[0.8] object-cover object-center
            pointer-events-none prevent-select"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
