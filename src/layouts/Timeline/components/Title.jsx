import React from "react";
import clsx from "clsx";
import Logo from "./Logo";

const Title = ({ id, index, title, logo }) => {
  let isWorkSection;

  if (title.position || title.company || title.type) isWorkSection = true;
  else isWorkSection = false;

  // ************************* CSS ************************* //
  const titleTextStyle = clsx(
    "font-medium",
    "md:text-[25px] sm:text-[20px] xs:text-[16px] text-[14px]"
  );

  // ************************* JSX ************************* //
  const workChartTitle = (
    <div
      className={clsx(
        titleTextStyle,
        index % 2 === 0 ? "md:pl-[40px]" : "md:pr-[40px]"
      )}
    >
      {title.position}
      <br />
      {title.company}
      <br />
      {title.type && "(" + title.type + ")"}
    </div>
  );

  const lifeChartTitle = (
    <div className={clsx("whitespace-pre-line", titleTextStyle)}>{title}</div>
  );

  return (
    <div
      id={id}
      className={clsx(
        "mt-[5px]",
        "w-full",
        "flex sm:flex-wrap items-center justify-between",
        "gap-x-3",
        index % 2 === 0 && "md:self-end md:flex-row-reverse"
      )}
    >
      {isWorkSection ? workChartTitle : lifeChartTitle}
      {logo && (
        <Logo
          item={logo}
          className={clsx(
            "absolute",
            "right-0",
            index % 2 === 0 && "md:left-0 md:right-full"
          )}
        />
      )}
    </div>
  );
};

export default Title;
