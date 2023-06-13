import React, { useRef, useLayoutEffect } from "react";
import clsx from "clsx";
import { TimelineModal } from "@layouts";
import {
  BlobImage,
  BlobDots,
  SocialIconsList,
  ModalButton,
  LocalTime,
} from "@components";
import { ScrollLockProvider, ToggleModalProvider } from "@contexts";
import { socialMediaPlatformsStyle } from "@themes";
import { useBodyScrollLock, WrapNodeForRevealAnim } from "@utils";
import { useAboutAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";
import girlImage from "@assets/images/girl.png";

const SelfIntroductionText = React.memo(() => {
  const fullNameTextFont = "font-radditya-signature-cursive";
  const textFont = "font-default-sans";
  const textColor = "text-coffee-600 dark:text-coffee-300";

  const fullNameTextStyle = clsx(
    "whitespace-nowrap",
    "sm:text-[80px] xs:text-[58px] text-[48px]",
    fullNameTextFont,
    textColor
  );
  const introTextStyle = clsx(
    "lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px]",
    "sm:leading-[1.625em] xs:leading-6 leading-5",
    textFont,
    textColor
  );

  const TEXT =
    "I'm a web developer and designer with a passion for creating immersive digital experiences. \
    My expertise lies in developing websites that seamlessly blend form and function, \
    leaving a lasting impression on visitors — just like a perfect brewed cup of coffee.\
    <br />\
    From the first sip of coffee to the last line of code, I pour my heart and soul into every project.";

  return (
    <>
      {/* Full Name */}
      <div id="full-name" className={fullNameTextStyle}>
        Rhina Kim
      </div>

      {/* Text */}
      <div className={introTextStyle}>
        <WrapNodeForRevealAnim inputText={TEXT} newLineSpace="sm:mb-5 mb-3">
          {({ text }) => (
            <p id="text" className={clsx("sm:mr-2 mr-[5px]")}>
              {text}
            </p>
          )}
        </WrapNodeForRevealAnim>
      </div>
    </>
  );
});

const BlobImageSection = React.memo(({ className }) => {
  const blobDotsFillColor = "fill-coffee-600 dark:fill-coffee-300";

  return (
    <div
      id="images"
      className={clsx(
        className,
        "relative",
        "overflow-hidden",
        "w-full h-full",
        "lg:min-h-[50vh] md:min-h-[55vh] min-h-[45vh]"
      )}
    >
      <BlobDots
        className={clsx("absolute left-[-5%] top-[-1%]", "w-full h-full")}
        fillColor={blobDotsFillColor}
      />
      <BlobImage
        className={clsx("absolute right-[-5%] bottom-[-1%]", "w-full h-full")}
        imgSrc={girlImage}
      />
    </div>
  );
});

const ModalButtonSection = React.memo(({ className }) => (
  <ModalButton
    id="view-more-btn"
    className={className}
    value="View More"
    defaultStyle={false}
  />
));

const LocalTimeSection = React.memo(({ className }) => {
  const fontType = "font-default-sans";
  const textColor = "text-coffee-600 dark:text-coffee-300";

  return (
    <LocalTime
      id="local-time"
      className={clsx(
        className,
        textColor,
        fontType,
        "sm:text-[10px] text-[8px]"
      )}
    />
  );
});

const About = () => {
  console.log("[Render] @views/About.jsx");

  // Node Reference
  const aboutSectionNodeRef = useRef(null);
  // Scroll Lock Target Node Reference
  const scrollLockTargetNodeRef = useRef(null);

  // Retrieve Scroll Lock Function
  const { handleScrollLock } = useBodyScrollLock(scrollLockTargetNodeRef, {
    allowTouchMove: true,
  });

  // Render Animation
  useLayoutEffect(() => {
    if (!aboutSectionNodeRef.current) return;
    console.log("[LOG] (About.jsx) Animation Started");

    const ctx = useAboutAnimation(aboutSectionNodeRef.current);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (About.jsx) Animation Killed");
    };
  }, []);

  return (
    <section
      ref={aboutSectionNodeRef}
      id="about"
      className="page-layout default-page-spacing"
    >
      <div
        className={clsx(
          "relative",
          "xl:h-screen min-h-screen",
          "flex justify-center items-center",
          "xl:flex-row flex-col-reverse",
          "xl:gap-10 gap-0"
        )}
      >
        <ScrollLockProvider handleScrollLock={handleScrollLock}>
          <ToggleModalProvider>
            {/* ---- Button Column (small screen) ---- */}
            <ModalButtonSection className={clsx("xl:hidden", "mb-3")} />

            {/* --------------- Image --------------- */}
            <BlobImageSection className="xl:flex-1" />

            <div
              className={clsx(
                "xl:flex-1",
                "relative",
                "xs:pr-[80px] pr-[60px]"
              )}
            >
              <div className={clsx("max-w-screen-md", "flex flex-col")}>
                {/* -------- Introduction Text -------- */}
                <SelfIntroductionText />

                {/* ---- Button Row (large screen) ---- */}
                <ModalButtonSection
                  className={clsx("xl:block hidden", "self-center", "mt-6")}
                />
              </div>

              {/* -------- Local Time Indicator -------- */}
              <LocalTimeSection
                className={clsx(
                  "absolute",
                  "right-0",
                  "xl:top-1/2 xl:-translate-y-1/2 xl:mt-[-210px]",
                  "lg:top-[10%] top-[5%]"
                )}
              />

              {/* ------------ Social Icons ------------ */}
              <SocialIconsList
                id="social-icons"
                className={clsx(
                  "lg:scale-100 xs:scale-[0.8] scale-[0.7]",
                  "absolute",
                  "right-0",
                  "xl:top-1/2 xl:-translate-y-1/2",
                  "lg:top-[30%] md:top-[15%] xs:top-[13%] top-[7%]"
                )}
                iconStyle={socialMediaPlatformsStyle}
                iconGap="xl:gap-1 gap-2"
                direction="y"
              />
            </div>

            {/* ------- Modal (hidden) ------- */}

            <TimelineModal ref={scrollLockTargetNodeRef} />
          </ToggleModalProvider>
        </ScrollLockProvider>
      </div>
    </section>
  );
};

export default React.memo(About);
