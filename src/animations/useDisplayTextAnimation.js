import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useDisplayTextAnimation(displayTextWords, displaySectionNode) {
  console.log("[Render] [animation] useDisplayTextAnimation.js");

  // Initialize
  gsap.set(displayTextWords, { yPercent: 100 });

  // Animate
  return gsap.to(displayTextWords, {
    duration: 1,
    yPercent: 0,
    stagger: 0.1,
    ease: "power4",
    scrollTrigger: {
      id: "display-text-animation",
      trigger: displaySectionNode,
      start: "top center",
    },
  });
}

export default useDisplayTextAnimation;
