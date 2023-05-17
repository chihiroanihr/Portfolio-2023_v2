import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useNavbarBrandAnimationOnScroll() {
  return gsap.to("#navbar-brand", {
    y: -100,
    opacity: 0,
    scrollTrigger: {
      id: "navbar-brand-scroll-animation",
      // ! No need to assign trigger since its all the way to top
      scrub: 2,
      start: "top top",
      end: "+=200 top",
    },
  });
}

function useNavbarAnimation() {
  return gsap
    .timeline({ defaults: { duration: 1, opacity: 0, clearProps: true } })
    .from("#navbar-brand", {
      id: "navbar-brand-animation",
      y: -10,
      ease: "inOut",
      // Allow scroll up animations on complete
      onComplete: useNavbarBrandAnimationOnScroll,
    })
    .from(
      "#menu-button",
      {
        id: "menu-button-animation",
        y: -10,
        ease: "inOut",
      },
      ">-0.5"
    );
}

export default useNavbarAnimation;
