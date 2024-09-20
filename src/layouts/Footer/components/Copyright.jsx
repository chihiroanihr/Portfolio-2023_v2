import clsx from "clsx";

const Copyright = ({ className }) => {
  const currentYear = new Date().getFullYear(); // Calculate current year

  return (
    <div
      className={clsx(
        className,
        "text-center",
        "text-[12px]",
        "font-sans font-normal"
      )}
    >
      {/* <p>
        Designed and Developed by <i>Rhina Kim</i>
      </p>
      <p className="inline-flex items-center">
        <span className="text-[14px]">&copy;</span>
        <span>{currentYear} All Rights Reserved.</span>
      </p> */}

      <p className="inline-flex items-center">
        <span className="text-[14px]">&copy;</span>
        <span>{currentYear} Rhina Kim. All Rights Reserved.</span>
      </p>
    </div>
  );
};

export default Copyright;
