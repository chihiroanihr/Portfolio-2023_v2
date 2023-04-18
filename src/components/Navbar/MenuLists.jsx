import React, { useMemo, forwardRef } from "react";
import { menuLists } from "@constants/data";

const MenuLists = forwardRef(({ isMenuOpen, onClick, className }, ref) => {
  // Memoize menuLists array to avoid getting created on every re-render
  const memoizedMenuLists = useMemo(() => menuLists, []);

  return (
    <ul
      ref={ref}
      className={`${className} flex flex-col transition-opacity ${
        isMenuOpen
          ? "cursor-pointer opacity-100 duration-500 delay-200"
          : "pointer-events-none opacity-0 duration-200"
      }`}
    >
      {memoizedMenuLists.map(({ id, href }, index) => (
        <li key={id} className="text-center list-none">
          <a
            href={href}
            onClick={onClick}
            className="block p-3 text-coffee-800 dark:text-coffee-100
            font-default-sans font-semibold tracking-widest uppercase no-underline"
          >
            {id}
          </a>
        </li>
      ))}
    </ul>
  );
});

// !! Assign the default value to prevent errors when they are not passed by the parent component.
MenuLists.defaultProps = { isMenuOpen: false, onClick: null, className: "" };

export default MenuLists;
