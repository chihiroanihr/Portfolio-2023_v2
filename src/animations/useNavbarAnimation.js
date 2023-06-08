import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useNavbarLogoAnimationOnscroll() {
  // initialize navar logo
  gsap.set("#navbar-logo", { opacity: 0, x: -110 });

  return gsap.to("#navbar-logo", {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      id: "navbar-logo-scroll-animation",
      // ! No need to assign trigger since its all the way to top
      scrub: 1.5,
      start: "top top",
      end: "+=200 top",
    },
  });
}

function useNavbarBrandAnimationOnScroll() {
  return gsap.to("#navbar-brand", {
    y: -100,
    opacity: 0,
    scrollTrigger: {
      id: "navbar-brand-scroll-animation",
      // ! No need to assign trigger since its all the way to top
      scrub: 1.5,
      start: "top top",
      end: "+=200 top",
    },
  });
}

function useNavbarAnimation() {
  useNavbarLogoAnimationOnscroll();

  return (
    gsap
      .timeline({ defaults: { duration: 1, opacity: 0, clearProps: true } })
      // navbar brand
      .from("#navbar-brand", {
        id: "navbar-brand-animation",
        y: -10,
        ease: "inOut",
        // Allow scroll up animations on complete
        onComplete: useNavbarBrandAnimationOnScroll,
      })
      // menu button
      .from(
        "#menu-button",
        {
          id: "menu-button-animation",
          y: -10,
          ease: "inOut",
        },
        ">-0.5"
      )
  );
}

export default useNavbarAnimation;
