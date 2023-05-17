import clsx from "clsx";

const Thumbnail = ({ item }) => {
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
  return <div item={item} className={thumbnailStyle} />;
};

export default Thumbnail;
