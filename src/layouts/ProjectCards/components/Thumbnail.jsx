import clsx from "clsx";

const Thumbnail = ({ items, alt }) => {
  // ************************* CSS ************************* //
  const thumbnailBgColor = "bg-coffee-300 dark:bg-coffee-600";

  const thumbnailStyle = clsx(
    thumbnailBgColor,
    // layout style
    "w-full",
    "xs:h-[200px] h-[150px]",
    "rounded-[10px]"
  );

  // ************************* JSX ************************* //
  return (
    <div className={thumbnailStyle}>
      {items.length > 0 && (
        <img src={items[0]} alt={alt} className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default Thumbnail;
