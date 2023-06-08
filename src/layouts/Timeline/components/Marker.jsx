import clsx from "clsx";

const Marker = ({ id, offsetHeight }) => {
  const markerBgColor = "bg-coffee-600";
  const markerBorderColor = "border-coffee-100"; // border color camouflage with bg

  const markerStyle = clsx(
    // layout
    "min-w-[16px] h-[16px]",
    "rounded-full",
    "border-[4px]",
    // color
    markerBgColor,
    markerBorderColor
  );

  return <div id={id} className={clsx(offsetHeight, markerStyle)} />;
};

export default Marker;
