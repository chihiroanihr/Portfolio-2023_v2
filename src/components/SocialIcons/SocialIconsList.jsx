import React, { useMemo } from "react";
import clsx from "clsx";
import SocialIcon from "./SocialIcon";
import { socialMediaPlatformsListData } from "@data";

const SocialIconsList = ({ id, className }) => {
  console.log("[Render] @components/SocialIconsList/SocialIconListItems.jsx");

  const iconListSize = "text-[45px]";

  // Memoize to avoid getting created on every re-render
  const memoizedSocialIconListItems = useMemo(() => {
    return socialMediaPlatformsListData.map((sms) => (
      <SocialIcon
        key={sms.name}
        href={sms.href}
        icon={sms.icon}
        style={sms.style}
        disabled={sms.disabled}
      />
    ));
  }, [socialMediaPlatformsListData]);

  return (
    <div
      id={id}
      className={clsx(
        className,
        iconListSize,
        "flex flex-col justify-center items-center",
        "gap-2"
      )}
    >
      {memoizedSocialIconListItems}
    </div>
  );
};

export default React.memo(SocialIconsList);
