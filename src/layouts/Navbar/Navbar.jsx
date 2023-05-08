import { useRef, useContext, useLayoutEffect } from "react";
import { gsap } from "gsap";
import {
  MenuBackground,
  MenuButton,
  MenuListItems,
  NavbarBrand,
} from "./index";
import {
  PlayAnimationContext,
  ScrollLockProvider,
  ToggleMenuProvider,
} from "@contexts";
import { positionStyle } from "@constants";
import { useNavbarAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

// Forward Ref from Parent Component
const Navbar = (props) => {
  console.log("[Render] @layouts/Navbar.jsx");

  // Retrieve Props
  const classes = props.className;
  const addToLandingTimeline = props.addToLandingTimeline;
  const animateIndex = props.animateIndex;

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM references
  const navbarRef = useRef(null);

  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (Navbar.jsx) Animation Started");

    const ctx = gsap.context(
      () => {
        const navbarTimeline = useNavbarAnimation();

        // Add timeline to parent component's timeline
        addToLandingTimeline(navbarTimeline, animateIndex);
      },
      // Scope
      navbarRef
    );

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (Navbar.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    // Navbar (sticky)
    <nav className={`${classes} w-screen h-20`}>
      <ScrollLockProvider>
        <ToggleMenuProvider>
          {/* ---------- When Menu Closed (Navbar) ---------- */}
          <div ref={navbarRef} className="relative h-full">
            {/* Navbar Brand */}
            <NavbarBrand
              id="navbar-brand"
              className={positionStyle.navbarBrandPosition}
            />

            {/* Menu Button */}
            <MenuButton
              id="menu-button"
              className={`z-40 ${positionStyle.menuButtonPosition}`}
            />
          </div>

          {/* -------------- When Menu Opened -------------- */}
          {/* Menu Background (hidden) */}
          <MenuBackground
            className={`z-20 ${positionStyle.menuBackgroundPosition}`}
          />

          {/* Menu Lists (hidden) */}
          <MenuListItems
            className={`z-30 ${positionStyle.menuListItemsPosition}`}
          />
        </ToggleMenuProvider>
      </ScrollLockProvider>
    </nav>
  );
};

export default Navbar;
