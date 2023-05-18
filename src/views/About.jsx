import React, { useRef, useLayoutEffect } from "react";
import clsx from "clsx";
import { TimelineModal } from "@layouts";
import { BlobImage, BlobDots, SocialIconsList, ModalButton } from "@components";
import { ScrollLockProvider, ToggleModalProvider } from "@contexts";
import { useBodyScrollLock } from "@utils";
import { useAboutAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";
import girlImage from "@assets/images/girl.png";

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

  // ************************* CSS ************************* //
  const blobDotsFillColor = "fill-coffee-600 dark:fill-coffee-300";
  const aboutPageTextColor = "text-coffee-600 dark:text-coffee-300";
  const aboutPageDefaultTextFont = "font-default-sans";
  const aboutPageFullNameTextFont = "font-autography-cursive";

  const fullNameTextStyle = clsx(
    "whitespace-nowrap",
    "sm:text-[80px] xs:text-[58px] text-[48px]",
    aboutPageFullNameTextFont
  );

  const introTextStyle = clsx(
    "lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px]",
    "sm:leading-[1.625em] xs:leading-6 leading-5",
    aboutPageDefaultTextFont
  );

  const socialIconsListStyle = clsx(
    "lg:scale-[1] xs:scale-[0.8] scale-[0.7]",
    "absolute right-0 xl:top-1/2 lg:top-[18%] md:top-[15%] xs:top-[13%] top-[7%] xl:-translate-y-1/2"
  );

  // ************************* JSX ************************* //
  return (
    <section
      ref={aboutSectionNodeRef}
      id="about"
      className="page-layout default-page-spacing"
    >
      <ScrollLockProvider handleScrollLock={handleScrollLock}>
        <ToggleModalProvider>
          <div
            className={clsx(
              "relative",
              "xl:h-screen min-h-screen",
              "flex flex-col-reverse xl:flex-row justify-center items-center",
              "xl:gap-10 gap-0"
            )}
          >
            {/* -------- Button Column (small screen) -------- */}
            <ModalButton
              id="view-more-btn"
              className={clsx("xl:hidden", "mb-3")}
            >
              View More
            </ModalButton>
            {/* -------- Image Area -------- */}
            <div
              id="images"
              className={clsx(
                "relative",
                "overflow-hidden",
                "xl:flex-1",
                "w-full h-full lg:min-h-[50vh] min-h-[45vh]"
              )}
            >
              <BlobDots
                className={clsx(
                  "absolute left-[-5%] top-[-1%]",
                  "w-full h-full"
                )}
                fillColor={blobDotsFillColor}
              />
              <BlobImage
                className={clsx(
                  "absolute right-[-5%] bottom-[-1%]",
                  "w-full h-full"
                )}
                imgSrc={girlImage}
              />
            </div>
            {/* -------- Text Area -------- */}
            <div
              className={clsx(
                "xl:flex-1",
                "max-w-screen-md",
                "xs:pr-[80px] pr-[60px]",
                "flex flex-col",
                aboutPageTextColor
              )}
            >
              {/* Full Name */}
              <div id="full-name" className={fullNameTextStyle}>
                Rhina Kim
              </div>
              {/* Text 1 */}
              <div id="text-1" className={introTextStyle}>
                I'm a web developer and designer with a passion for creating
                immersive digital experiences. My expertise lies in developing
                websites that seamlessly blend form and function, leaving a
                lasting impression on visitors — just like a perfect brewed cup
                of coffee.
              </div>
              {/* Text 2 */}
              <div id="text-2" className={clsx("mt-[20px]", introTextStyle)}>
                From the first sip of coffee to the last line of code, I pour my
                heart and soul into every project.
              </div>
              {/* -------- Button Row (large screen) -------- */}
              <ModalButton
                id="view-more-btn"
                className={clsx("xl:block hidden", "self-center", "mt-5")}
              >
                View More
              </ModalButton>
            </div>
            {/* -------- Social Icons -------- */}
            <SocialIconsList
              id="social-icons"
              className={socialIconsListStyle}
            />

            {/* ------- Modal (hidden) ------- */}
            <TimelineModal ref={scrollLockTargetNodeRef} />
          </div>
        </ToggleModalProvider>
      </ScrollLockProvider>
    </section>
  );
};

export default React.memo(About);
