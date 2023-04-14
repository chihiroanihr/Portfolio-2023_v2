import { useRef, useEffect, forwardRef } from "react";
import gsap from "gsap";
import { homeImageCards } from "../constants/data";

const LandingImageCards = forwardRef((props, ref) => {
  // !! forwardRef expects a function that accepts props and ref as arguments
  // Thus destructuring is a recommended approach
  const { playAnimation } = props;

  // References to use for animation
  const imageCardsRefs = useRef([]);

  // Update Animation when playAnimation is triggered
  useEffect(() => {
    if (!playAnimation) return;

    if (imageCardsRefs.current) {
      // Register animations to the timeline
      ref.current = gsap.timeline().from(imageCardsRefs.current, {
        x: 200,
        y: -200,
        rotation: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        clearProps: "all",
      });
    }

    // (Animation cleaning will be done in parent component)
  }, [playAnimation]);

  return (
    <>
      {homeImageCards
        .slice(0)
        .reverse()
        .map((card, index) => (
          <img
            ref={(el) => (imageCardsRefs.current[index] = el)}
            key={card.id}
            src={card.img}
            alt={card.id}
            id="imgCards"
            className={`absolute -translate-y-1/2 ${card.style.position} ${card.style.rotation} ${card.style.brightness}
            xxl:w-[400px] xxl:h-[650px] md:w-[300px] md:h-[500px] xs:w-[250px] xs:h-[400px] w-[200px] h-[350px]
            rounded-2xl shadow-cards-light dark:shadow-cards-dark object-cover object-center
            pointer-events-none prevent-select`}
          />
        ))}
    </>
  );
});

export default LandingImageCards;
