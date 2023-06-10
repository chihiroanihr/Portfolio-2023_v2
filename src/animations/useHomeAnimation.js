import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useHomeTextAnimationOnScroll(arrTextNodes, textContainerNode) {
  // Initialize
  gsap.set(arrTextNodes, { x: 0, opacity: 1 });

  return gsap.to(arrTextNodes, {
    x: -100,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      id: "home-text-section-scroll-animation",
      trigger: textContainerNode,
      scrub: 2,
      start: "top top",
      end: "bottom top",
    },
  });
}

function useHomeAnimation({
  triggerer: { textContainerNodeRef },
  text: {
    sippingOnTextNodeRef,
    creativityTextNodeRef,
    inlineTextWrapperNodeRef,
    atTimeTextNodeRef,
  },
  splitText: {
    sippingOnWords,
    creativityChars,
    oneCupOfWords,
    coffeeText,
    atTimeWords,
    coffeeChars,
    coffeeCharsCopy,
  },
}) {
  // Initialize
  gsap.set(sippingOnWords, { opacity: 0 });
  gsap.set(creativityChars, { opacity: 0 });
  gsap.set(oneCupOfWords, { opacity: 0 });
  gsap.set(coffeeText, { opacity: 0 });
  gsap.set(atTimeWords, { opacity: 0 });
  gsap.set(coffeeChars, { y: 0, opacity: 1 });
  gsap.set(coffeeCharsCopy, { y: 20, opacity: 0 });

  // Register animations to the timeline
  return (
    gsap
      .timeline({
        id: "home-section-animation",
        onComplete: () => {
          useHomeTextAnimationOnScroll(
            // Scroll Targets
            [
              sippingOnTextNodeRef.current,
              creativityTextNodeRef.current,
              inlineTextWrapperNodeRef.current,
              atTimeTextNodeRef.current,
            ],
            // Triggerer
            textContainerNodeRef.current
          );
        },
      })
      // Add all animations
      .to(sippingOnWords, {
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: "out",
      })
      .to(
        creativityChars,
        {
          opacity: 1,
          duration: 1.5,
          stagger: 0.05,
          ease: "out",
        },
        "<=10%"
      )
      .to(
        oneCupOfWords,
        {
          opacity: 1,
          duration: 2,
          ease: "out",
          stagger: 0.06,
        },
        "<=20%"
      )
      .to(
        coffeeText,
        {
          opacity: 1,
          duration: 2,
          ease: "out",
        },
        ">-2"
      )
      .to(
        atTimeWords,
        {
          opacity: 1,
          duration: 2,
          stagger: 0.06,
          ease: "out",
        },
        "=-2"
      )
      .addLabel("rolling-text", "<0.5")
      .to(
        coffeeChars,
        {
          y: -20,
          opacity: 0,
          duration: 0.15,
          stagger: 0.05,
          ease: "power4.out",
        },
        "rolling-text"
      )
      .to(
        coffeeCharsCopy,
        {
          y: 0,
          opacity: 1,
          duration: 0.15,
          stagger: 0.05,
          ease: "power4.out",
        },
        ">"
      )
  );
}

export default useHomeAnimation;
