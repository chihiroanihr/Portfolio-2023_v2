import clsx from "clsx";
import { SlArrowUpCircle } from "react-icons/sl";
import { Button } from "./index";

const ScrollToTopButton = ({ className, onClick }) => {
  console.log("[Render] @components/ScrollToTopButton.jsx");

  // ************************* CSS ************************* //
  const scrollToTopTextFont = "font-default-sans";
  const scrollToTopButtonStrokeColor = clsx(
    "text-coffee-600",
    "hover:text-coffee-800"
  );

  // ************************* JSX ************************* //
  return (
    <Button
      className={clsx(
        className,
        scrollToTopButtonStrokeColor,
        "transition-colors duration-200",
        "flex flex-col items-center"
      )}
      onClick={onClick}
    >
      <p
        className={clsx(
          scrollToTopTextFont,
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

export default ScrollToTopButton;
