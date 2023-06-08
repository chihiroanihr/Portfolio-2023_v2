import clsx from "clsx";

const DateMarker = ({ id, index, item }) => {
  // ************************* CSS ************************* //
  const dateMarkerBorderColor = "ring-coffee-400";
  const dateMarkerTextColor = "text-coffee-600";

  const dateMarkerStyle = clsx(
    // layout
    "rounded-full",
    "px-[16px] py-[6px]",
    "ring-[1.2px]",
    // font
    "sm:text-[14px] text-[12px]",
    // color
    dateMarkerBorderColor,
    dateMarkerTextColor
  );

  // ************************* JSX ************************* //
  return (
    <div
      id={id}
      className={clsx(dateMarkerStyle, "mb-[5px]", "self-start", {
        "md:self-end": index % 2 === 0,
      })}
    >
      {item}
    </div>
  );
};

export default DateMarker;
