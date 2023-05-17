import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useWorksHeadingAnimationOnScroll(triggerer) {
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
function useWorksAnimationOnEnter(triggerer) {
  return gsap
    .timeline({
      id: "works-section-animation-on-enter",
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
function useWorksAnimationOnLeave() {
  return gsap
    .timeline({
      id: "works-section-animation-on-leave",
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
function useWorksAnimationOnEnterBack() {
  return gsap
    .timeline({
      id: "works-section-animation-on-enter-back",
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
function useWorksAnimationOnLeaveBack(triggerer) {
  return gsap
    .timeline({
      id: "works-section-animation-on-leave-back",
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

function useWorksAnimation({
  worksSectionNode,
  handleInsideSection,
  isTouchDevice,
  onChangeBgColor,
  mobileBgColor: bgColor,
}) {
  return gsap.context(() => {
    // Scroll animations for heading
    useWorksHeadingAnimationOnScroll(worksSectionNode).progress(0);

    const worksAnimationOnEnter = useWorksAnimationOnEnter(worksSectionNode);
    const worksAnimationOnLeave = useWorksAnimationOnLeave();
    const worksAnimationOnEnterBack = useWorksAnimationOnEnterBack();
    const worksAnimationOnLeaveBack =
      useWorksAnimationOnLeaveBack(worksSectionNode);

    // Begin animation when scrolled inside work section
    ScrollTrigger.create({
      trigger: worksSectionNode,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        // Toggle States
        handleInsideSection(true);
        if (isTouchDevice) onChangeBgColor(bgColor);
        // Animate
        worksAnimationOnLeaveBack.pause(); // Avoid timelag (necessary for updating z-index immediately)
        worksAnimationOnEnter.progress(0).play(0);
      },
      onLeave: () => {
        handleInsideSection(false);
        if (isTouchDevice) onChangeBgColor("bg-coffee-100 dark:bg-coffee-800");
        worksAnimationOnLeave.progress(0).play(0);
      },
      onEnterBack: () => {
        handleInsideSection(true);
        if (isTouchDevice) onChangeBgColor(bgColor);
        worksAnimationOnEnterBack.progress(0).play(0);
      },
      onLeaveBack: () => {
        handleInsideSection(false);
        if (isTouchDevice) onChangeBgColor("bg-coffee-100 dark:bg-coffee-800");
        worksAnimationOnEnterBack.pause();
        worksAnimationOnLeaveBack.progress(0).play(0);
      },
    });
  }, worksSectionNode);
}

export default useWorksAnimation;
