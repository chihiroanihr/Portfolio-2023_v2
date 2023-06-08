import { useLayoutEffect } from "react";
import clsx from "clsx";
import { useScrollTextFlowAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const ScrollTextFlow = ({ className, parentRef }) => {
  console.log("[Render] @layouts/Display/ScrollTextFlow.jsx");

  useLayoutEffect(() => {
    if (!parentRef.current) return;
    console.log("[LOG] (ScrollTextFlow.jsx) Animation Started");

    const ctx = useScrollTextFlowAnimation(parentRef.current);

    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (ScrollTextFlow.jsx) Animation Killed");
    };
  }, []);

  // ************************* CSS ************************* //
  const containerBgColor = "bg-transparent";
  const containerBorderColor = "border-coffee-400 dark:border-coffee-600";
  const coffeeTextColor = "text-coffee-100 dark:text-coffee-800"; // camouflage with background
  const coffeeTextStroke = "text-shadow-stroke";
  const captionTextColor = "text-white dark:text-coffee-400";

  const darkModeTransition =
    "transition-[color] duration-700 will-change-[color]";

  const containerStyle = clsx(
    "border-[2px]",
    containerBorderColor,
    containerBgColor
  );
  const coffeeTextStyle = clsx(
    "whitespace-nowrap",
    "uppercase",
    "xxl:text-[100px] lg:text-[80px] md:text-[70px] sm:text-[60px] text-[40px]",
    "font-default-sans", // or ui sans serif
    "font-black",
    "leading-tight",
    coffeeTextStroke, // text stroke color and width
    coffeeTextColor,
    darkModeTransition // dark mode transition
  );
  const captionTextStyle = clsx(
    "whitespace-nowrap",
    "sm:text-[25px] text-[20px]",
    captionTextColor,
    "font-radditya-signature-cursive",
    "font-thin",
    darkModeTransition // dark mode transition
  );

  // ************************* JSX ************************* //
  return (
    // Square Box
    <div
      className={clsx(
        "prevent-select",
        className,
        "overflow-hidden",
        "max-h-[70vh] max-w-[80%] aspect-square",
        containerStyle,
        "flex justify-center items-center" // center the scroll text container inside this box
      )}
    >
      {/* Text Container */}
      <div className="rotate-[-15deg]">
        {/* Text */}
        {[...Array(15)].map((e, i) => (
          <h1
            key={i}
            id="coffee-text"
            className={clsx("relative", "flex gap-3")}
          >
            {[...Array(4)].map((e, i) => (
              <p key={i} className={clsx("opacity-70", coffeeTextStyle)}>
                coffee
              </p>
            ))}
            <div
              id="caption-text"
              className={clsx(
                "absolute",
                "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
                "flex gap-28"
              )}
            >
              {[...Array(3)].map((e, j) => (
                <p key={j} className={captionTextStyle}>
                  Coffee and Development
                </p>
              ))}
            </div>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ScrollTextFlow;
