import { useContext } from "react";
import { Button } from "@components";
import { ScrollLockContext, ToggleMenuContext } from "@contexts";
import { colorStyle } from "@constants";

const MenuButton = (props) => {
  console.log("[Render] @layouts/Navbar/MenuButton.jsx");

  // Retrieve Props
  const id = props.id;
  const classes = props.className;

  // Retrieve Toggle Menu State
  const { isMenuOpen, handleToggleMenu } = useContext(ToggleMenuContext);

  // Retrieve Scroll Lock State
  const { handleScrollLock } = useContext(ScrollLockContext);

  return (
    <Button
      id={id}
      className={`${classes} w-[50px] h-[40px] sm:scale-[0.7] scale-[0.5]
        after:absolute after:top-1/2 after:left-1/2 after:-mt-[43px] after:-ml-[43px]
        after:w-[84px] after:h-[84px]
        after:block after:content-[''] after:rounded-full after:border-solid after:border-2
        ${colorStyle.menuButtonBorderColor}
        ${
          isMenuOpen ? "after:opacity-100" : "after:opacity-0"
        } after:transition-opacity after:duration-500
        flex flex-col justify-between`}
      onClick={() => {
        handleToggleMenu();
        handleScrollLock();
      }}
    >
      <span
        className={`${
          colorStyle.menuButtonColor
        } inline-block w-full h-1 rounded ${
          isMenuOpen ? "translate-y-[18px] rotate-45" : ""
        } [transition:transform_500ms,background_500ms]`}
      ></span>
      <span
        className={`${
          colorStyle.menuButtonColor
        } inline-block w-full h-1 rounded ${
          isMenuOpen ? "translate-x-3/4 opacity-0 pointer-events-none" : ""
        } [transition:transform_700ms,opacity_700ms,background_500ms]`}
      ></span>
      <span
        className={`${
          colorStyle.menuButtonColor
        } inline-block w-full h-1 rounded ${
          isMenuOpen ? "-translate-y-[18px] -rotate-45" : ""
        } [transition:transform_500ms,background_500ms]`}
      ></span>
    </Button>
  );
};

export default MenuButton;
