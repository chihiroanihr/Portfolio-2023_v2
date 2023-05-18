import React, { useRef, useContext, useLayoutEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import {
  MenuBackground,
  MenuButton,
  MenuList,
  NavbarBrand,
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

  // ************************* CSS ************************* //
  const navbarLayoutStyle = clsx("w-screen", "h-20");
  const navbarBrandPositionStyle = clsx("absolute-position-center");
  const menuListPositionStyle = clsx("z-30", "fixed-position-center");
  const menuButtonPositionStyle = clsx(
    "z-40",
    "absolute top-1/2 -translate-y-1/2"
  );
  const menuBackgroundPositionStyle = clsx("z-20", "fixed");

  // ************************* JSX ************************* //
  return (
    <ToggleMenuProvider>
      <ScrollLockProvider handleScrollLock={handleScrollLock}>
        {/* Navbar (sticky) */}
        <nav className={clsx(className, navbarLayoutStyle)}>
          {/* ------ When Menu Closed (Navbar) ------ */}
          <div ref={navbarNodeRef} className="relative h-full">
            {/* Navbar Brand */}
            <NavbarBrand
              id="navbar-brand"
              className={navbarBrandPositionStyle}
            />

            {/* Menu Button */}
            <MenuButton id="menu-button" className={menuButtonPositionStyle} />
          </div>

          {/* ---------- When Menu Opened ---------- */}
          {/* Menu Background (hidden) */}
          <MenuBackground
            className={menuBackgroundPositionStyle}
            position="outView"
            parentRef={navbarNodeRef}
          />

          {/* Menu Lists (hidden) */}
          <MenuList
            ref={scrollLockTargetRef}
            className={menuListPositionStyle}
          />
        </nav>
      </ScrollLockProvider>
    </ToggleMenuProvider>
  );
};

export default React.memo(Navbar);
