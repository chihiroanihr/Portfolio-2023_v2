import clsx from "clsx";
import { sanitizeMarkup } from "@utils";

const Description = ({ className, item }) => {
  // ************************* CSS ************************* //
  const descriptionTextColor = "text-coffee-600/70 dark:text-coffee-300/80";
  const descriptionTextFont = "xs:text-[14px] text-[12px]";

  // ************************* JSX ************************* //
  return (
    <div
      className={clsx(className, descriptionTextColor, descriptionTextFont)}
      dangerouslySetInnerHTML={sanitizeMarkup(item)}
    />
  );
};

export default Description;
