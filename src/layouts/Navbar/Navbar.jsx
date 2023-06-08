import React, { useRef, useContext, useLayoutEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import {
  MenuBackground,
  MenuButton,
  MenuList,
  NavbarBrand,
  NavbarLogo,
} from "./components";
import {
  PlayAnimationContext,
  ToggleMenuProvider,
  ScrollLockProvider,
} from "@contexts";
import { useBodyScrollLock } from "@utils";
import { useNavbarAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const Navbar = ({ className, addToLandingTimeline, animateIndex }) => {
  console.log("[Render] @layouts/Navbar.jsx");

  // Node references for animation
  const navbarNodeRef = useRef(null);
  const scrollLockTargetRef = useRef(null);
  const navbarTimelineRef = useRef(null);

  // Retrieve state from context
  const { playAnimation } = useContext(PlayAnimationContext);

  // Retrieve function from Custom Hook
  const { handleScrollLock } = useBodyScrollLock(scrollLockTargetRef);

  useLayoutEffect(() => {
    if (!playAnimation || !navbarNodeRef.current) return;
    console.log("[LOG] (Navbar.jsx) Animation Started");

    const ctx = gsap.context(
      () => {
        // Retrieve animation
        navbarTimelineRef.current = useNavbarAnimation();
      },
      // Scope
      navbarNodeRef
    );

    // Add timeline to parent component's timeline
    addToLandingTimeline(navbarTimelineRef.current, animateIndex);

    // Clean up animations
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (Navbar.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ************************* JSX ************************* //
  return (
    // Navbar (sticky)
    <nav className={clsx(className, "w-screen", "h-20")}>
      <ToggleMenuProvider>
        <ScrollLockProvider handleScrollLock={handleScrollLock}>
          {/* ------ When Menu Closed (Navbar) ------ */}
          <div ref={navbarNodeRef} className="relative w-full h-full">
            {/* Navbar Brand */}
            <NavbarBrand
              id="navbar-brand"
              className="absolute-position-center"
              defaultStyle={false}
            />

            {/* Navbar Logo */}
            <NavbarLogo id="navbar-logo" className="md:ml-[25px] ml-[10px]" />

            {/* Menu Button */}
            <MenuButton
              id="menu-button"
              className={clsx("z-40", "absolute top-1/2 -translate-y-1/2")}
            />
          </div>

          {/* ---------- When Menu Opened ---------- */}
          {/* Menu Background (hidden) */}
          <MenuBackground
            className={clsx("z-20", "fixed")}
            parentRef={navbarNodeRef}
          />
          {/* Menu Lists (hidden) */}
          <MenuList
            ref={scrollLockTargetRef}
            className={clsx("z-30", "fixed-position-center")}
          />
        </ScrollLockProvider>
      </ToggleMenuProvider>
    </nav>
  );
};

export default React.memo(Navbar);
