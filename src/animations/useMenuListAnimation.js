import gsap from "gsap";

function useMenuListAnimation(scopeNode) {
  return gsap.context(() => {
    gsap.from("#menu-list-item", {
      id: "navbar-menu-list-animation",
      x: 200,
      y: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out",
      clearProps: true,
    });
  }, scopeNode);
}

export default useMenuListAnimation;
