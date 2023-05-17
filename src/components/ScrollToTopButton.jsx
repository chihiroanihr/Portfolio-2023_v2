import React from "react";
import clsx from "clsx";
import { SlArrowUpCircle } from "react-icons/sl";
import { Button } from "@components";

const ScrollToTopButton = ({ className, strokeColor, fontType, onClick }) => {
  console.log("[Render] @components/ScrollToTopButton.jsx");

  return (
    <Button
      className={clsx(
        className,
        strokeColor,
        "transition-colors duration-200",
        "flex flex-col items-center"
      )}
      onClick={onClick}
    >
      <p
        className={clsx(
          fontType,
          "font-semibold",
          "text-[12px]",
          "tracking-widest"
        )}
      >
        TOP
      </p>
      <SlArrowUpCircle className="text-[50px]" />
    </Button>
  );
};

export default React.memo(ScrollToTopButton);
