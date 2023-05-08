// !! From Left To Right, From Underneath To Top Image

// Cards Absolute Position Style
const imageCardsLandingItemPositionStyle = [
  "absolute -translate-y-1/2 top-[45%] right-[50%]",
  "absolute -translate-y-1/2 top-1/2 xs:right-[30%] right-[34%]",
  "absolute -translate-y-1/2 top-[60%] xs:right-[5%] right-[16%]",
];
// Cards Rotation Style
const imageCardsLandingItemRotationStyle = [
  "-rotate-[17deg]",
  "-rotate-6",
  "rotate-6",
];
// Cards Brightness Style
const imageCardsLandingItemBrightnessStyle = [
  "dark:brightness-[0.5]",
  "dark:brightness-[0.6]",
  "dark:brightness-[0.6]",
];

const imageCardsLandingItemStyle = {
  cardStyle:
    "rounded-2xl shadow-img-cards-light dark:shadow-img-cards-dark\
    object-cover object-center",
  positionStyle: imageCardsLandingItemPositionStyle,
  rotationStyle: imageCardsLandingItemRotationStyle,
  brightnessStyle: imageCardsLandingItemBrightnessStyle,
};

export default imageCardsLandingItemStyle;
