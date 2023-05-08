import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useCoffeeLandingAnimationOnScroll(target, triggerer, startOffset) {
  return gsap.to(target, {
    attr: { startOffset: startOffset },
    scrollTrigger: {
      id: "home-spiral-text-on-scroll",
      trigger: triggerer,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      // !! scroll position after this section gets messed up due to pinned element
      // thus refresh it first
      refreshPriority: 1,
      invalidateOnRefresh: true,
    },
  });
}

export default useCoffeeLandingAnimationOnScroll;
