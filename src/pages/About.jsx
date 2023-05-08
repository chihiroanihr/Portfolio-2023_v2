import React, { useRef, useContext, useLayoutEffect } from "react";
import { TimelineModal } from "@layouts";
import {
  BlobImage,
  BlobDots,
  SocialIconsItem,
  ModalButton,
} from "@components";
import {
  PlayAnimationContext,
  ScrollLockProvider,
  ToggleModalProvider,
} from "@contexts";
import { positionStyle, layoutStyle, colorStyle } from "@constants";
import { useAboutAnimation } from "@animations";
import { cleanUpGsapAnimation } from "@animations/utils";

const About = () => {
  console.log("[Render] @pages/About.jsx");

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM References
  const aboutSectionRef = useRef(null);

  // Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation || !aboutSectionRef.current) return;
    console.log("[LOG] (About.jsx) Animation Started");

    const ctx = useAboutAnimation(aboutSectionRef.current);

    // Clean Up Animations
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (About.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <section
      ref={aboutSectionRef}
      id="about"
      className={`overflow-hidden ${layoutStyle.sectionLayoutMaxSize} ${layoutStyle.sectionDefaultLayoutPaddingX}`}
    >
      <ScrollLockProvider>
        <ToggleModalProvider>
          <div
            className="relative xl:h-screen min-h-screen
            flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-10 gap-0"
          >
            {/* -------- Button Column (small screen) -------- */}
            <ModalButton id="view-more-btn" className="xl:hidden mb-3">
              View More
            </ModalButton>
            {/* -------- Image Area -------- */}
            <div
              id="images"
              className="xl:flex-1
              relative overflow-hidden w-full h-full lg:min-h-[50vh] min-h-[45vh]"
            >
              <BlobDots
                className={`${positionStyle.aboutSectionBlobDotsPosition} w-full h-full`}
                fillColor="fill-coffee-600 dark:fill-coffee-300"
              />
              <BlobImage
                className={`${positionStyle.aboutSectionBlobImagePosition} w-full h-full`}
              />
            </div>
            {/* -------- Text Area -------- */}
            <div
              className={`xl:flex-1
              max-w-screen-md xs:pr-[80px] pr-[60px] flex flex-col
              ${colorStyle.aboutSectionTextColor}`}
            >
              <div
                id="full-name"
                className="font-autography-cursive whitespace-nowrap
                sm:text-[80px] xs:text-[58px] text-[48px]"
              >
                Rhina Kim
              </div>
              <div
                className="font-default-sans
                lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px]
                sm:leading-[1.625em] xs:leading-6 leading-5"
              >
                <p id="text-1">
                  I'm a web developer and designer with a passion for creating
                  immersive digital experiences. My expertise lies in developing
                  websites that seamlessly blend form and function, leaving a
                  lasting impression on visitors — just like a perfect brewed
                  cup of coffee.
                </p>
                <div className="m-[20px]"></div>
                <p id="text-2">
                  From the first sip of coffee to the last line of code, I pour
                  my heart and soul into every project.
                </p>
              </div>
              {/* -------- Button Row (large screen) -------- */}
              <ModalButton
                id="view-more-btn"
                className="xl:block hidden self-center mt-5"
              >
                View More
              </ModalButton>
            </div>
            {/* -------- Social Icons -------- */}
            <SocialIconsItem
              id="social-icons"
              className={`lg:scale-[1] xs:scale-[0.8] scale-[0.7]
              ${positionStyle.aboutSectionSocialIconListItemsPosition}`}
            />

            {/* ------- Modal (hidden) ------- */}
            <TimelineModal />
          </div>
        </ToggleModalProvider>
      </ScrollLockProvider>
    </section>
  );
};

export default React.memo(About);
