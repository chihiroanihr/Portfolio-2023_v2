import clsx from "clsx";

const Description = ({ className, item }) => {
  // Sanitize Json String (extract links if exists)
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  // ************************* CSS ************************* //
  const descriptionTextColor = "text-coffee-600/70 dark:text-coffee-300/80";
  const descriptionTextFont = "xs:text-[14px] text-[12px]";

  // ************************* JSX ************************* //
  return (
    <div
      className={clsx(className, descriptionTextColor, descriptionTextFont)}
      dangerouslySetInnerHTML={createMarkup(item)}
    />
  );
};

export default Description;
