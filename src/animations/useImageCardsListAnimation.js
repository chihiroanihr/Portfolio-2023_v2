import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation values for each cards
const scrollAnimationProps = {
  0: {
    props: { y: -100, x: -100, rotate: -25, opacity: 0 },
    top: 50,
  },
  1: {
    props: { y: -150, x: 50, rotate: 5, opacity: 0 },
    top: 200,
  },
  2: {
    props: { y: -200, x: 150, rotate: 20, opacity: 0 },
    top: 300,
  },
};

function useImageCardsListAnimationOnScroll(target) {
  return target.forEach((imageCard, index) => {
    const props = scrollAnimationProps[index].props;
    const top = scrollAnimationProps[index].top;

    // Add Animation
    gsap.to(imageCard, {
      id: "home-image-cards-list-item-animation-" + index,
      ...props,
      opacity: 0,
      scrollTrigger: {
        id: "home-image-cards-list-item-scroll-animation-" + index,
        trigger: imageCard,
        start: top + " top",
        end: "+=500",
        scrub: 2,
      },
    });
  });
}

function useImageCardsListAnimation(imageCardsListNode) {
  return gsap.from(imageCardsListNode, {
    id: "home-image-cards-list-animation",
    x: 200,
    y: -200,
    rotation: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.15,
    ease: "power4.out",
    clearProps: true,
    // Allow scroll triggered animations on complete
    onComplete: () => useImageCardsListAnimationOnScroll(imageCardsListNode),
  });
}

export default useImageCardsListAnimation;
