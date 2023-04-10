import React from "react";

const MenuButton = ({ onClick, isMenuOpen, color, className }) => {
  return (
    <div
      className={`${className}
      relative flex flex-col justify-between w-[50px] h-10 cursor-pointer transition-all duration-500 
      after:absolute after:top-1/2 after:left-1/2 after:w-[84px] after:h-[84px] after:-mt-[43px] after:-ml-[43px]
      after:block after:content-[''] after:rounded-full after:border-solid after:border-2 
      after:border-coffee-300
      after:transition-opacity after:duration-500 ${
        isMenuOpen ? "after:opacity-100" : "after:opacity-0"
      }`}
      onClick={onClick}
    >
      <span
        className={`bg-coffee-600 dark:bg-coffee-300 inline-block w-full h-1 rounded transition-transform duration-500 ${
          isMenuOpen ? "translate-y-[18px] rotate-45" : ""
        }`}
      ></span>
      <span
        className={`bg-coffee-600 dark:bg-coffee-300 inline-block w-full h-1 rounded [transition:transform_700ms,opacity_700ms] ${
          isMenuOpen ? "translate-x-3/4 opacity-0 pointer-events-none" : ""
        }`}
      ></span>
      <span
        className={`bg-coffee-600 dark:bg-coffee-300 inline-block w-full h-1 rounded transition-transform duration-500 ${
          isMenuOpen ? "-translate-y-[18px] -rotate-45" : ""
        }`}
      ></span>
    </div>
  );
};

export default MenuButton;
