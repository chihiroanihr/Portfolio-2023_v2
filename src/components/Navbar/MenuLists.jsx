import { useMemo, forwardRef } from "react";
import { menuListsData } from "@data";

// Forward Ref from Parent Component
const MenuLists = forwardRef((props, ref) => {
  // Retrieve Props
  const classes = props.className;
  const isMenuOpen = props.isMenuOpen;
  const onClick = props.onClick;

  // Memoize menuLists array to avoid getting created on every re-render
  const memoizedMenuListsData = useMemo(() => menuListsData, []);

  return (
    <ul
      ref={ref}
      className={`${classes} flex flex-col transition-opacity ${
        isMenuOpen
          ? "cursor-pointer opacity-100 duration-500 delay-200"
          : "pointer-events-none opacity-0 duration-200"
      }`}
    >
      {memoizedMenuListsData.map(({ id, href }) => (
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

// Default Props
MenuLists.defaultProps = { classes: "", isMenuOpen: false, onClick: null };

export default MenuLists;
