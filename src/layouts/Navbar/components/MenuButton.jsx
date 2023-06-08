import { useContext } from "react";
import clsx from "clsx";
import { Button } from "@components";
import { ToggleMenuContext, ScrollLockContext } from "@contexts";
import { navbarStyle } from "@themes";

const MenuButton = ({ id, className }) => {
  console.log("[Render] @layouts/Navbar/MenuButton.jsx");

  // Retrieve States from Contexts
  const { isMenuOpen, handleToggleMenu } = useContext(ToggleMenuContext);
  const { handleScrollLock } = useContext(ScrollLockContext);

  // ************************* CSS ************************* //
  const menuButtonBorderColor =
    "after:border-coffee-600 dark:after:border-coffee-300";
  const hamburgerMenuLineColor = "bg-coffee-600 dark:bg-coffee-300";
  const hamburgerMenuLineThickness = "h-[3.8px]";

  // Menu Button Border Style
  const menuButtonStyle = clsx(
    // ------------- Wrapper ------------- //
    "scale-[0.6] sm:scale-[0.8]",
    navbarStyle.menuButton.wrapper,
    // ------------- Border ------------- //
    // position style
    "after:absolute after:left-1/2 after:top-1/2",
    "after:-ml-[43px] after:-mt-[43px]",
    // layout style
    navbarStyle.menuButton.border,
    "after:block after:content-['']",
    "after:rounded-full after:border-2 after:border-solid",
    // color style
    menuButtonBorderColor,
    // animation style
    isMenuOpen ? "after:opacity-100" : "after:opacity-0",
    "after:transition-opacity after:duration-500",
    "flex flex-col justify-between"
  );

  // Menu Button Hamburger Line Style
  const hamburgerLineStyle = clsx(
    "inline-block w-full rounded",
    hamburgerMenuLineColor,
    hamburgerMenuLineThickness
  );
  // Menu Button Individual Hamburger Line Styles
  const hamburgerFirstLineStyle = clsx(
    hamburgerLineStyle,
    isMenuOpen && "translate-y-[18px] rotate-45",
    "[transition:transform_500ms,background-color_700ms]", // dark mode transition
    "will-change-[background-color]"
  );
  const hamburgerSecondLineStyle = clsx(
    hamburgerLineStyle,
    isMenuOpen && "pointer-events-none translate-x-3/4 opacity-0",
    "[transition:transform_700ms,opacity_700ms,background-color_700ms]", // dark mode transition
    "will-change-[background-color]"
  );
  const hamburgerThirdLineStyle = clsx(
    hamburgerLineStyle,
    isMenuOpen && "-translate-y-[18px] -rotate-45",
    "[transition:transform_500ms,background-color_700ms]", // dark mode transition
    "will-change-[background-color]"
  );

  // ************************* JSX ************************* //
  return (
    <Button
      id={id}
      className={clsx(className, menuButtonStyle)}
      onClick={() => {
        handleToggleMenu();
        handleScrollLock();
      }}
    >
      <span className={hamburgerFirstLineStyle} />
      <span className={hamburgerSecondLineStyle} />
      <span className={hamburgerThirdLineStyle} />
    </Button>
  );
};

export default MenuButton;
