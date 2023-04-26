import { useMemo } from "react";
import { socialMediaPlatformsData } from "@data";

const SocialIcon = (props) => {
  // Retrieve Props
  const { href, icon: Icon, style, disabled } = props;

  // If disabled link
  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      onClick={handleClick}
      disabled={disabled}
      className={disabled ? "pointer-events-none" : ""}
    >
      <Icon
        className={`text-coffee-400 ${
          !disabled
            ? "hover:text-coffee-600 dark:hover:text-coffee-100"
            : "opacity-40"
        } transition-colors duration-200`}
        style={style}
      />
    </a>
  );
};

// Default Props
SocialIcon.defaultProps = {
  href: "#",
  icon: null,
  style: "",
  disabled: false,
};

const SocialIcons = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Memoize data array to avoid getting created on every re-render
  const memoizedSocialMediaPlatformsData = useMemo(
    () => socialMediaPlatformsData,
    []
  );

  return (
    <div
      className={`text-[45px] ${classes}
      flex flex-col justify-center items-center gap-1`}
    >
      {memoizedSocialMediaPlatformsData.map((sms) => (
        <SocialIcon
          key={sms.name}
          href={sms.href}
          icon={sms.icon}
          style={sms.style}
          disabled={sms.disabled}
        />
      ))}
    </div>
  );
};

// Default Props
SocialIcons.defaultProps = {
  classes: "",
};

export default SocialIcons;
