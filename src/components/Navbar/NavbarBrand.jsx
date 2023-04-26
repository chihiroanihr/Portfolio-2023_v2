const NavbarBrand = (props) => {
  // Retrieve Props
  const classes = props.className;

  return (
    <div
      className={`${classes} flex flex-col sm:gap-[4px] gap-[2px]
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
};

// Default Props
NavbarBrand.defaultProps = { classes: "" };

export default NavbarBrand;
