import React from "react";
import { SlArrowUpCircle } from "react-icons/sl";
import { Button } from "@components";
import { colorStyle } from "@constants";

const ScrollToTopButton = ({ className, onClick }) => {
  console.log("[Render] @components/ScrollToTopButton.jsx");

  return (
    <Button
      className={`${className} ${colorStyle.timelineFModalScrollToTopBtnColor} transition-colors duration-200
      flex flex-col items-center`}
      onClick={onClick}
    >
      <p className="font-default-sans font-semibold text-[12px] tracking-widest">
        TOP
      </p>
      <SlArrowUpCircle className="text-[50px]" />
    </Button>
  );
};

export default React.memo(ScrollToTopButton);
