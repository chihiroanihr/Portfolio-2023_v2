import {
  useContext,
  useMemo,
  useLayoutEffect,
  useRef,
  forwardRef,
} from "react";
import clsx from "clsx";
import { Link } from "@components";
import { ToggleMenuContext, ScrollLockContext } from "@contexts";
import { menuListData } from "@data";
import { useMenuListAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const MenuList = forwardRef(({ className }, ref) => {
  console.log("[Render] @layouts/Navbar/MenuList.jsx");

  // Node Reference for Animation
  const menuListNodesRefs = useRef([]);

  // Retrieve States from Contexts
  const { isMenuOpen, handleToggleMenu } = useContext(ToggleMenuContext);
  const { handleScrollLock } = useContext(ScrollLockContext);

  // Update Animation
  useLayoutEffect(() => {
    if (!isMenuOpen) return;
    console.log("[LOG] (MenuList.jsx) Animation Started");

    // Retrieve Animation
    const animation = useMenuListAnimation(menuListNodesRefs.current);

    // Clean Up Animation
    return () => {
      cleanUpGsapAnimation(animation);
      console.log("[LOG] (MenuList.jsx) Animation Killed");
    };
  }, [isMenuOpen]);

  // ************************* CSS ************************* //
  const menuListItemsTextColor = "text-coffee-800 dark:text-coffee-100";
  const menuListItemsTextFont = "font-default-sans";

  const menuListItemsFontStyle = clsx(
    menuListItemsTextColor,
    menuListItemsTextFont,
    "font-semibold tracking-widest uppercase no-underline"
  );

  // ************************* JSX ************************* //
  // Memoize the mapped menuListData array
  const memoizedMenuListItems = useMemo(
    () =>
      menuListData.map(({ id, href }, index) => (
        <li
          key={id}
          id={id}
          className="list-none text-center"
          ref={(el) => (menuListNodesRefs.current[index] = el)}
        >
          <Link
            href={href}
            onClick={() => {
              handleToggleMenu();
              handleScrollLock();
            }}
            className={clsx("block", "p-3", menuListItemsFontStyle)}
          >
            {id}
          </Link>
        </li>
      )),
    [menuListData]
  );

  return (
    <ul
      ref={ref}
      className={clsx(
        className,
        "flex flex-col",
        {
          "opacity-0 pointer-events-none duration-200": !isMenuOpen,
          "opacity-100 cursor-pointer duration-500 delay-200": isMenuOpen,
        },
        "transition-opacity"
      )}
    >
      {memoizedMenuListItems}
    </ul>
  );
});

export default MenuList;
