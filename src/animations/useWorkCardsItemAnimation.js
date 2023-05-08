import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useWorkCardsItemAnimationOnScroll(target) {
  return gsap.context(
    () => {
      // loop through each child element and create a ScrollTrigger
      target.childNodes.forEach((child) => {
        gsap.from(child, {
          clearProps: true,
          duration: 0.8,
          opacity: 0,
          y: 100,
          scrollTrigger: {
            id: "work-section-cards-scroll-animation",
            trigger: child,
            start: "top-=700 top",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    // Scope
    target
  );
}

export default useWorkCardsItemAnimationOnScroll;
