import clsx from "clsx";

const Logo = ({ item, className }) => {
  return (
    <img
      className={clsx(
        className,
        "inline-block",
        "md:h-[50px] xs:h-[40px] h-[20px]",
        "sepia-[.3]"
      )}
      src={item}
    />
  );
};

export default Logo;
