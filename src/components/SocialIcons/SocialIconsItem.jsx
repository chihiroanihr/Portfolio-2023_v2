import React from "react";
import SocialIcon from "./SocialIcon";
import { socialMediaPlatformsData } from "@data";

// Memoize to avoid getting created on every re-render
const MemoizedSocialIcon = React.memo(({ sms }) => (
  <SocialIcon
    key={sms.name}
    href={sms.href}
    icon={sms.icon}
    style={sms.style}
    disabled={sms.disabled}
  />
));

const SocialIconsItem = ({ id, className }) => {
  console.log("[Render] @components/SocialIcons/SocialIconListItems.jsx");

  return (
    <div
      id={id}
      className={`${className} text-[45px]
      flex flex-col justify-center items-center gap-2`}
    >
      {socialMediaPlatformsData.map((sms) => (
        <MemoizedSocialIcon key={sms.name} sms={sms} />
      ))}
    </div>
  );
};

export default React.memo(SocialIconsItem);
