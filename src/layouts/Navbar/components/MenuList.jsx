import { useContext, useRef, useMemo, useLayoutEffect } from "react";
import clsx from "clsx";
import { Link, ScrollLockWrapper } from "@components";
import { ToggleMenuContext, ScrollLockContext } from "@contexts";
import { menuListData } from "@data";
import { useMenuListAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const MenuList = ({ className }) => {
  console.log("[Render] [src] @layouts/Navbar/MenuList.jsx");

  // Node Reference
  const menuListNodeRef = useRef(null);

  // Retrieve States from Contexts
  const { isMenuOpen, handleToggleMenu } = useContext(ToggleMenuContext);
  const { handleScrollLock } = useContext(ScrollLockContext);

  // Update Animation
  useLayoutEffect(() => {
    if (!isMenuOpen) return;
    console.log("[LOG] (MenuList.jsx) Animation Started");

    // Retrieve Animation
    const animation = useMenuListAnimation(menuListNodeRef.current);

    // Clean Up Animation
    return () => cleanUpGsapAnimation(animation);
  }, [isMenuOpen]);

  // ************************* CSS ************************* //
  const menuListItemsTextColor = "text-chocolate/90 dark:text-coffee-100";
  const menuListItemsTextFont = "font-limelight-cursive";

  const menuListItemsFontStyle = clsx(
    menuListItemsTextColor,
    menuListItemsTextFont,
    "sm:text-[30px] xs:text-[25px] text-[20px]",
    "uppercase",
    "tracking-widest",
    "xl:font-semibold"
  );

  // Menu List Bar Animation Style
  const initBarStyleBefore = clsx(
    "before:content-['']",
    "before:absolute",
    "before:top-1/2",
    "before:left-0",
    "before:w-0 before:h-[2px]",
    "before:bg-chocolate/80 dark:before:bg-coffee-100"
  );
  const initBarStyleAfter = clsx(
    "after:content-['']",
    "after:absolute",
    "after:top-1/2",
    "after:right-0",
    "after:w-0 after:h-[1.5px]",
    "after:bg-chocolate/80 dark:after:bg-coffee-100"
  );
  const hoverBarStyleBefore = clsx(
    "hover:before:w-full",
    "hover:before:[transition:width_0.3s_ease-in-out]"
  );
  const hoverBarStyleAfter = clsx(
    "hover:after:w-full",
    "hover:after:bg-transparent dark:hover:after:bg-transparent",
    "after:[transition:width_0.3s_ease-in-out]"
  );

  // ************************* JSX ************************* //
  // Memoize the mapped menuListData array
  const memoizedMenuListItems = useMemo(
    () =>
      menuListData.map(({ name, href, offset }) => {
        const disabled = !href || href.trim().length === 0;

        return (
          <li key={name} id="menu-list-item" className="list-none text-center">
            <Link
              className={clsx(
                "relative",
                "inline-block",
                "p-3",
                menuListItemsFontStyle,
                disabled && "opacity-40 line-through"
              )}
              href={href}
              disabled={disabled}
              offset={offset}
              onClick={() => {
                handleToggleMenu();
                handleScrollLock();
              }}
            >
              <span
                className={clsx(
                  "relative",
                  initBarStyleBefore,
                  hoverBarStyleBefore,
                  initBarStyleAfter,
                  hoverBarStyleAfter
                )}
              >
                {name}
              </span>
            </Link>
          </li>
        );
      }),
    [menuListData]
  );

  return (
    <ScrollLockWrapper
      ref={menuListNodeRef}
      className={clsx(
        className,
        "w-full h-full",
        isMenuOpen
          ? "opacity-100 duration-500 delay-200"
          : "opacity-0 pointer-events-none duration-200",
        "transition-opacity",
        "flex flex-col justify-center items-center"
      )}
    >
      {memoizedMenuListItems}
    </ScrollLockWrapper>
  );
};

export default MenuList;
