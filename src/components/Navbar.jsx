import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Blob from "./Blob";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="z-30 fixed top-0 l-0 r-0 w-screen h-20">
        <div className="flex justify-end items-center h-full">
          {/* Navbar Brand */}
          <div className="absolute flex flex-col gap-1 w-full mx-auto text-center text-coffee-600 dark:text-coffee-300">
            <p className="font-cabin-sans text-xs tracking-widest">
              Web Developer + Designer
            </p>
            <p className="font-autography-cursive text-3xl tracking-wide">
              Rhina Kim
            </p>
          </div>

          {/* Menu Button */}
          <MenuButton
            className="z-40 relative scale-[0.5] sm:scale-[0.7] mr-2 md:mr-5"
            onClick={handleMenuClick}
            isMenuOpen={isMenuOpen}
          />
        </div>

        {/* Menu Background */}
        <Blob
          className={`z-20 fixed -top-14 -right-20 xl:-top-36 xl:-right-44 transition-all duration-700 ease-in
          ${
            isMenuOpen
              ? "w-screen h-screen scale-[4] md:scale-[3.5] xl:scale-[4] xxl:scale-[3.5]"
              : "w-0 h-0"
          }`}
        />
      </nav>

      {/* Menu Lists */}
      <ul
        className={`z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity
              ${
                isMenuOpen
                  ? "cursor-pointer opacity-100 duration-500 delay-500"
                  : "pointer-events-none opacity-0 duration-200"
              }`}
      >
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            Top
          </a>
        </li>
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            About
          </a>
        </li>
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            Service
          </a>
        </li>
        <li className="text-center list-none">
          <a
            href="#"
            className="block p-3 text-coffee-800 font-default-sans font-semibold tracking-widest uppercase no-underline"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
