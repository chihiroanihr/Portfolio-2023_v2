import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useScrollLineAnimation() {
  // Register animations to the timeline
  return gsap
    .timeline({ defaults: { clearProps: true } })
    .from("#scroll-text", {
      id: "scroll-text-animation",
      duration: 1,
      opacity: 0,
      ease: "out",
    })
    .from(
      "#scroll-line",
      {
        id: "scroll-line-animation",
        duration: 1,
        opacity: 0,
        scaleY: 0,
        transformOrigin: "top",
        ease: "out",
      },
      ">-0.5"
    );
}

export default useScrollLineAnimation;
