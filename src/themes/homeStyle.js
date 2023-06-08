import clsx from "clsx";

// -------------- Default Home Text Style (web-safe fonts) -------------- //
const defaultSippingOnTextStyle = clsx(
  "leading-snug",
  "md:font-extralight font-light",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);
const defaultCreativityTextStyle = clsx(
  "whitespace-nowrap",
  "leading-snug",
  "lg:text-[96px] md:text-[72px] xs:text-[48px] text-[36px]"
);
const defaultOneCupOfTextStyle = clsx(
  "leading-snug",
  "md:font-extralight font-light",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);
const defaultCoffeeTextStyle = clsx(
  "leading-snug",
  "md:font-light font-normal",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);
const defaultAtTimeTextStyle = clsx(
  "leading-snug",
  "md:font-extralight font-light",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);

const defaultHomeStyle = {
  sippingOnTextStyle: defaultSippingOnTextStyle,
  creativityTextStyle: defaultCreativityTextStyle,
  oneCupOfTextStyle: defaultOneCupOfTextStyle,
  coffeeTextStyle: defaultCoffeeTextStyle,
  atTimeTextStyle: defaultAtTimeTextStyle,
};

// ---------- Custom Home Text Style (i.e. Radditya Signature) ---------- //
const customSippingOnTextStyle = clsx(
  "leading-snug",
  "md:font-extralight font-light",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);
const customCreativityTextStyle = clsx(
  "whitespace-nowrap",
  "lg:text-[140px] md:text-[116px] xs:text-[72px] text-[60px]"
);
const customOneCupOfTextStyle = clsx(
  "leading-snug",
  "md:font-extralight font-light",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);
const customCoffeeTextStyle = clsx(
  "leading-snug",
  "md:font-light font-normal",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);
const customAtTimeTextStyle = clsx(
  "leading-snug",
  "md:font-extralight font-light",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);

const customHomeStyle = {
  sippingOnTextStyle: customSippingOnTextStyle,
  creativityTextStyle: customCreativityTextStyle,
  oneCupOfTextStyle: customOneCupOfTextStyle,
  coffeeTextStyle: customCoffeeTextStyle,
  atTimeTextStyle: customAtTimeTextStyle,
};

const homeStyle = {
  defaultHomeStyle: defaultHomeStyle,
  customHomeStyle: customHomeStyle,
};

export default homeStyle;
