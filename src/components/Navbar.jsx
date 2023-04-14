import React, { useRef, useState, useEffect, forwardRef } from "react";
import gsap from "gsap";
import MenuButton from "./MenuButton";
import Blob from "./Blob";

const Navbar = forwardRef((props, ref) => {
  // !! forwardRef expects a function that accepts props and ref as arguments
  // Thus destructuring is a recommended approach
  const { playAnimation } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scoped reference containing child elements that you want to animate
  const menuBarRef = useRef(null);
  const navbarBrandRef = useRef(null);
  const childComponentRef = useRef(null);

  // Update Animation when playAnimation is triggered
  useEffect(() => {
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;

    let context = gsap.context(() => {
      // Register animations to the timeline
      ref.current = gsap
        .timeline()
        // Add all animations within textSectionRef scope
        .from(navbarBrandRef.current, {
          y: -10,
          opacity: 0,
          duration: 1,
          ease: "inOut",
          clearProps: "all",
        })
        .from(
          childComponentRef.current,
          {
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

    // (Animation cleaning will be done in parent component)
  }, [playAnimation]);

  return (
    <>
      <nav className="z-30 fixed top-0 l-0 r-0 w-screen h-20">
        <div ref={menuBarRef} className="flex justify-end items-center h-full">
          {/* Navbar Brand */}
          <div
            ref={navbarBrandRef}
            className="absolute flex flex-col gap-1 w-full mx-auto text-center text-coffee-600 dark:text-coffee-300"
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
            onClick={handleMenuClick}
            isMenuOpen={isMenuOpen}
            className="z-40 relative scale-[0.5] sm:scale-[0.7] mr-2 md:mr-5"
          />
        </div>

        {/* Menu Background */}
        {/* <Blob
          className={`z-20 fixed -top-[150px] -right-[80px] xl:-top-[150px] xl:-right-[200px]
          transition-all duration-700 ease-linear
          ${
            isMenuOpen
              ? "w-screen h-screen scale-[4.5] md:scale-[4] xl:scale-[4.5] xxl:scale-[4]"
              : "w-0 h-0"
          }`}
        /> */}
        <div
          className={`z-20 fixed -top-[50px] -right-[50px] w-[100px] h-[100px] rounded-full
          transition-transform duration-700 bg-coffee-300 dark:bg-coffee-700
          ${
            isMenuOpen ? "xl:scale-[50] md:scale-[35] scale-[20]" : "scale-[0]"
          }`}
        ></div>
      </nav>

      {/* Menu Lists */}
      <ul
        className={`z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity
              ${
                isMenuOpen
                  ? "cursor-pointer opacity-100 duration-500 delay-200"
                  : "pointer-events-none opacity-0 duration-200"
              }`}
      >
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 dark:text-coffee-100 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            Top
          </a>
        </li>
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 dark:text-coffee-100 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            About
          </a>
        </li>
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 dark:text-coffee-100 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            Service
          </a>
        </li>
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 dark:text-coffee-100 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
});

export default Navbar;
