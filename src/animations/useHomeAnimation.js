import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitTextToWords, splitTextToChars } from "@utils";

gsap.registerPlugin(ScrollTrigger);

function useHomeTextAnimationOnScroll(arrTextNodes, textContainerNode) {
  return gsap.fromTo(
    arrTextNodes,
    {
      x: 0,
      opacity: 1,
    },
    {
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
    }
  );
}

function useHomeAnimation(targetRefs) {
  const {
    sippingOnTextNodeRef,
    creativityTextNodeRef,
    oneCupOfTextNodeRef,
    coffeeTextNodeRef,
    coffeeTextNodeCopyRef,
    atTimeTextNodeRef,
    inlineTextWrapperNodeRef,
    textContainerNodeRef,
  } = targetRefs;

  // Split texts from refs into words / chars
  const sippingOnWords = splitTextToWords(sippingOnTextNodeRef.current);
  const creativityChars = splitTextToChars(creativityTextNodeRef.current);
  const oneCupOfWords = splitTextToWords(oneCupOfTextNodeRef.current);
  const coffeeText = coffeeTextNodeRef.current;
  const atTimeWords = splitTextToWords(atTimeTextNodeRef.current);
  const coffeeChars = splitTextToChars(coffeeTextNodeRef.current);
  const coffeeCharsCopy = splitTextToChars(coffeeTextNodeCopyRef.current);

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
      // Custom: set perspective to "creativity" title text
      .set(creativityTextNodeRef.current, {
        perspective: 600,
      })
      // Add all animations
      .from(sippingOnWords, {
        id: "home-sipping-on-words",
        duration: 2,
        opacity: 0,
        stagger: 0.06,
        ease: "out",
      })
      .from(
        creativityChars,
        {
          id: "home-creativity-chars",
          duration: 1.5,
          y: -40,
          rotationX: -90,
          transformOrigin: "0% 50% -50",
          opacity: 0,
          scale: 1,
          stagger: 0.05,
          ease: "out",
        },
        "=-2"
      )
      .from(
        oneCupOfWords,
        {
          id: "home-one-cup-of-words",
          duration: 2,
          opacity: 0,
          ease: "out",
          stagger: 0.06,
        },
        "=-1.5"
      )
      .from(
        coffeeText,
        {
          id: "home-coffee-text",
          duration: 2,
          opacity: 0,
          ease: "out",
        },
        ">-2"
      )
      .from(
        atTimeWords,
        {
          id: "home-at-a-time-words",
          duration: 2,
          opacity: 0,
          stagger: 0.06,
          ease: "out",
        },
        "=-2"
      )
      .addLabel("rolling-text", "<0.5")
      .to(
        coffeeChars,
        {
          id: "home-coffee-chars",
          duration: 0.15,
          y: -20,
          opacity: 0,
          stagger: 0.05,
          ease: "power4.out",
        },
        "rolling-text"
      )
      .from(
        coffeeCharsCopy,
        {
          id: "home-coffee-chars-copy",
          duration: 0.15,
          y: 20,
          opacity: 0,
          stagger: 0.05,
          ease: "power4.out",
        },
        ">"
      )
  );
}

export default useHomeAnimation;
