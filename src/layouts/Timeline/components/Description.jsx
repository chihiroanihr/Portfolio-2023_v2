import clsx from "clsx";

const Description = ({ id, index, item }) => {
  // ************************* CSS ************************* //
  const descriptionTextStyle = clsx(
    "whitespace-pre-line",
    "sm:text-[14px] xs:text-[13px] text-[12px]",
    "tracking-wide"
  );

  // ************************* JSX ************************* //
  return (
    <p
      id={id}
      className={clsx(
        "mt-[15px]",
        index % 2 === 0 ? "md:pl-[40px]" : "md:pr-[40px]",
        "whitespace-pre-line",
        descriptionTextStyle
      )}
    >
      {item}
    </p>
  );
};

export default Description;
