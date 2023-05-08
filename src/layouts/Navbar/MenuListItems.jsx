import { useContext, useRef } from "react";
import { Link } from "@components";
import { ScrollLockContext, ToggleMenuContext } from "@contexts";
import { colorStyle } from "@constants";
import { menuListItemsData } from "@data";
import { useBodyScrollLock } from "@utils";

// Forward Ref from Parent Component
const MenuListItems = (props) => {
  console.log("[Render] @layouts/Navbar/MenuListItems.jsx");

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

  return (
    <ul
      ref={scrollLockTargetRef}
      className={`${classes} flex flex-col transition-opacity ${
        isMenuOpen
          ? "cursor-pointer opacity-100 duration-500 delay-200"
          : "pointer-events-none opacity-0 duration-200"
      }`}
    >
      {menuListItemsData.map(({ id, href }) => (
        <li key={id} className="text-center list-none">
          <Link
            href={href}
            onClick={() => {
              handleToggleMenu();
              handleScrollLock();
            }}
            className={`block p-3 ${colorStyle.menuListItemsTextColor}
            font-default-sans font-semibold tracking-widest uppercase no-underline`}
          >
            {id}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuListItems;
