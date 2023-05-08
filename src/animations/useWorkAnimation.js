import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useWorkHeadingAnimationOnScroll(triggerer) {
  return gsap
    .timeline({
      paused: true,
      defaults: {
        y: 0,
        //duration: 1,
      },
      scrollTrigger: {
        id: "work-section-heading-scroll-animation",
        trigger: triggerer,
        endTrigger: "#works #heading",
        start: "top top",
        end: "top+=500 top",
        // Optional
        scrub: true,
        // once: true,
        // --------
      },
    })
    .from("#works #heading", {
      y: -500,
      opacity: 0,
      scale: 4,
    });
}

// Scroll Animations when Entered
function useWorkAnimationOnEnter(triggerer) {
  return gsap
    .timeline({
      paused: true,
      defaults: {
        y: 0,
        opacity: 0,
      },
    })
    .set(triggerer, {
      opacity: 1,
      zIndex: 0, // necessary due to overlapping element with About section
    })
    .to("#works #background", { opacity: 1 }, "1.5");
}

// Scroll Animations when Leave
function useWorkAnimationOnLeave() {
  return gsap
    .timeline({
      paused: true,
      defaults: {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
    })
    .to("#works #background", { opacity: 0 }, "<")
    .to("#works #heading", { y: -200, opacity: 0 }, "<");
}

// Scroll Animations when Entered Back
function useWorkAnimationOnEnterBack() {
  return gsap
    .timeline({
      paused: true,
      defaults: {
        y: 0,
        opacity: 0,
        duration: 0.8,
      },
    })
    .to("#works #heading", { opacity: 1 }, "<")
    .to("#works #background", { opacity: 1 }, "<0.5");
}

// Scroll Animations when Leave Back
function useWorkAnimationOnLeaveBack(triggerer) {
  return gsap
    .timeline({
      paused: true,
      defaults: {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
    })
    .to("#works #background", { opacity: 0 }, "<")
    .to("#works #heading", { y: 200, opacity: 0 }, "<0.3")
    .to(triggerer, {
      opacity: 0,
      zIndex: -1, // necessary due to overlapping element with About section
    });
}

export {
  useWorkHeadingAnimationOnScroll,
  useWorkAnimationOnEnter,
  useWorkAnimationOnEnterBack,
  useWorkAnimationOnLeave,
  useWorkAnimationOnLeaveBack,
};
