import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { positionStyle } from "@constants";

gsap.registerPlugin(ScrollTrigger);

function useAboutAnimation(scopeTarget) {
  return gsap.context(
    () => {
      gsap
        .timeline({
          defaults: {
            duration: 0.8,
          },
          scrollTrigger: {
            id: "about-section-scroll-animation",
            trigger: scopeTarget,
            start: "top-=1000 top",
            end: positionStyle.aboutToWorkSectionTransitionPosition + " top",
            toggleActions: "play reverse play reverse",
            ease: "power2.out",
            invalidateOnRefresh: true, // handles change in trigger position when viewport changes
          },
        })
        .fromTo(
          "#about #full-name",
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1 }
        )
        .fromTo(
          "#about #text-1",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1 },
          "=-0.5"
        )
        .fromTo(
          "#about #text-2",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1 },
          "=-0.8"
        )
        .fromTo("#about #images", { opacity: 0 }, { opacity: 1 }, "=-0.6")
        .fromTo(
          "#about #view-more-btn",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          "=-0.9"
        )
        .fromTo(
          "#about #social-icons",
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, clearProps: true },
          "=-0.7"
        );
    },
    // Scope
    scopeTarget
  );
}

export default useAboutAnimation;
