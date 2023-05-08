const globalFonts = "font-serif";

// ===================== Timeline Line ===================== //
const timelineChartsLineStyle = {
  positionStyle:
    "before:absolute before:top-0 before:md:left-1/2 before:sm:left-[58px] before:left-[38px]",
  layoutStyle: "before:content-[''] before:-ml-px before:w-[2px] before:h-full",
  colorStyle: "before:bg-coffee-400",
};

// ===================== Timeline Marker ===================== //
const markerBgColor = "bg-coffee-800";
const markerBorderColor = "border-coffee-100"; // border color camouflage with bg

const timelineChartsMarkerStyle = {
  layoutStyle: "min-w-[16px] h-[16px] rounded-full border-[2px]",
  colorStyle: markerBgColor + " " + markerBorderColor,
};

// ================= Timeline Date Marker ================= //
const dateMarkerBgcolor = "bg-coffee-800/90";
const dateMarkerBorderColor = "ring-coffee-300";
const dateMarkerTextColor = "text-coffee-100";

const timelineChartsDateMarkerStyle = {
  layoutStyle: "rounded-full px-[16px] py-[6px] ring",
  colorStyle:
    dateMarkerBgcolor + " " + dateMarkerBorderColor + " " + dateMarkerTextColor,
  fontStyle: "text-[16px]",
};

// ================== Timeline Contents ================== //
const toolTagBgColor = "bg-coffee-800/90";
const toolTagtextColor = "text-coffee-100";

const timelineChartsContentColorStyle = {
  subtitleColor: "text-coffee-400",
  toolTagColor: toolTagBgColor + " " + toolTagtextColor,
};

const timelineChartsContentLayoutStyle = {
  logoLayout: "md:h-[50px] xs:h-[30px] h-[20px]",
  toolTagLayout: "px-[10px] py-[3px] rounded-sm",
};

const timelineChartsContentFontStyle = {
  headingFont: "md:text-[44px] xs:text-[32px] text-[28px]",
  titleFont: "md:text-[25px] sm:text-[20px] xs:text-[16px] text-[14px]",
  subtitleFont: "sm:text-[14px] xs:text-[13px] text-[12px]",
  descriptionFont: "sm:text-[14px] xs:text-[13px] text-[12px] tracking-wide",
  toolTagFont: "text-[12px]",
};

const timelineChartsContentStyle = {
  layoutStyle: timelineChartsContentLayoutStyle,
  colorStyle: timelineChartsContentColorStyle,
  fontStyle: timelineChartsContentFontStyle,
};

// ======================= EXPORT ======================= //
const timelineChartsStyle = {
  lineStyle: timelineChartsLineStyle,
  markerStyle: timelineChartsMarkerStyle,
  dateMarkerStyle: timelineChartsDateMarkerStyle,
  contentStyle: timelineChartsContentStyle,
  globalFonts: globalFonts,
};

export default timelineChartsStyle;
