import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useHomeTextAnimationOnScroll(textContainerNode) {
  const arrTextNodes = [
    "#sipping-on",
    "#creativity",
    "#one-cup-of-coffee",
    "#at-a-time",
  ];

  // Initialize
  gsap.set(arrTextNodes, { x: 0, opacity: 1 });

  // Animate
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

function useHomeTextAnimation({
  sippingOnWords,
  creativityChars,
  oneCupOfWords,
  coffeeText,
  atTimeWords,
  coffeeChars,
  coffeeCharsCopy,
}) {
  // Initialize
  gsap.set(sippingOnWords, { opacity: 0 });
  gsap.set(creativityChars, { opacity: 0 });
  gsap.set(oneCupOfWords, { opacity: 0 });
  gsap.set(coffeeText, { opacity: 0 });
  gsap.set(atTimeWords, { opacity: 0 });
  gsap.set(coffeeChars, { y: 0, opacity: 1 });
  gsap.set(coffeeCharsCopy, { y: 20, opacity: 0 });

  // Animate
  return (
    gsap
      .timeline({ id: "home-section-text-animation" })
      // Add all text animations
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
      .to(
        coffeeChars,
        {
          y: -20,
          opacity: 0,
          duration: 0.15,
          stagger: 0.05,
          ease: "power4.out",
        },
        "<0.5"
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

function useImageCardsListAnimationOnScroll(target) {
  // Animation values for each cards
  const scrollAnimationProps = {
    0: {
      props: { y: -100, x: -100, rotate: -25, opacity: 0 },
      top: 50,
    },
    1: {
      props: { y: -150, x: 50, rotate: 5, opacity: 0 },
      top: 200,
    },
    2: {
      props: { y: -200, x: 150, rotate: 20, opacity: 0 },
      top: 300,
    },
  };

  // Animate
  return target.forEach((imageCard, index) => {
    const props = scrollAnimationProps[index].props;
    const top = scrollAnimationProps[index].top;

    // Add Animation
    gsap.to(imageCard, {
      id: "home-image-cards-list-item-animation-" + index,
      ...props,
      opacity: 0,
      scrollTrigger: {
        id: "home-image-cards-list-item-scroll-animation-" + index,
        trigger: imageCard,
        start: top + " top",
        end: "+=500",
        scrub: 2,
      },
    });
  });
}

function useImageCardsListAnimation() {
  // Get array of each image cards
  const imageCardsList = document.querySelector(
    "#image-cards-container"
  ).childNodes;

  // Animate
  return gsap.from(imageCardsList, {
    id: "home-image-cards-list-animation",
    x: 200,
    y: -200,
    rotation: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.15,
    ease: "power4.out",
    clearProps: true,
    // Allow scroll triggered animations on complete
    onComplete: () => useImageCardsListAnimationOnScroll(imageCardsList),
  });
}

function useScrollLineAnimation() {
  // Animate
  return gsap
    .timeline({
      id: "home-section-scroll-line-animation",
      defaults: { ease: "out", clearProps: true },
    })
    .from("#scroll-line #text", { duration: 1, opacity: 0 })
    .from(
      "#scroll-line #line",
      { duration: 1.5, opacity: 0, scaleY: 0, transformOrigin: "top" },
      ">-50%"
    );
}

function useHomeAnimation({
  scopeNode: scopeNode,
  textContainerNode: textContainerNode,
  splitTextNodes: splitTextNodes,
}) {
  console.log("[Render] [animation] useHomeAnimation.js");

  const homeTimeline = gsap.context(
    () => {
      // Retrieve all animations
      const homeTextAnimTimeline = useHomeTextAnimation(splitTextNodes);
      const imageCardsListAnimTimeline = useImageCardsListAnimation();
      const scrollLineAnimTimeline = useScrollLineAnimation();

      // Animate
      gsap
        .timeline({
          id: "home-section-animation",
          onComplete: () => useHomeTextAnimationOnScroll(textContainerNode), // triggerer
        })
        .add(homeTextAnimTimeline)
        .add(imageCardsListAnimTimeline, ">-40%")
        .add(scrollLineAnimTimeline, ">-70%");
    },
    // Scope
    scopeNode
  );

  return homeTimeline;
}

export default useHomeAnimation;
