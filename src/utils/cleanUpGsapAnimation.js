import { ScrollTrigger } from "gsap/ScrollTrigger";

const cleanUpGsapAnimation = (animation, scrollTrigger) => {
  if (scrollTrigger) {
    ScrollTrigger.revert();
    ScrollTrigger.refresh();
  }

  if (animation) animation.revert();
};
export default cleanUpGsapAnimation;
