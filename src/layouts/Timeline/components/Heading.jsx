import clsx from "clsx";

const Heading = ({ id, children }) => {
  // ************************* CSS ************************* //
  const headingTextStyle = "md:text-[44px] xs:text-[32px] text-[28px]";

  // ************************* JSX ************************* //
  return (
    <h1
      id={id}
      className={clsx(
        "text-center",
        "sm:px-[50px] px-[30px]",
        headingTextStyle
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
