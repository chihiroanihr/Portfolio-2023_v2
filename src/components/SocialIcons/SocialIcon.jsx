import React from "react";
import clsx from "clsx";
import { Link } from "@components";

const SocialIcon = ({ href, icon: Icon, style, disabled }) => {
  console.log("[Render] @components/SocialIconsList/SocialIcon.jsx");

  const socialIconColor = "text-coffee-400";
  const socialIconHoverColor =
    "hover:text-coffee-600 dark:hover:text-coffee-100";

  return (
    <Link href={href} target="_blank" disabled={disabled}>
      <Icon
        className={clsx(
          socialIconColor,
          socialIconHoverColor,
          disabled && "opacity-40",
          "transition-colors duration-200"
        )}
        style={style}
      />
    </Link>
  );
};

export default React.memo(SocialIcon);
