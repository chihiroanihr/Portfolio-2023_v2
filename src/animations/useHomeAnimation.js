import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useHomeAnimation() {
  return null;
}

function useHomeTextAnimationOnScroll(arrTargets, triggerer) {
  return gsap.fromTo(
    arrTargets,
    {
      x: 0,
      opacity: 1,
    },
    {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        id: "home-text-section-on-scroll",
        trigger: triggerer,
        scrub: 2,
        start: "top top",
        end: "bottom top",
      },
    }
  );
}

export { useHomeAnimation, useHomeTextAnimationOnScroll };
