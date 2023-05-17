import clsx from "clsx";

// --------------- Config Value --------------- //
const buttonSize = 84;

const buttonWrapperPosition = {
  right: {
    small: 10,
    medium: 25,
  },
};

const buttonWrapperSize = {
  width: 50,
  height: 40,
};

// --------------- Calculation --------------- //
const hamburgerLineTranslatePositionY = buttonWrapperSize.height / 2 - 2;

const menuBackgroundPositionInViewMedium =
  buttonWrapperPosition.right.medium / 2;
const menuBackgroundPositionInViewSmall = buttonWrapperPosition.right.small / 2;

// ---------- Create Tailwind Style ---------- //
// Menu Button
const menuButtonWrapperPosition = `md:right-[${buttonWrapperPosition.right.medium}px] right-[${buttonWrapperPosition.right.small}px]`; // md:right-[25px] right-[10px]
const menuButtonWrapperLayoutSize = `w-[${buttonWrapperSize.width}px] h-[${buttonWrapperSize.height}px]`; // w-[50px] h-[40px]
const menuButtonBorderLayoutSize = `after:h-[${buttonSize}px] after:w-[${buttonSize}px]`; // after:w-[84px] after:h-[84px]

// Menu Button Hamburger Lines
const hamburgerFirstLineTranslatePosition = `translate-y-[${hamburgerLineTranslatePositionY}px]`; // translate-y-[18px]
const hamburgerThirdLineTranslatePosition = `-translate-y-[${hamburgerLineTranslatePositionY}px]`; // -translate-y-[18px]

// Menu Background
const menuBackgroundLayoutSize = `w-[${buttonSize}px] h-[${buttonSize}px]`; // w-[84px] h-[84px]
const menuBackgroundPositionOutView = `-top-[${buttonSize}px] -right-[${buttonSize}px]`; // -top-[84px] -right-[84px] (default)
const menuBackgroundPositionInView = `md:right-[${menuBackgroundPositionInViewMedium}px] right-[${menuBackgroundPositionInViewSmall}px]`; // md:right-[25px] right-[10px]

// -------------- Default Export -------------- //
const navbarStyle = {
  menuButtonWrapper: menuButtonWrapperPosition,
  menuButton: {
    wrapper: clsx(menuButtonWrapperLayoutSize, menuButtonWrapperPosition),
    border: menuButtonBorderLayoutSize,
  },
  hamburgerLine: {
    topLine: hamburgerFirstLineTranslatePosition,
    bottomLine: hamburgerThirdLineTranslatePosition,
  },
  menuBackground: {
    outView: clsx(menuBackgroundLayoutSize, menuBackgroundPositionOutView),
    inView: clsx(menuBackgroundLayoutSize, menuBackgroundPositionInView),
  },
};

export default navbarStyle;
