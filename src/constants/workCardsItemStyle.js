// ================ Postition ================ //
// Cards Absolute Position Styling
const workCardsItemPositionStyle = [
  "md:absolute xxxl:left-[10%] xxl:left-[5%] xl:left-[15%] xl:left-[10%] lg:left-[8%] md:left-[5%]",
  "md:absolute lg:top-[400px] md:top-[600px] xxl:left-[37%] lg:left-[55%] md:left-[45%]",
  "md:absolute xxl:top-[200px] lg:top-[800px] md:top-[1200px] xxxl:left-[65%] xxl:left-[68%] xl:left-[18%] lg:left-[12%] md:left-[8%]",
];

// ================== Color ================== //
//bg-coffee-300/50
const cardItemBgColor =
  "bg-white/20 hover:bg-white/40 dark:bg-coffee-300/10 dark:hover:bg-coffee-300/20";
const cardItemBgColorMobile = "bg-white/20 dark:bg-coffee-300/20"; // No hover on mobile version
const cardItemBorderColor = "border-white/30 dark:border-coffee-300/30";
const thumbnailBgColor = "bg-coffee-300 dark:bg-coffee-400";
const titleTextColor = "text-white dark:text-coffee-300";
const descriptionTextColor = "text-white dark:text-coffee-300";
const toolTagTextColor = "text-coffee-400/90";
const toolTagBorderColor = "border-coffee-400/60";
const categoryTagBgColor = "bg-white dark:bg-coffee-300/90";
const categoryTagTextColor = "text-coffee-400 dark:text-coffee-800/70";
const linkTagBgColor =
  "bg-white hover:bg-white/60 dark:bg-coffee-300/90 dark:hover:bg-coffee-300/50";
const linkTagTextColor = "text-coffee-400 dark:text-coffee-800/70";

const workCardsItemColorStyle = {
  cardItemColor: cardItemBgColor + " " + cardItemBorderColor,
  cardItemColorMobile: cardItemBgColorMobile + " " + cardItemBorderColor,
  thumbnailColor: thumbnailBgColor,
  titleColor: titleTextColor,
  descriptionColor: descriptionTextColor,
  toolTagColor: toolTagTextColor + " " + toolTagBorderColor,
  categoryTagColor: categoryTagBgColor + " " + categoryTagTextColor,
  linkTagColor: linkTagBgColor + " " + linkTagTextColor,
};

// =================== Font =================== //
const workCardsItemFontStyle = {
  titleFont:
    "font-default-sans font-semibold xs:text-[32px] text-[25px] mt-[10px]",
  descriptionFont:
    "font-default-sans xs:font-semibold font-medium xs:text-[16px] text-[14px]",
  toolTagFont: "font-default-sans font-medium text-[10px]",
  categoryTagFont: "font-default-sans font-semibold sm:text-[14px] text-[12px]",
};

// ================== Layout ================== //
const workCardsItemLayoutStyle = {
  cardItemLayout:
    "w-[80%] max-w-[400px] min-h-[400px] \
    rounded-[20px] backdrop-blur-[15px] \
    border border-b-2",
  thumbnailLayout: "w-full xs:h-[200px] h-[150px] rounded-[10px]",
  toolTagLayout:
    "border rounded-full py-[2px] px-[8px] before:content-['#'] before:pr-[2px] whitespace-nowrap",
  categoryTagLayout: "rounded-3xl px-[16px] py-[8px]",
  linkTagLayout: "rounded-full p-[8px]",
};

// ================== EXPORT ================== //
const workCardsItemStyle = {
  layoutStyle: workCardsItemLayoutStyle,
  positionStyle: workCardsItemPositionStyle,
  colorStyle: workCardsItemColorStyle,
  fontStyle: workCardsItemFontStyle,
};

export default workCardsItemStyle;
