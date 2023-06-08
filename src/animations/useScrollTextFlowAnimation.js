import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useScrollTextFlowAnimation(sectionWrapperNode) {
  return gsap.context(
    () => {
      gsap.utils.toArray("#display #coffee-text").forEach((node, index) => {
        const offset = index * 20;
        const [xStart, xEnd] =
          index % 2
            ? [
                node.offsetWidth,
                (node.scrollWidth - node.offsetWidth) * -1 - offset,
              ]
            : [node.scrollWidth * -1, 0 + offset];
        gsap.fromTo(
          node,
          { x: xStart },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: sectionWrapperNode,
              scrub: 0.5,
            },
          }
        );
      });

      gsap.utils.toArray("#display #caption-text").forEach((node, index) => {
        const offset = index * 20;
        const [xStart, xEnd] =
          index % 2
            ? [
                node.offsetWidth,
                (node.scrollWidth - node.offsetWidth) * -1 - offset,
              ]
            : [node.scrollWidth * -1, 0 + offset];
        gsap.fromTo(
          node,
          { x: xStart },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: sectionWrapperNode,
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
