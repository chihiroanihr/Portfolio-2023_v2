import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useCoffeeLandingAnimationOnScroll(
  textPathNode,
  containerNode,
  startOffset
) {
  return gsap.to(textPathNode, {
    attr: { startOffset: startOffset },
    scrollTrigger: {
      id: "home-spiral-text-scroll-animation",
      trigger: containerNode,
      start: "top top",
      end: "bottom-=200 top", // finish fast
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
