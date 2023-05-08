import { useContext } from "react";
import { ToggleMenuContext } from "@contexts";
import { colorStyle } from "@constants";

const MenuBackground = (props) => {
  console.log("[Render] @layouts/Navbar/MenuBackground.jsx");

  // Retrieve Props
  const classes = props.className;

  // Retrieve Toggle Menu State
  const { isMenuOpen } = useContext(ToggleMenuContext);

  return (
    <div
      className={`${classes} rounded-full w-[100px] h-[100px] 
      ${colorStyle.menuBackgroundColor} 
      ${
        isMenuOpen ? "xl:scale-[50] md:scale-[35] scale-[20]" : "scale-[0]"
      } transition-transform duration-700`}
    />
  );
};

export default MenuBackground;
