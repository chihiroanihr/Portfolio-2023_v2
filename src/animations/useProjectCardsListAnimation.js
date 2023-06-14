import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getOpacity, getRotation } from "@utils";

gsap.registerPlugin(ScrollTrigger);

function animateProjectCard(cardNode) {
  // Initialize each cards
  gsap.set(cardNode, { opacity: 0, autoAlpha: 0, y: -100 });

  // Animate each card
  gsap.to(cardNode, {
    opacity: 1,
    autoAlpha: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
      id: "project-card-animation-on-scroll",
      trigger: cardNode,
      start: "top-=90% top",
      clearProps: true,
      invalidateOnRefresh: true,
    },
  });
}

function animateProjectCardNewTag(newTagNode, cardNode) {
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
      id: "project-card-newtag-animation-on-scroll",
      trigger: cardNode,
      start: "top-=90% top",
      toggleActions: "play none restart none",
      //once: true,
      clearProps: true,
      invalidateOnRefresh: true,
    },
  });
}

function animateProjectCardsList(cardsContainerNode, sectionWrapperNode) {
  // Animate entire cards onLeave and onLeaveBack
  gsap.fromTo(
    cardsContainerNode,
    { opacity: 1, autoAlpha: 1, y: 0 },
    {
      opacity: 0,
      autoAlpha: 0,
      y: -100,
      duration: 0.8,
      scrollTrigger: {
        id: "project-cards-list-animation-on-scroll",
        trigger: sectionWrapperNode,
        start: "top top",
        end: "bottom bottom",
        toggleActions: "none play reverse none", // animate onLeave and onLeaveBack
        clearProps: true,
        invalidateOnRefresh: true,
      },
    }
  );
}

function useProjectCardsListAnimation(cardsContainerNode, sectionWrapperNode) {
  console.log("[Render] [animation] useProjectCardsListAnimation.js");

  return gsap.context(() => {
    // ---------- Cards Container Animation ---------- //
    animateProjectCardsList(cardsContainerNode, sectionWrapperNode);

    // ------------- Each Card Animation ------------- //
    cardsContainerNode.childNodes.forEach((cardNode) => {
      // Animate each card
      animateProjectCard(cardNode);

      // Get new tag node for each card
      const newTagNode = cardNode.querySelector("#new-tag");

      // Animate new tags inside each card
      if (newTagNode) animateProjectCardNewTag(newTagNode, cardNode);
    }),
      // Scope
      cardsContainerNode;
  });
}

export default useProjectCardsListAnimation;
