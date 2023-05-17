// ================ Postition ================ //
// Cards Absolute Position Styling
const projectCardsItemPositionStyle = [
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

const projectCardsItemColorStyle = {
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
const projectCardsItemFont = "font-default-sans";

const projectCardsItemFontStyle = {
  titleFont:
    projectCardsItemFont +
    " font-semibold xs:text-[32px] text-[25px] mt-[10px]",
  descriptionFont:
    projectCardsItemFont +
    " xs:font-semibold font-medium xs:text-[16px] text-[14px]",
  toolTagFont: projectCardsItemFont + " font-medium text-[10px]",
  categoryTagFont:
    projectCardsItemFont + " font-semibold sm:text-[14px] text-[12px]",
};

// ================== EXPORT ================== //
const projectCardsItemStyle = {
  positionStyle: projectCardsItemPositionStyle,
  colorStyle: projectCardsItemColorStyle,
  fontStyle: projectCardsItemFontStyle,
};

export default projectCardsItemStyle;
