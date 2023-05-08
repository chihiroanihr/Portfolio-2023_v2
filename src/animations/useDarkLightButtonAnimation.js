import { gsap } from "gsap";

function useDarkLightButtonAnimation(target, vars) {
  return gsap.from(target, {
    id: "dark-light-button",
    y: -10,
    opacity: 0,
    duration: 1,
    ease: "inOut",
    clearProps: true,
    ...vars,
  });
}

export default useDarkLightButtonAnimation;
