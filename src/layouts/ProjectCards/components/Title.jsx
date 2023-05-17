import clsx from "clsx";

const Title = ({ item, className }) => {
  // ************************* CSS ************************* //
  const titleTextColor = "text-white dark:text-coffee-300";
  const titleFont = "font-medium xs:text-[32px] text-[25px]";

  const titleStyle = clsx(titleTextColor, titleFont);

  // ************************* JSX ************************* //
  return (
    <div
      className={clsx(className, titleStyle)}
      style={{ textShadow: "2px 3px 2px rgba(80, 46, 21, 0.3)" }}
    >
      {item}
    </div>
  );
};

export default Title;
