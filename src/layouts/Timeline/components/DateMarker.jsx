import clsx from "clsx";

const DateMarker = ({ id, index, children }) => {
  // ************************* CSS ************************* //
  const dateMarkerBgcolor = "bg-coffee-800/90";
  const dateMarkerBorderColor = "ring-coffee-300";
  const dateMarkerTextColor = "text-coffee-100";

  const dateMarkerStyle = clsx(
    // layout
    "rounded-full",
    "px-[16px] py-[6px]",
    "ring",
    // font
    "text-[16px]",
    // color
    dateMarkerBgcolor,
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
      {children}
    </div>
  );
};

export default DateMarker;
