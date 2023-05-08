import React from "react";
import { Link } from "@components";
import { colorStyle } from "@constants";

const SocialIcon = ({ href, icon: Icon, style, disabled }) => {
  console.log("[Render] @components/SocialIcons/SocialIcon.jsx");

  return (
    <Link href={href} target="_blank" disabled={disabled}>
      <Icon
        className={`${colorStyle.socialIconColor} ${
          !disabled ? colorStyle.socialIconHoverColor : "opacity-40"
        } transition-colors duration-200`}
        style={style}
      />
    </Link>
  );
};

export default React.memo(SocialIcon);
