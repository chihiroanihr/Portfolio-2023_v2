// !! From Left To Right, From Underneath To Top Image

// Cards Absolute Position Style
const ImageCardsItemPositionStyle = [
  "absolute -translate-y-1/2 top-[45%] right-[50%]",
  "absolute -translate-y-1/2 top-1/2 xs:right-[30%] right-[34%]",
  "absolute -translate-y-1/2 top-[60%] xs:right-[5%] right-[16%]",
];
// Cards Rotation Style
const ImageCardsItemRotationStyle = [
  "-rotate-[17deg]",
  "-rotate-6",
  "rotate-6",
];
// Cards Brightness Style
const ImageCardsItemBrightnessStyle = [
  "dark:brightness-[0.5]",
  "dark:brightness-[0.6]",
  "dark:brightness-[0.6]",
];

const imageCardsItemStyle = {
  positionStyle: ImageCardsItemPositionStyle,
  rotationStyle: ImageCardsItemRotationStyle,
  brightnessStyle: ImageCardsItemBrightnessStyle,
};

export default imageCardsItemStyle;
