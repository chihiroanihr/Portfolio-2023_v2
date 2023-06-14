import clsx from "clsx";

const Card = ({ id, className, children }) => {
  console.log("[Render] @components/Card.jsx");

  return (
    <div
      id={id}
      className={clsx(
        className,
        "sm:px-[35px] xs:px-[30px] px-[25px]",
        "sm:py-[40px] xs:py-[35px] py-[30px]",
        "shadow-xl",
        "flex flex-col justify-center"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
