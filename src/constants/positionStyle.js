const vh = (coef) => window.innerHeight * (coef / 100);

const fixedPositionTopStretch = "fixed top-0 left-0 right-0";
const fixedPositionCenter =
  "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
const absolutePositionCenter =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

const positionStyle = {
  loaderPosition: fixedPositionTopStretch,

  navbarPosition: fixedPositionTopStretch,
  navbarBrandPosition: absolutePositionCenter,
  menuButtonPosition: "absolute md:right-5 right-2 top-1/2 -translate-y-1/2",
  menuListItemsPosition: fixedPositionCenter,
  menuBackgroundPosition: "fixed -top-[50px] -right-[50px]",

  darkLightBtnPosition: "fixed bottom-7 lg:right-7 right-5",

  aboutSectionBlobDotsPosition: "absolute left-[-5%] top-[-1%]",
  aboutSectionBlobImagePosition: "absolute right-[-5%] bottom-[-1%]",
  aboutSectionSocialIconListItemsPosition:
    "absolute right-0 xl:top-1/2 lg:top-[18%] md:top-[15%] xs:top-[13%] top-[7%] xl:-translate-y-1/2",

  aboutToWorkSectionTransitionPosition: vh(60),
  workToAboutSectionTransitionPosition: vh(40),
};

export default positionStyle;
