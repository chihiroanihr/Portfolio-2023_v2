import clsx from "clsx";
import newTagLetterImg from "@assets/images/newtag/new-letter.png";
import newTagCircleImg from "@assets/images/newtag/new-circle.png";

const NewTag = ({ id, className }) => {
  // Option 1
  const newTagCircle = (
    <img
      id={id}
      src={newTagCircleImg}
      className={clsx(
        className,
        "absolute",
        "-top-[5%] -right-[7%]",
        "rotate-[-10deg]",
        "xs:w-[110px] w-[90px]",
        "opacity-80",
        "dark:invert",
        "dark:grayscale",
        "prevent-select"
      )}
    />
  );

  // Option 2
  const newTagLetters = (
    <img
      id={id}
      src={newTagLetterImg}
      className={clsx(
        className,
        "absolute",
        "top-0 -right-[15%]",
        "rotate-[40deg]",
        "xs:w-[180px] w-[160px]",
        "dark:grayscale",
        "dark:brightness-200",
        "prevent-select"
      )}
    />
  );

  return newTagLetters;
};

export default NewTag;
