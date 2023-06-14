import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useFooterAnimation(footerSectionNode, isTouchDevice) {
  console.log("[Render] [animation] useFooterAnimation.js");

  // Animate
  return gsap.context(
    () => {
      // Node Selectors via ID
      const horizontalLineRL = "#footer #social-icons #horizontal-line-rl";
      const horizontalLineLR = "#footer #social-icons #horizontal-line-lr";
      const signature = "#footer #signature";
      const verticalLine = "#footer #vertical-line";
      const creditTitle = "#footer #credits #title";
      const creditContentText = "#footer #credits #content #text";

      // Initialize
      gsap.set([horizontalLineRL, horizontalLineLR], { scaleX: 0 });
      gsap.set(signature, { opacity: 0 });
      gsap.set(verticalLine, { scaleY: 0 });
      gsap.set(creditTitle, { yPercent: 100 });
      gsap.set(creditContentText, { yPercent: 100 });

      const footerScrollTriggerOptions = {
        id: "footer-horizontal-line-animation",
        trigger: footerSectionNode,
        start: isTouchDevice ? "top bottom" : "top 90%",
        // markers: true,
      };

      // Animate
      gsap
        .timeline({
          defaults: { ease: "power2.out", clearProps: true },
          scrollTrigger: footerScrollTriggerOptions,
        })
        .to(horizontalLineRL, { duration: 2, scaleX: 1 }, "0")
        .to(horizontalLineLR, { duration: 2, scaleX: 1 }, "0")
        .to(
          verticalLine,
          { duration: 2, transformOrigin: "top", scaleY: 1 },
          "<=10%"
        )
        .to(signature, { opacity: 1 }, "<=40%")
        .to(creditTitle, { duration: 0.8, stagger: 0.1, yPercent: 0 }, "<=20%")
        .to(
          creditContentText,
          { duration: 1.5, stagger: 0.05, yPercent: 0 },
          "<=10%"
        );
    },

    // scope
    footerSectionNode
  );
}

export default useFooterAnimation;
