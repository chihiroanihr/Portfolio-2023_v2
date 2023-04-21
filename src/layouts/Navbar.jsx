import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  forwardRef,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBodyScrollLock } from "@utils";
import {
  MenuButton,
  MenuLists,
  MenuBackground,
  NavbarBrand,
} from "@components";

gsap.registerPlugin(ScrollTrigger);

// !! forwardRef expects a function that accepts props and ref as arguments, thus destructuring is a recommended approach
const Navbar = forwardRef(({ playAnimation, className }, ref) => {
  // =============================== Landing Animations =============================== //
  // Child references
  const navbarBrandRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navbarBrandTween = useRef(null);

  // Update Animation when playAnimation is triggered
  useEffect(() => {
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;

    // Register animations to the timeline
    ref.current = gsap
      .timeline({ defaults: { clearProps: true } })
      // Add all animations within textSectionRef scope
      .from(navbarBrandRef.current, {
        id: "navbar-brand",
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "inOut",
        // Allow scroll up animations
        onComplete: function () {
          navbarBrandTween.current = gsap.to(navbarBrandRef.current, {
            y: -100,
            opacity: 0,
            scrollTrigger: {
              id: "home-navbar-brand-on-scroll",
              trigger: navbarBrandRef.current,
              scrub: 2,
              start: "20% top",
              end: "200% top",
              // markers: { startColor: "blue", endColor: "blue" },
            },
          });
        },
      })
      .from(
        menuButtonRef.current,
        {
          id: "menu-button",
          y: -10,
          opacity: 0,
          duration: 1,
          ease: "inOut",
        },
        ">-0.5"
      );

    // Clean animation: prevent continuing to execute even after component unmounted
    return () => {
      navbarBrandTween.current?.scrollTrigger?.kill();
      navbarBrandTween.current?.kill();
      ref.current?.kill();
    };
  }, [playAnimation]);

  // =============================== Toggle Menu Button =============================== //
  // Set Menu Oepn State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle Menu Button
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [isMenuOpen]);

  // ================================== Scroll Lock ================================== //
  // Reference to activate scroll lock
  const scrollLockTargetRef = useRef(null);
  // Set Scroll Lock State
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  // Activate Scroll Lock (handle state change when clicked)
  const handleScrollLock = useCallback(() => {
    setIsScrollLocked((prev) => !prev);
  }, [isScrollLocked]);
  // Function to execute scroll lock on the target reference
  useBodyScrollLock({
    isScrollLocked,
    scrollLockTargetRef,
  });

  return (
    // Navbar (sticky)
    <nav className={`${className} w-screen h-20`}>
      {/* ---------- When Menu Closed ---------- */}
      <div className="h-full flex justify-end items-center">
        {/* Navbar Brand */}
        <NavbarBrand ref={navbarBrandRef} className="absolute w-full mx-auto" />

        {/* Menu Button */}
        <MenuButton
          ref={menuButtonRef}
          isMenuOpen={isMenuOpen}
          onClick={() => {
            handleToggleMenu();
            handleScrollLock();
          }}
          className="z-40 relative mr-2 md:mr-5 scale-[0.5] sm:scale-[0.7]"
        />
      </div>

      {/* ---------- When Menu Opened ---------- */}
      <div>
        {/* Menu Background (hidden) */}
        <MenuBackground
          isMenuOpen={isMenuOpen}
          className="z-20 fixed -top-[50px] -right-[50px] w-[100px] h-[100px]"
        />

        {/* Menu Lists (hidden) */}
        <MenuLists
          ref={scrollLockTargetRef}
          isMenuOpen={isMenuOpen}
          onClick={() => {
            handleToggleMenu();
            handleScrollLock();
          }}
          className="z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </nav>
  );
});

// !! Assign the default value to prevent errors when they are not passed by the parent component.
Navbar.defaultProps = {
  playAnimation: false,
  className: "",
};

export default Navbar;
