import { useRef, useState, useContext, useEffect, useCallback } from "react";
import clsx from "clsx";
import { ToggleMenuContext } from "@contexts";
import { useResizeObserverCallback } from "@hooks";
import { getWidth, getHeight, getTop, getRight } from "@utils";
import { navbarStyle } from "@themes";

const MenuBackground = ({ className, parentRef }) => {
  console.log("[Render] [src] @layouts/Navbar/MenuBackground.jsx");

  // Node reference
  const menuBackgroundNodeRef = useRef(null);

  // Retrieve state from context
  const { isMenuOpen } = useContext(ToggleMenuContext);

  // State for opened menu background style
  const [menuBackgroundOpenedStyle, setMenuBackgroundOpenedStyle] = useState({
    translateX: 0,
    translateY: 0,
    scale: 1,
  });

  // Calculate layout size of expanded menu background
  const calculateValues = useCallback(() => {
    if (!menuBackgroundNodeRef.current) return;

    const menuBackgroundNode = menuBackgroundNodeRef.current;

    // Calculate width / height of view
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Calculate width / height of menu background
    const menuBackgroundWidth = parseInt(getWidth(menuBackgroundNode), 10); // convert string "px" into number
    const menuBackgroundHeight = parseInt(getHeight(menuBackgroundNode), 10);

    // Calculate position of the circle
    const offsetWidth = parseInt(getRight(menuBackgroundNode), 10);
    const offsetHeight = parseInt(getTop(menuBackgroundNode), 10);

    // Offsets added to center the circle within the view
    const newOffsetX = -(w / 2 - menuBackgroundWidth / 2 - offsetWidth);
    const newOffsetY = h / 2 - menuBackgroundHeight / 2 - offsetHeight;

    // Calculate desired scale of menu background when opened
    const radius = Math.sqrt(h ** 2 + w ** 2);
    const newScale = radius / (menuBackgroundWidth / 2) / 2; //+ 0.1; // Add '.1' to compensate for Safari sub pixel blur issue

    // Register all computed values
    setMenuBackgroundOpenedStyle({
      translateX: newOffsetX,
      translateY: newOffsetY,
      scale: newScale,
    });
  }, []);

  // Re-calculate menuBackground width when navbar (parentRef) width changes
  useResizeObserverCallback(parentRef, calculateValues);

  useEffect(() => {
    if (!menuBackgroundNodeRef.current) return;

    // Initial calculation
    calculateValues();
  }, []);

  // ************************* CSS ************************* //
  const menuBackgroundColor = "bg-coffee-300 dark:bg-coffee-700";

  // Initial Background Style
  const menuBackgroundStyle = clsx(
    "pointer-events-none",
    // position & layout style
    navbarStyle.menuBackground,
    "rounded-full",
    // color style
    menuBackgroundColor
  );

  // Expand Background Style
  const menuBackgroundExpandStyle = {
    transform: clsx({
      [isMenuOpen
        ? `translate(${menuBackgroundOpenedStyle.translateX}px, ${menuBackgroundOpenedStyle.translateY}px) scale(${menuBackgroundOpenedStyle.scale})`
        : "translate(0, 0) scale(0)"]: isMenuOpen,
    }),
    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "transform",
  };

  // ************************* JSX ************************* //
  return (
    <div
      ref={menuBackgroundNodeRef}
      className={clsx(className, menuBackgroundStyle)}
      style={menuBackgroundExpandStyle}
    />
  );
};

export default MenuBackground;

// Reference: Dannie Vinther
// https://codepen.io/dannievinther/pen/JrdPoM?editors=0110
