import { useRef, useEffect } from "react";
import gsap from "gsap";
import { homeImageCards } from "../constants/data";

const LandingImageCards = ({ playAnimation }) => {
  const imageCardsRefs = useRef([]);

  useEffect(() => {
    if (!playAnimation) return;

    if (imageCardsRefs.current) {
      const imageCards = imageCardsRefs.current;

      gsap.from(
        imageCards,
        {
          x: 200,
          y: -200,
          rotation: 0,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
        },
      );
    }
  }, [playAnimation]);

  // const timeline = useRef(gsap.timeline());

  // useEffect(() => {
  //   if (!playAnimation) return;

  //   if (imageCardsRefs.current) {
  //     timeline.current.from(imageCardsRefs.current, {
  //       x: 200,
  //       y: -200,
  //       rotation: 0,
  //       opacity: 0,
  //       stagger: 0.15,
  //       duration: 1,
  //       ease: "power4.out",
  //     });
  //   }
  // }, [playAnimation]);

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
};

export default LandingImageCards;
