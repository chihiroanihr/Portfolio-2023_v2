import React from "react";

const Card = ({ id, className, children }) => {
  console.log("[Render] @components/Card.jsx");

  return (
    <div
      id={id}
      className={`${className} shadow-xl
      sm:px-[35px] sm:py-[40px] px-[30px] py-[35px]
      flex flex-col justify-center`}
    >
      {children}
    </div>
  );
};

export default React.memo(Card);
