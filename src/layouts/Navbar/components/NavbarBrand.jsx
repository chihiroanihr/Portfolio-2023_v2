import clsx from "clsx";

const NavbarBrand = ({ id, className }) => {
  console.log("[Render] @layouts/Navbar/NavbarBrand.jsx");

  // ************************* CSS ************************* //
  const navbarBrandTextColor = "text-coffee-600 dark:text-coffee-300";

  const navbarBrandFirstTextStyle = clsx(
    navbarBrandTextColor,
    "font-cabin-sans",
    "text-[12px]",
    "tracking-widest"
  );
  const navbarBrandSecondTextStyle = clsx(
    navbarBrandTextColor,
    "font-autography-cursive",
    "xs:text-3xl text-2xl",
    "tracking-wide"
  );

  // ************************* JSX ************************* //
  return (
    <div
      id={id}
      className={clsx(
        className,
        "text-center",
        "flex flex-col",
        "sm:gap-[4px] gap-[2px]"
      )}
    >
      <p className={navbarBrandFirstTextStyle}>Web Developer + Designer</p>
      <p className={navbarBrandSecondTextStyle}>Rhina Kim</p>
    </div>
  );
};

export default NavbarBrand;
