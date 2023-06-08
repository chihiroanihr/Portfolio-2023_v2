import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getOpacity, getRotation } from "@utils";

gsap.registerPlugin(ScrollTrigger);

function useProjectCardsListAnimation(cardsContainerNode, sectionWrapperNode) {
  return gsap.context(() => {
    // ------------------ Cards Container Animation ------------------ //
    // Initialize entire cards
    gsap.set(cardsContainerNode, { opacity: 1, autoAlpha: 1, y: 0 });

    // Animate entire cards onLeave and onLeaveBack
    gsap.to(cardsContainerNode, {
      opacity: 0,
      autoAlpha: 0,
      y: -100,
      duration: 1,
      scrollTrigger: {
        id: "project-cards-list-scroll-animation",
        trigger: sectionWrapperNode,
        start: "top top",
        end: "bottom bottom",
        toggleActions: "none play reverse none", // animate onLeave and onLeaveBack
        clearProps: true,
        invalidateOnRefresh: true,
      },
    });

    // --------------------- Each Card Animation --------------------- //
    cardsContainerNode.childNodes.forEach((child) => {
      // Initialize each cards
      gsap.set(child, { opacity: 0, autoAlpha: 0, y: -100 });

      // Animate each card
      gsap.to(child, {
        opacity: 1,
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          id: "project-cards-list-item-card-animation",
          trigger: child,
          start: "top-=90% top",
          once: true,
          clearProps: true,
          invalidateOnRefresh: true,
        },
      });

      // Get new tag node for each card
      const newTagNode = child.querySelector("#new-tag");

      if (newTagNode) {
        // Get current new tag styles
        const opacityValue = getOpacity(newTagNode);
        const rotateValue = getRotation(newTagNode, { negative: true });

        // Initial new tag
        gsap.set("#works #new-tag", {
          opacity: 0,
          autoAlpha: 0,
          rotate: rotateValue - 50,
          y: -50,
        });

        // Animate new tag
        gsap.to("#works #new-tag", {
          opacity: opacityValue, // animate to original opacity value
          autoAlpha: opacityValue,
          rotate: rotateValue, // animate to original rotation value
          y: 0,
          duration: 1.5,
          ease: "elastic",
          scrollTrigger: {
            id: "project-cards-list-item-newtag-animation",
            trigger: child,
            start: "top-=90% top",
            toggleActions: "play none restart none",
            //once: true,
            clearProps: true,
            invalidateOnRefresh: true,
          },
        });
      }
    }),
      // Scope
      cardsContainerNode;
  });
}

export default useProjectCardsListAnimation;
