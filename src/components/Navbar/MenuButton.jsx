import { useContext } from "react";
import { Button } from "@components";
import { ScrollLockContext, ToggleMenuContext } from "@contexts";

const MenuButton = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Toggle Menu State
  const { isMenuOpen, handleToggleMenu } = useContext(ToggleMenuContext);

  // Retrieve Scroll Lock State
  const { handleScrollLock } = useContext(ScrollLockContext);

  return (
    <Button
      className={`${classes} relative w-[50px] h-[40px] flex flex-col justify-between
        after:absolute after:top-1/2 after:left-1/2 after:w-[84px]
        after:h-[84px] after:-mt-[43px] after:-ml-[43px]
        after:block after:content-[''] after:rounded-full after:border-solid after:border-2
        after:border-coffee-600 dark:after:border-coffee-300 ${
          isMenuOpen ? "after:opacity-100" : "after:opacity-0"
        } after:transition-opacity after:duration-500`}
      onClick={() => {
        handleToggleMenu();
        handleScrollLock();
      }}
    >
      <span
        className={`bg-coffee-600 dark:bg-coffee-300 inline-block w-full h-1 rounded ${
          isMenuOpen ? "dark:bg-coffee-100 translate-y-[18px] rotate-45" : ""
        } [transition:transform_500ms,background_500ms]`}
      ></span>
      <span
        className={`bg-coffee-600 dark:bg-coffee-300 inline-block w-full h-1 rounded ${
          isMenuOpen
            ? "dark:bg-coffee-100 translate-x-3/4 opacity-0 pointer-events-none"
            : ""
        } [transition:transform_700ms,opacity_700ms,background_500ms]`}
      ></span>
      <span
        className={`bg-coffee-600 dark:bg-coffee-300 inline-block w-full h-1 rounded ${
          isMenuOpen ? "dark:bg-coffee-100 -translate-y-[18px] -rotate-45" : ""
        } [transition:transform_500ms,background_500ms]`}
      ></span>
    </Button>
  );
};

// Default Props
MenuButton.defaultProps = { classes: "" };

export default MenuButton;
