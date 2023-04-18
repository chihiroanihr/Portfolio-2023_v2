import React from "react";

const MenuBackground = ({ isMenuOpen, className }) => {
  return (
    <div
      className={`${className} rounded-full 
      transition-transform duration-700 bg-coffee-300 dark:bg-coffee-700 ${
        isMenuOpen ? "xl:scale-[50] md:scale-[35] scale-[20]" : "scale-[0]"
      }`}
    ></div>
  );
};

// !! Assign the default value to prevent errors when they are not passed by the parent component.
MenuBackground.defaultProps = { isMenuOpen: false, className: "" };

export default MenuBackground;
