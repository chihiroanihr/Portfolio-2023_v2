import clsx from "clsx";

const Description = ({ id, children }) => {
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
      className={clsx("mt-[15px]", "whitespace-pre-line", descriptionTextStyle)}
    >
      {children}
    </p>
  );
};

export default Description;
