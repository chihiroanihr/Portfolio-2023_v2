import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useScrollTextFlowAnimation(sectionWrapperNode) {
  console.log("[Render] [animation] useScrollTextFlowAnimation.js");

  return gsap.context(
    () => {
      gsap.utils.toArray("#display #coffee-text").forEach((node, index) => {
        // Calculate start and end position
        const offset = index * 20;
        const [xStart, xEnd] =
          index % 2
            ? [
                node.offsetWidth,
                (node.scrollWidth - node.offsetWidth) * -1 - offset,
              ]
            : [node.scrollWidth * -1, 0 + offset];
        // Animate
        gsap.fromTo(
          node,
          { x: xStart },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: sectionWrapperNode,
              end: "bottom+=50% top",
              markers: true,
              scrub: 0.5,
            },
          }
        );
      });

      gsap.utils.toArray("#display #caption-text").forEach((node, index) => {
        // Calculate start and end position
        const offset = index * 20;
        const [xStart, xEnd] =
          index % 2
            ? [
                node.offsetWidth,
                (node.scrollWidth - node.offsetWidth) * -1 - offset,
              ]
            : [node.scrollWidth * -1, 0 + offset];
        // Animate
        gsap.fromTo(
          node,
          { x: xStart },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: sectionWrapperNode,
              end: "bottom+=50% top",
              scrub: 2,
            },
          }
        );
      });
    },

    // scope
    sectionWrapperNode
  );
}

export default useScrollTextFlowAnimation;
