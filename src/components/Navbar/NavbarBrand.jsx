import { useEffect, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavbarBrand = forwardRef(({ className }, ref) => {
  // Navbar Brand Animation when user Scrolls Up
  useEffect(() => {
    // If navbar brand ref does not exist then skip
    if (!ref.current) return;

    // Register animation on scroll
    gsap.set(ref.current, { clearProps: true });
    gsap.fromTo(
      ref.current,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          id: "home-navbar-brand-on-scroll",
          trigger: ref.current,
          toggleActions: "play pause reverse reset",
          scrub: 2,
          start: "20% top",
          end: "200% top",
          markers: { startColor: "blue", endColor: "blue" },
        },
      }
    );

    // Clean scroll trigger animation when unmounted
    return () =>
      ScrollTrigger.getById("home-navbar-brand-on-scroll").kill(true);
  }, []);

  return (
    <div
      ref={ref}
      // ! "absolute" necessary to make nav brand position center relative to edges of the screen.
      className={`${className} flex flex-col gap-1
      text-center text-coffee-600 dark:text-coffee-300`}
    >
      <p className="font-cabin-sans text-xs tracking-widest">
        Web Developer + Designer
      </p>
      <p className="font-autography-cursive xs:text-3xl text-2xl tracking-wide">
        Rhina Kim
      </p>
    </div>
  );
});

// !! Assign the default value to prevent errors when they are not passed by the parent component.
NavbarBrand.defaultProps = { className: "" };

export default NavbarBrand;
