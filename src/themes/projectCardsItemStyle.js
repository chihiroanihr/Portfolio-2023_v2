import clsx from "clsx";

// ================ Postition ================ //
// Cards Absolute Position Styling
const projectCardsItemPositionStyle = [
  clsx(
    "md:absolute",
    "xxxl:left-[10%] xxl:left-[5%] xl:left-[15%] xl:left-[10%] lg:left-[8%] md:left-[5%]"
  ),
  clsx(
    "md:absolute",
    "lg:top-[500px] md:top-[750px]",
    "xxl:left-[37%] lg:left-[55%] md:left-[45%]"
  ),
  clsx(
    "md:absolute",
    "xxl:top-[200px] lg:top-[900px] md:top-[1500px]",
    "xxxl:left-[65%] xxl:left-[68%] xl:left-[18%] lg:left-[12%] md:left-[8%]"
  ),
];

// ================== EXPORT ================== //
const projectCardsItemStyle = {
  positionStyle: projectCardsItemPositionStyle,
};

export default projectCardsItemStyle;
