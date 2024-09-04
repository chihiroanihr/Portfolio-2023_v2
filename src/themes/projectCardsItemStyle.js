import clsx from "clsx";

// ================ Postition ================ //
// Cards Absolute Position Styling
const projectCardsItemPositionStyle = [
  clsx(
    "md:absolute",
    "xxl:top-[150px]",
    "xxxl:left-[10%] xxl:left-[5%] xl:left-[15%] lg:left-[10%] md:left-[3%]"
  ),
  clsx(
    "md:absolute",
    "xxl:top-[0px] lg:top-[100px] md:top-[200px]",
    "xxl:left-[37%] lg:left-[55%] md:left-[53%]"
  ),
  clsx(
    "md:absolute",
    "xxl:top-[300px] lg:top-[880px] md:top-[850px]",
    "xxxl:left-[65%] xxl:left-[68%] xl:left-[20%] lg:left-[10%] md:left-[3%]"
  ),
  clsx(
    "md:absolute",
    "xxl:top-[830px] lg:top-[950px] md:top-[1000px]",
    "xxl:left-[37%] xl:left-[60%] lg:left-[55%] md:left-[53%]"
  ),
];

// ================== EXPORT ================== //
const projectCardsItemStyle = {
  positionStyle: projectCardsItemPositionStyle,
};

export default projectCardsItemStyle;
