import { useRef, useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { ToggleMenuContext } from "@contexts";
import { navbarStyle } from "@themes";

const MenuBackground = ({ className, position = "outView" }) => {
  console.log("[Render] @layouts/Navbar/MenuBackground.jsx");

  // Node reference
  const menuBackgroundNodeRef = useRef(null);

  // State for opened menu background style
  const [menuBackgroundOpenedStyle, setMenuBackgroundOpenedStyle] = useState({
    translateX: 0,
    translateY: 0,
    scale: 1,
  });

  // Retrieve state from context
  const { isMenuOpen } = useContext(ToggleMenuContext);

  // Calculate layout size of expanded menu background
  const calculateValues = () => {
    const menuBackgroundNode = menuBackgroundNodeRef.current;

    // Calculate width / height of view
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Calculate width / height of menu background
    const menuBackgroundWidth = parseInt(
      window.getComputedStyle(menuBackgroundNode).width,
      10
    );
    const menuBackgroundHeight = parseInt(
      window.getComputedStyle(menuBackgroundNode).height,
      10
    );

    // Calculate position of the circle
    const offsetWidth = parseInt(
      window.getComputedStyle(menuBackgroundNode).right, // convert string "px" into number
      10
    );
    const offsetHeight = parseInt(
      window.getComputedStyle(menuBackgroundNode).top,
      10
    );

    // Offsets added to center the circle within the view
    const newOffsetX = -(w / 2 - menuBackgroundWidth / 2 - offsetWidth);
    const newOffsetY = h / 2 - menuBackgroundHeight / 2 - offsetHeight;

    // Calculate desired scale of menu background when opened
    const radius = Math.sqrt(h ** 2 + w ** 2);
    const newScale = radius / (menuBackgroundWidth / 2) / 2;
    //+ 0.1; // Add '.1' to compensate for Safari sub pixel blur issue

    // Register all computed values
    setMenuBackgroundOpenedStyle({
      translateX: newOffsetX,
      translateY: newOffsetY,
      scale: newScale,
    });
  };

  // 60fps animation on Resize
  const resizeHandler = () => {
    window.requestAnimationFrame(() => {
      calculateValues();
    });
  };

  useEffect(() => {
    if (!menuBackgroundNodeRef.current) return;

    // Initial calculation
    calculateValues();

    // Handle resize when view resizes
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // ************************* CSS ************************* //
  const menuBackgroundColor = "bg-coffee-300 dark:bg-coffee-700";

  // OutView Initial Background Style
  const outViewMenuBacktroundStyle = clsx(
    "pointer-events-none",
    // position & layout style
    navbarStyle.menuBackground.outView,
    "rounded-full",
    // color style
    menuBackgroundColor
  );

  // OutView Expand Background Style
  const outViewMenuBackgroundExpandStyle = {
    transform: clsx({
      [isMenuOpen
        ? `translate(${menuBackgroundOpenedStyle.translateX}px, ${menuBackgroundOpenedStyle.translateY}px) scale(${menuBackgroundOpenedStyle.scale})`
        : "translate(0, 0) scale(0)"]: isMenuOpen,
    }),
    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "transform",
  };

  // InView Initial Background Style
  const inViewMenuBackgroundStyle = clsx(
    "pointer-events-none",
    // position & layout style
    navbarStyle.menuBackground.inView,
    `top-[8px]`, // custom top height
    "rounded-full",
    // color style
    menuBackgroundColor
  );

  // InView Expand Background Style
  const inViewMenuBackgroundExpandStyle = {
    opacity: isMenuOpen ? 100 : 0,
    transform: clsx({
      [isMenuOpen
        ? `translate(${menuBackgroundOpenedStyle.translateX}px, ${menuBackgroundOpenedStyle.translateY}px) scale(${menuBackgroundOpenedStyle.scale})`
        : "translate(0, 0) scale(0)"]: isMenuOpen,
    }),
    transition: isMenuOpen
      ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s linear"
      : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19)",
    willChange: "transform, opacity",
  };

  // ************************* JSX ************************* //
  return (
    <div
      ref={menuBackgroundNodeRef}
      className={clsx(className, [
        position === "inView"
          ? inViewMenuBackgroundStyle
          : outViewMenuBacktroundStyle,
      ])}
      style={
        position === "inView"
          ? inViewMenuBackgroundExpandStyle
          : outViewMenuBackgroundExpandStyle
      }
    />
  );
};

export default MenuBackground;

// Reference: Dannie Vinther
// https://codepen.io/dannievinther/pen/JrdPoM?editors=0110
