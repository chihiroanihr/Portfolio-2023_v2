import clsx from "clsx";
import newImg from "@assets/images/new.png";

const NewTag = ({ id, src = newImg, width = 110 }) => {
  return (
    <img
      id={id}
      src={src}
      className={clsx(
        "prevent-select",
        "absolute",
        "-top-[5%] -right-[7%]",
        "rotate-[-10deg]",
        "opacity-80",
        "dark:invert",
        "dark:grayscale"
      )}
      width={width}
    />
  );
};

export default NewTag;
