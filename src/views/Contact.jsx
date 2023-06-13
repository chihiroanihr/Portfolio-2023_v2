import { useRef, useMemo, useEffect } from "react";
import clsx from "clsx";
import { ContactMe } from "@layouts";
import { WrapNodeForRevealAnim } from "@components";
import { CoffeeCupLine } from "@components/SVG";
import { useContactTextAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const Contact = ({ className }) => {
  console.log("[Render] @views/Contact.jsx");

  const contactSectionNodeRef = useRef(null);

  // --------------- Animate text section --------------- //
  useEffect(() => {
    if (!contactSectionNodeRef.current) return;
    console.log("[LOG] (Contact.jsx) Animation Started");

    // Retrive animation and register to timeline
    const animation = useContactTextAnimation(contactSectionNodeRef.current);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(animation);
      console.log("[LOG] (Contact.jsx) Animation Killed");
    };
  }, []);

  // ------------- Memoize text section JSX ------------- //
  const memoizedTextSection = useMemo(() => {
    const TEXT =
      "Enjoyed my website? Need help with designing and building your own? I'm here for you!\
      <br />Let's <i>Collaborate</i> and <i>Create</i> an impressive website that represents your brand.";

    return (
      <WrapNodeForRevealAnim inputText={TEXT} newLineSpace="mb-5">
        {({ text, italic }) => (
          <p id="text" className={clsx("mr-3", italic && "italic")}>
            {text}
          </p>
        )}
      </WrapNodeForRevealAnim>
    );
  }, []);

  // ************************* CSS ************************* //
  const fontType = "font-default-sans";
  const textColor = "text-coffee-600 dark:text-coffee-300";

  // ************************* JSX ************************* //
  return (
    <section
      ref={contactSectionNodeRef}
      id="contact"
      className={clsx(
        className,
        "relative",
        "min-h-screen",
        "h-full",
        "overflow-hidden",
        "flex justify-center items-center"
      )}
    >
      {/* SVG Background */}
      <CoffeeCupLine
        className={clsx(
          "absolute",
          "xl:top-0 top-0",
          "xl:left-[-30%] md:left-[-70%] left-[-150%]",
          "xl:w-full w-auto h-full"
        )}
        fillColor="fill-coffee-600 dark:fill-coffee-300"
        fillOpacity={0.2}
      />

      {/* Content */}
      <div
        className={clsx(
          "page-layout default-page-spacing",
          "w-full",
          "flex xl:flex-row flex-col justify-center xl:items-center",
          "gap-10"
        )}
      >
        {/* Text Section */}
        <div
          className={clsx(
            "xxl:max-w-[30%] xl:max-w-[40%]",
            "xl:w-full xs:w-2/3 w-full",
            fontType,
            textColor,
            "lg:text-[25px] text-[20px]"
          )}
        >
          {memoizedTextSection}
        </div>

        {/* Contact Me Button */}
        <ContactMe className="z-[1]" />
      </div>
    </section>
  );
};

export default Contact;
