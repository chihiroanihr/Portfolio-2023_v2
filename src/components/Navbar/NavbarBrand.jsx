import { forwardRef } from "react";

const NavbarBrand = forwardRef(({ className }, ref) => {
  return (
    <div
      ref={ref}
      // ! "absolute" necessary to make nav brand position center relative to edges of the screen.
      className={`${className} flex flex-col sm:gap-[4px] gap-[2px]
      text-center text-coffee-600 dark:text-coffee-300`}
    >
      <p className="font-cabin-sans text-xs tracking-widest">
        Web Developer + Designer
      </p>
      <p className="font-autography-cursive xs:text-3xl text-2xl tracking-wide">
        Rhina Kim
      </p>
    </div>
  );
});

// !! Assign the default value to prevent errors when they are not passed by the parent component.
NavbarBrand.defaultProps = { className: "" };

export default NavbarBrand;
