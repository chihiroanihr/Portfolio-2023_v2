import { useContext } from "react";
import { ToggleMenuContext } from "@contexts";

const MenuBackground = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Toggle Menu State
  const { isMenuOpen } = useContext(ToggleMenuContext);

  return (
    <div
      className={`${classes} rounded-full
      bg-coffee-300 dark:bg-coffee-700 ${
        isMenuOpen ? "xl:scale-[50] md:scale-[35] scale-[20]" : "scale-[0]"
      } transition-transform duration-700`}
    ></div>
  );
};

// Default Props
MenuBackground.defaultProps = { classes: "" };

export default MenuBackground;
