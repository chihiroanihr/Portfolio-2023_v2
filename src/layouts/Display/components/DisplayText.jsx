import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";
import { RevealAnimationWrapper } from "@components";
import { isFontAvailable } from "@utils";
import { useDisplayTextAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const DisplayText = ({ className, parentRef }) => {
  console.log("[Render] [src] @layouts/Display/DisplayText.jsx");

  // Words Node References
  const displayWordsNodeRef = useRef([]);

  useEffect(() => {
    if (!parentRef.current && !displayWordsNodeRef.current) return;
    console.log("[LOG] (DisplayText.jsx) Animation Started");

    // Retrive animation and register to timeline
    const animation = useDisplayTextAnimation(
      displayWordsNodeRef.current,
      parentRef.current
    );

    // Clean Up Animations
    return () => cleanUpGsapAnimation(animation);
  }, []);

  // ------------- Memoize text section JSX ------------- //
  const memoizedTextSection = useMemo(() => {
    const TEXT = "I also enjoy some <i>cool UI stuff</i> like this:";

    return (
      <RevealAnimationWrapper inputText={TEXT}>
        {({ text, italic }, index) => (
          <p
            key={index}
            ref={(el) => (displayWordsNodeRef.current[index] = el)}
            className={clsx(italic && "italic", "sm:mr-4 mr-3")}
          >
            {text}
          </p>
        )}
      </RevealAnimationWrapper>
    );
  }, []);

  // ************************* CSS ************************* //
  const fontType = "font-limelight-cursive";
  const textColor = "text-coffee-600 dark:text-coffee-300";

  const displayTextStyle = clsx(
    "md:text-[80px] xs:text-[45px] text-[40px]",
    "leading-tight",
    "uppercase",
    fontType,
    textColor,
    !isFontAvailable("Limelight") && "font-bold"
  );

  // ************************* JSX ************************* //
  return (
    <div
      className={clsx(
        className,
        "block relative",
        "xl:text-right",
        displayTextStyle
      )}
    >
      {memoizedTextSection}
    </div>
  );
};

export default DisplayText;
