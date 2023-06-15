import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { positionStyle } from "@themes";

gsap.registerPlugin(ScrollTrigger);

function useAboutAnimation(sectionWrapperNode) {
  console.log("[Render] [animation] useAboutAnimation.js");

  return gsap.context(
    () => {
      // Initialize
      gsap.set("#about #full-name", { y: 100, opacity: 0 });
      gsap.set("#about #local-time", { x: 100, opacity: 0 });
      gsap.set("#about #text", { y: 100, opacity: 0 });
      gsap.set("#about #images", { opacity: 0 });
      gsap.set("#about #view-more-btn", { y: 100, opacity: 0 });
      gsap.set("#about #social-icons", { y: 100, opacity: 0 });

      gsap.set(sectionWrapperNode, { autoAlpha: 0, opacity: 0 });

      // Toggle opacity when moving between sections
      gsap.to(sectionWrapperNode, {
        duration: 0.5,
        autoAlpha: 1,
        opacity: 1,
        clearProps: true,
        scrollTrigger: {
          id: "about-section-animation-on-scroll",
          trigger: sectionWrapperNode,
          start: "top-=1000 top",
          end: positionStyle.aboutToWorkSectionTransitionPosition + " top",
          toggleActions: "play reverse play none",
          ease: "power2.out",
          invalidateOnRefresh: true, // handles change in trigger position when viewport changes
        },
      });

      // About section content animation
      gsap
        .timeline({
          defaults: {
            duration: 1,
            ease: "power2.out",
            clearProps: true,
          },
          scrollTrigger: {
            id: "about-section-content-animation-on-scroll",
            trigger: sectionWrapperNode,
            start: "top-=1000 top",
            end: positionStyle.aboutToWorkSectionTransitionPosition + " top",
            // toggleActions: "play reverse play none", // only run once
            invalidateOnRefresh: true,
          },
        })
        .to("#about #full-name", { y: 0, opacity: 1 })
        .to("#about #local-time", { x: 0, opacity: 1 }, "<=5%")
        .to("#about #text", { y: 0, opacity: 1, stagger: 0.01 }, "<=0")
        .to("#about #view-more-btn", { y: 0, opacity: 1 }, "<=40%")
        .to("#about #images", { opacity: 1 }, "<=20%")
        .to("#about #social-icons", { y: 0, opacity: 1 }, "<=20%");
    },

    // Scope
    sectionWrapperNode
  );
}

export default useAboutAnimation;
