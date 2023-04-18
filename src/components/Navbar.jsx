import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
  forwardRef,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBodyScrollLock } from "@utils";
import MenuButton from "./MenuButton";
import { menuLists } from "@constants/data";

gsap.registerPlugin(ScrollTrigger);

// !! forwardRef expects a function that accepts props and ref as arguments, thus destructuring is a recommended approach
const Navbar = forwardRef(({ playAnimation, className }, ref) => {
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
          id: "navbar-brand",
          y: -10,
          opacity: 0,
          duration: 1,
          ease: "inOut",
          clearProps: "all",
        })
        .from(
          childComponentRef.current,
          {
            id: "menu-button",
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "inOut",
            clearProps: "all",
          },
          ">-0.5"
        );
    }, menuBarRef);

    // Clean animation: prevent continuing to execute even after component unmounted
    return () => context.revert();
  }, [playAnimation]);

  // Navbar Brand Animation when user Scrolls Up
  useEffect(() => {
    // If navbar brand ref does not exist then skip
    if (!navbarBrandRef.current) return;

    // Register animation on scroll
    gsap.set(navbarBrandRef.current, { clearProps: true });
    gsap.fromTo(
      navbarBrandRef.current,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          id: "home-navbar-brand-on-scroll",
          trigger: navbarBrandRef.current,
          toggleActions: "play pause reverse reset",
          scrub: 2,
          start: "20% top",
          end: "200% top",
          markers: { startColor: "blue", endColor: "blue" },
        },
      }
    );

    // Clean scroll trigger animation when unmounted
    return () =>
      ScrollTrigger.getById("home-navbar-brand-on-scroll").kill(true);
  }, []);

  // Set Menu Oepn State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle Menu Button
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [isMenuOpen]);
  // Close Menu Button
  const handleCloseMenu = () => setIsMenuOpen(false);

  // Reference to activate scroll lock
  const scrollLockTargetRef = useRef(null);
  // Set Scroll Lock State
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  // Activate Scroll Lock (handle state change when clicked)
  const handleScrollLock = useCallback(() => {
    setIsScrollLocked((prev) => !prev);
  }, [isScrollLocked]);
  // Function to execute scroll lock on the target reference
  useBodyScrollLock({
    isScrollLocked,
    scrollLockTargetRef,
  });

  // Memoize menuLists array to avoid getting created on every re-render
  const memoizedMenuLists = useMemo(() => menuLists, []);

  return (
    // Navbar (sticky)
    <nav className={`${className} w-screen h-20`}>
      {/* When Menu Closed */}
      <div ref={menuBarRef} className="h-full flex justify-end items-center">
        {/* Navbar Brand */}
        <div
          ref={navbarBrandRef}
          // ! "absolute" necessary to make nav brand position center relative to edges of the screen.
          className="absolute w-full mx-auto flex flex-col gap-1
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
          className="z-40 relative mr-2 md:mr-5 scale-[0.5] sm:scale-[0.7]"
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
          {memoizedMenuLists.map(({ id, href }, index) => (
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
});

// !! Assign the default value to prevent errors when they are not passed by the parent component.
Navbar.defaultProps = {
  playAnimation: false,
  className: "",
};

export default Navbar;
