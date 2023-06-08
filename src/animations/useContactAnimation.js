import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useContactTextAnimation(contactSectionNode) {
  // Initialize
  gsap.set("#contact #text", { yPercent: 100 });

  // Animate
  return gsap.context(
    () => {
      gsap.to("#contact #text", {
        yPercent: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power4",
        scrollTrigger: {
          id: "contact-text-animation",
          trigger: contactSectionNode,
          start: "top center",
        },
      });
    },

    // scope
    contactSectionNode
  );
}

export default useContactTextAnimation;
