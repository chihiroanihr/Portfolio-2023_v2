import { useRef, useEffect, forwardRef } from "react";
import gsap from "gsap";
import { homeImageCards } from "@constants/data";

// !! forwardRef expects a function that accepts props and ref as arguments, thus destructuring is a recommended approach
const LandingImageCards = forwardRef(({ playAnimation }, ref) => {
  // References to use for animation
  const imageCardsRefs = useRef([]);

  // Update Animation when playAnimation is triggered
  useEffect(() => {
    if (!playAnimation) return;

    // Register animations to the timeline
    ref.current = gsap
      .timeline({ defaults: { clearProps: "all" } })
      .from(imageCardsRefs.current, {
        x: 200,
        y: -200,
        rotation: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
      });

    // Clean up animation when component unmounts
    return () => {
      ref.current?.kill();
    };
  }, [playAnimation]);

  return (
    <>
      {homeImageCards.map(({ id, img, style }, index) => (
        <img
          ref={(el) => (imageCardsRefs.current[index] = el)}
          key={id}
          src={img}
          alt={id}
          className={`absolute -translate-y-1/2 ${style.position} ${style.rotation} ${style.brightness}
            xxl:w-[400px] xxl:h-[650px] md:w-[300px] md:h-[500px] xs:w-[250px] xs:h-[400px] w-[200px] h-[350px]
            rounded-2xl shadow-cards-light dark:shadow-cards-dark object-cover object-center
            pointer-events-none prevent-select`}
        />
      ))}
    </>
  );
});

// !! Assign the default value to prevent errors when they are not passed by the parent component.
LandingImageCards.defaultProps = { playAnimation: false };

export default LandingImageCards;
