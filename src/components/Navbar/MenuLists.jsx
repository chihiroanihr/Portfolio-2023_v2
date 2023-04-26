import { useMemo, useContext, useRef } from "react";
import { ScrollLockContext, ToggleMenuContext } from "@contexts";
import { useBodyScrollLock } from "@utils";
import { menuListsData } from "@data";

// Forward Ref from Parent Component
const MenuLists = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Toggle Menu State
  const { isMenuOpen, handleToggleMenu } = useContext(ToggleMenuContext);

  // DOM Reference to activate scroll lock
  const scrollLockTargetRef = useRef(null);
  // Retrieve Scroll Lock State
  const { isScrollLocked, handleScrollLock } = useContext(ScrollLockContext);
  // Function to execute scroll lock on the target reference
  useBodyScrollLock({
    isScrollLocked,
    scrollLockTargetRef,
  });

  // Memoize menuLists array to avoid getting created on every re-render
  const memoizedMenuListsData = useMemo(() => menuListsData, []);

  return (
    <ul
      ref={scrollLockTargetRef}
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
            onClick={() => {
              handleToggleMenu();
              handleScrollLock();
            }}
            className="block p-3 text-coffee-800 dark:text-coffee-100
            font-default-sans font-semibold tracking-widest uppercase no-underline"
          >
            {id}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Default Props
MenuLists.defaultProps = { classes: "" };

export default MenuLists;
