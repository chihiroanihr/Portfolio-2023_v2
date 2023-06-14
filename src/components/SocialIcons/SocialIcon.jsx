import React from "react";
import clsx from "clsx";
import { Link } from "@components";

const SocialIcon = ({ href, icon: Icon, style, disabled, fillColor, size }) => {
  console.log("[Render] @components/SocialIcons/SocialIcon.jsx ----- Memoized");

  return (
    <Link href={href} target="_blank" disabled={disabled}>
      <Icon
        className={clsx(
          fillColor,
          size,
          disabled && "opacity-40",
          "transition-colors duration-200"
        )}
        style={style}
      />
    </Link>
  );
};

export default React.memo(SocialIcon);
