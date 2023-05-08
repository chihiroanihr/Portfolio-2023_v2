import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation values for each cards
export const scrollAnimationProps = {
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

function useImageCardsLandingItemAnimationOnScroll(target) {
  return target.forEach((imageCard, index) => {
    const props = scrollAnimationProps[index].props;
    const top = scrollAnimationProps[index].top;

    // Add Animation
    gsap.to(imageCard, {
      id: "home-image-cards-" + index,
      ...props,
      opacity: 0,
      scrollTrigger: {
        id: "home-image-cards-on-scroll-" + index,
        trigger: imageCard,
        start: top + " top",
        end: "+=500",
        scrub: 2,
      },
    });
  });
}

function useImageCardsLandingItemAnimation(target, vars) {
  return gsap.from(target, {
    id: "home-landing-images",
    x: 200,
    y: -200,
    rotation: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.15,
    ease: "power4.out",
    clearProps: true,
    ...vars,
    // Allow scroll triggered animations on complete
    onComplete: () => useImageCardsLandingItemAnimationOnScroll(target),
  });
}

export default useImageCardsLandingItemAnimation;
