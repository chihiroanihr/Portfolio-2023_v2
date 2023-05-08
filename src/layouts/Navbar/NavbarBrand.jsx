import { colorStyle } from "@constants";

const NavbarBrand = (props) => {
  console.log("[Render] @layouts/Navbar/NavbarBrand.jsx");

  // Retrieve Props
  const id = props.id;
  const classes = props.className;

  return (
    <div
      id={id}
      className={`${classes} flex flex-col sm:gap-[4px] gap-[2px]
      text-center ${colorStyle.navbarBrandTextcolor}`}
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

export default NavbarBrand;
