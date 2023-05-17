import clsx from "clsx";
import { projectCardsItemStyle } from "@themes";

const Description = ({ item, style }) => {
  // Sanitize Json String (extract links if exists)
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  const descriptionColor = projectCardsItemStyle.colorStyle.descriptionColor;
  const descriptionFont = projectCardsItemStyle.fontStyle.descriptionFont;

  const descriptionStyle = clsx(descriptionColor, descriptionFont);

  return (
    <div
      className={descriptionStyle}
      style={style}
      dangerouslySetInnerHTML={createMarkup(item)}
    />
  );
};

export default Description;
