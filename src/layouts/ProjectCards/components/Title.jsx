import clsx from "clsx";

const Title = ({ className, item }) => {
  // ************************* CSS ************************* //
  const titleTextColor = "text-white dark:text-coffee-300";
  const titleTextStyle = clsx(
    "font-medium",
    "leading-tight",
    "xs:text-[32px] text-[25px]"
  );

  const titleStyle = clsx(titleTextColor, titleTextStyle);

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
