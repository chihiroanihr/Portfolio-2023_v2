import clsx from "clsx";

const Thumbnail = ({ className, items, alt }) => {
  // ************************* CSS ************************* //
  const thumbnailBgColor = "bg-coffee-300 dark:bg-coffee-600";

  const thumbnailStyle = clsx(
    thumbnailBgColor,
    // layout style
    "w-full",
    "aspect-[4/3]",
    "rounded-[10px]",
    // animate
    "[transition:background-color_700ms]", // dark mode transition
    "will-change-[background-color]"
  );

  // ************************* JSX ************************* //
  return (
    <div className={clsx(className, thumbnailStyle)}>
      {items.length > 0 && (
        <img
          src={items[0]}
          alt={alt}
          className={clsx("w-full h-full", "object-cover bg-center")}
        />
      )}
    </div>
  );
};

export default Thumbnail;
