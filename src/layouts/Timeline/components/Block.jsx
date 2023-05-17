import clsx from "clsx";

const Block = ({ id, index, children }) => {
  return (
    <div
      id={id}
      className={clsx(
        "relative",
        "md:mb-[28px] mb-[38px]",
        "md:w-1/2 w-full",
        "flex",
        "clear-both",
        {
          "md:ml-[8px] md:float-left md:flex-row-reverse md:text-right":
            index % 2 === 0,
          "md:mr-[8px] md:float-right": index % 2 === 1,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Block;
