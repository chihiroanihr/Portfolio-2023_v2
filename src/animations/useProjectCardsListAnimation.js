import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useProjectCardsListAnimation(cardContainerNode, sectionWrapperNode) {
  return gsap.context(() => {
    // Animate entire cards onLeave and onLeaveBack
    gsap.fromTo(
      cardContainerNode,
      {
        opacity: 1,
        autoAlpha: 1,
        y: 0,
      },
      {
        opacity: 0,
        autoAlpha: 0,
        y: -100,
        scrollTrigger: {
          id: "project-cards-list-scroll-animation",
          trigger: sectionWrapperNode,
          toggleActions: "none play reverse none",
          start: "top top",
          end: "bottom bottom",
          duration: 1,
          clearProps: true,
          invalidateOnRefresh: true,
        },
      }
    );

    // Animate Each Cards
    cardContainerNode.childNodes.forEach((child) => {
      gsap.set(child, { opacity: 0, autoAlpha: 0, y: -100 });
      gsap.set("#works #new-tag", { opacity: 0, rotate: -50, y: -50 });

      ScrollTrigger.create({
        id: "project-cards-list-item-animation",
        trigger: child,
        start: "top-=90% top",
        duration: 1.5,
        once: true,
        clearProps: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.to(child, { opacity: 1, autoAlpha: 1, y: 0 });
          gsap.to(
            "#works #new-tag",
            {
              opacity: 0.8,
              rotate: 10,
              y: 0,
              duration: 1,
              ease: "elastic",
            },
            "<0.2"
          );
        },
      });
    }),
      cardContainerNode;
  });
}

export default useProjectCardsListAnimation;
