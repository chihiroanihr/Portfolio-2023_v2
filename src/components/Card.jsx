import React from "react";
import clsx from "clsx";

const Card = ({ id, className, children }) => {
  console.log("[Render] @components/Card.jsx");

  return (
    <div
      id={id}
      className={clsx(
        className,
        "sm:px-[35px] px-[30px]",
        "sm:py-[40px] py-[35px]",
        "shadow-xl",
        "flex flex-col justify-center"
      )}
    >
      {children}
    </div>
  );
};

export default React.memo(Card);
