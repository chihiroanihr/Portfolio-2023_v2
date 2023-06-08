import clsx from "clsx";

export const HorizontalLine = ({ id, className }) => (
  <hr
    id={id}
    className={clsx(
      className,
      "min-w-[10%]",
      "w-full h-[2.5px]",
      "border-0 rounded",
      "bg-coffee-400"
    )}
  />
);

export const VerticalLine = () => (
  <div className={clsx("xs:block hidden", "self-stretch", "relative")}>
    <hr
      id="vertical-line"
      className={clsx(
        "h-full w-[1px]",
        "border-0 rounded",
        "bg-coffee-600/40 dark:bg-coffee-300/30"
      )}
    />
  </div>
);
