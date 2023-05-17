import clsx from "clsx";

const Logo = ({ item }) => {
  return (
    <img
      className={clsx("inline-block", "md:h-[50px] xs:h-[30px] h-[20px]")}
      src={item}
    />
  );
};

export default Logo;
