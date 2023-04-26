import React, { useRef, useContext, forwardRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MenuButton,
  MenuLists,
  MenuBackground,
  NavbarBrand,
} from "@components";
import {
  PlayAnimationContext,
  ScrollLockProvider,
  ToggleMenuProvider,
} from "@contexts";

gsap.registerPlugin(ScrollTrigger);

// Forward Ref from Parent Component
const Navbar = forwardRef((props, ref) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM references
  const navbarRef = useRef(null);
  // Gsap Scroll Tween reference
  const navbarBrandScrollTweenRef = useRef(null);

  // Allow scroll triggered animations on complete
  const allowNavbarBrandScrollAnim = () => {
    navbarBrandScrollTweenRef.current = gsap.to(".navbar-brand", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        id: "home-navbar-brand-on-scroll",
        // ! No need to assign trigger since its all the way to top
        scrub: 2,
        start: "top top",
        end: "+=200 top",
        // markers: { startColor: "blue", endColor: "blue" },
      },
    });
  };

  // Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;
    console.log("[LOG] (Navbar.jsx) Animation Started");

    let ctx = gsap.context(() => {
      // Register all animations within the scope to the timeline
      ref.current.timeline = gsap
        .timeline({ defaults: { clearProps: true } })
        .from(".navbar-brand", {
          id: "navbar-brand",
          y: -10,
          opacity: 0,
          duration: 1,
          ease: "inOut",
          // Allow scroll up animations on complete
          onComplete: allowNavbarBrandScrollAnim,
        })
        .from(
          ".menu-button",
          {
            id: "menu-button",
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "inOut",
          },
          ">-0.5"
        );
      // Scope
      navbarRef;
    });

    // Clean Up Animations
    return () => {
      ctx.revert();
      console.log("[LOG] (Navbar.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    // Navbar (sticky)
    <nav ref={navbarRef} className={`${classes} w-screen h-20`}>
      <ScrollLockProvider>
        <ToggleMenuProvider>
          {/* ---------- When Menu Closed ---------- */}
          <div className="h-full flex justify-end items-center">
            {/* Navbar Brand */}
            <NavbarBrand
              className="navbar-brand
          absolute w-full mx-auto"
            />

            {/* Menu Button */}
            <MenuButton
              className="menu-button
          z-40 relative mr-2 md:mr-5 scale-[0.5] sm:scale-[0.7]"
            />
          </div>

          {/* ---------- When Menu Opened ---------- */}
          <div>
            {/* Menu Background (hidden) */}
            <MenuBackground className="z-20 fixed -top-[50px] -right-[50px] w-[100px] h-[100px]" />

            {/* Menu Lists (hidden) */}
            <MenuLists className="z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </ToggleMenuProvider>
      </ScrollLockProvider>
    </nav>
  );
});

// Default Props
Navbar.defaultProps = { classes: "" };

export default Navbar;
