import clsx from "clsx";

// -------------- Default Home Text Style (web-safe fonts) -------------- //
const defaultTextStyle = clsx(
  "leading-snug",
  "md:font-extralight font-light",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);
const defaultCreativityTextStyle = clsx(
  "whitespace-nowrap",
  "leading-snug",
  "lg:text-[96px] md:text-[72px] xs:text-[48px] text-[36px]"
);
const defaultCoffeeTextStyle = clsx(
  "leading-snug",
  "md:font-light font-normal",
  "lg:text-[48px] md:text-[36px] sm:text-[24px] xs:text-[24px] text-[18px]"
);

const defaultHomeStyle = {
  defaultTextStyle: defaultTextStyle,
  creativityTextStyle: defaultCreativityTextStyle,
  coffeeTextStyle: defaultCoffeeTextStyle,
};

const customCreativityTextStyle = clsx(
  "whitespace-nowrap",
  "xl:tracking-normal xs:tracking-tight tracking-tighter",
  "lg:text-[140px] md:text-[116px] xs:text-[72px] text-[60px]"
);

const customHomeStyle = {
  defaultTextStyle: defaultTextStyle,
  creativityTextStyle: customCreativityTextStyle,
  coffeeTextStyle: defaultCoffeeTextStyle,
};

// ---------- Custom Home Text Style (i.e. Radditya Signature) ---------- //

const homeStyle = {
  defaultHomeStyle: defaultHomeStyle,
  customHomeStyle: customHomeStyle,
};

export default homeStyle;
