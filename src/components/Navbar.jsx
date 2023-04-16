import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  forwardRef,
} from "react";
import gsap from "gsap";
import { useBodyScrollLock } from "@utils";
import MenuButton from "./MenuButton";
import { menuLists } from "@constants/data";

// !! forwardRef expects a function that accepts props and ref as arguments, thus destructuring is a recommended approach
const Navbar = forwardRef(
  (
    { playAnimation, isMenuOpen, handleToggleMenu, handleCloseMenu, className },
    ref
  ) => {
    // Scoped reference containing child elements that you want to animate
    const menuBarRef = useRef(null);
    // Child references
    const navbarBrandRef = useRef(null);
    const childComponentRef = useRef(null);

    // Update Animation when playAnimation is triggered
    useEffect(() => {
      // If playAnimation is not triggered yet than skip
      if (!playAnimation) return;

      const context = gsap.context(() => {
        // Register animations to the timeline
        ref.current = gsap
          .timeline({ defaults: { clearProps: "all" } })
          // Add all animations within textSectionRef scope
          .from(navbarBrandRef.current, {
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "inOut",
          })
          .from(
            childComponentRef.current,
            {
              y: -10,
              opacity: 0,
              duration: 1,
              ease: "inOut",
            },
            ">-0.5"
          );
      }, menuBarRef);

      // Clean animation: prevent continuing to execute even after component unmounted
      return () => context.revert();
    }, [playAnimation]);

    // Set Scroll Lock State
    const [isScrollLocked, setIsScrollLocked] = useState(false);

    // Activate Scroll Lock
    const handleScrollLock = useCallback(() => {
      setIsScrollLocked((prev) => !prev);
    }, [isScrollLocked]);

    // Reference to activate scroll lock
    const scrollLockTargetRef = useRef(null);

    // Function to execute scroll lock on the target reference
    useBodyScrollLock({
      isScrollLocked,
      scrollLockTargetRef,
    });

    return (
      // Navbar
      <nav className={`${className} w-screen h-20`}>
        {/* When Menu Closed */}
        <div ref={menuBarRef} className="flex justify-end items-center h-full">
          {/* Navbar Brand */}
          <div
            ref={navbarBrandRef}
            className="absolute flex flex-col gap-1 w-full mx-auto
            text-center text-coffee-600 dark:text-coffee-300"
          >
            <p className="font-cabin-sans text-xs tracking-widest">
              Web Developer + Designer
            </p>
            <p className="font-autography-cursive xs:text-3xl text-2xl tracking-wide">
              Rhina Kim
            </p>
          </div>

          {/* Menu Button */}
          <MenuButton
            ref={childComponentRef}
            onClick={() => {
              handleToggleMenu();
              handleScrollLock();
            }}
            isMenuOpen={isMenuOpen}
            className="z-30 relative scale-[0.5] sm:scale-[0.7] mr-2 md:mr-5"
          />
        </div>

        {/* When Menu Opened */}
        <div>
          {/* Menu Background (hidden) */}
          <div
            className={`z-20 fixed -top-[50px] -right-[50px] w-[100px] h-[100px] rounded-full
            transition-transform duration-700 bg-coffee-300 dark:bg-coffee-700 ${
              isMenuOpen
                ? "xl:scale-[50] md:scale-[35] scale-[20]"
                : "scale-[0]"
            }`}
          ></div>

          {/* Menu Lists (hidden) */}
          <ul
            ref={scrollLockTargetRef}
            className={`z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            flex flex-col transition-opacity ${
              isMenuOpen
                ? "cursor-pointer opacity-100 duration-500 delay-200"
                : "pointer-events-none opacity-0 duration-200"
            }`}
          >
            {menuLists.map(({ id, href }, index) => (
              <li key={id} className="text-center list-none">
                <a
                  href={href}
                  onClick={() => {
                    handleCloseMenu();
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
        </div>
      </nav>
    );
  }
);

// !! Assign the default value to prevent errors when they are not passed by the parent component.
Navbar.defaultProps = {
  playAnimation: false,
  isMenuOpen: false,
  handleToggleMenu: null,
  handleCloseMenu: null,
  className: "",
};

export default Navbar;
