import React, { useMemo, useRef } from "react";
import clsx from "clsx";
import SocialIcon from "./SocialIcon";
import { socialMediaPlatformsListData } from "@data";

// iconStyle varies depending on the section
const SocialIconsList = ({ id, className, iconStyle, iconGap, direction }) => {
  console.log("[Render] @components/SocialIconsList/SocialIconListItems.jsx");

  // CSS
  const iconSize = iconStyle.iconSize;
  const iconFillColor = iconStyle.iconFillColor;
  const iconHoverFillColor = iconStyle.iconHoverFillColor;

  // Alignment Direction
  const vertical = direction.trim().toLowerCase() === "y" ? true : false;

  // Memoize to avoid getting created on every re-render
  const memoizedSocialIconListItems = useMemo(() => {
    return socialMediaPlatformsListData.map((sms) => (
      <SocialIcon
        key={sms.name}
        href={sms.href}
        icon={sms.icon}
        style={iconStyle.icon[sms.name]}
        disabled={
          !sms.href || // when href is none
          sms.href.trim().length === 0 // when href is empty string
        }
        fillColor={clsx(iconFillColor, iconHoverFillColor)}
        size={iconSize}
      />
    ));
  }, [socialMediaPlatformsListData, iconStyle]);

  // Memoize and divide icons row if many icons rendered
  const memoizedSocialIconListItemsWrapped = useMemo(() => {
    const maxIconsInRow = Math.floor(socialMediaPlatformsListData.length / 2);

    return (
      socialMediaPlatformsListData
        // Group the SocialIcon elements into arrays of three
        .reduce((result, sms, index) => {
          const groupIndex = Math.floor(index / maxIconsInRow);

          // For every three elements, a new array is created using result.push([])
          if (index % maxIconsInRow === 0) {
            result.push([]);
          }

          // Push each SocialIcon element into its corresponding group array.
          result[groupIndex].push(
            <SocialIcon
              key={sms.name}
              href={sms.href}
              icon={sms.icon}
              style={iconStyle.icon[sms.name]}
              disabled={!sms.href || sms.href.trim().length === 0}
              fillColor={clsx(iconFillColor, iconHoverFillColor)}
              size={iconSize}
            />
          );

          return result;
        }, [])

        // Render a div element for each group, and render the SocialIcon elements within each group.
        .map((group, index) => (
          <div
            className={clsx(
              "flex flex-row justicy-center items-center",
              iconGap
            )}
            key={index}
          >
            {group}
          </div>
        ))
    );
  }, [socialMediaPlatformsListData, iconStyle]);

  const wrapIcons = !vertical && socialMediaPlatformsListData.length > 6;

  return (
    <div
      id={id}
      className={clsx(
        className,
        "flex justify-center items-center",
        vertical // if vertical alignment
          ? "flex-col"
          : wrapIcons // if horizontal alignment
          ? "flex-wrap" // if too many icons then flex-wrap
          : "xs:flex-nowrap flex-wrap",
        iconGap
      )}
    >
      {
        wrapIcons
          ? memoizedSocialIconListItemsWrapped // if horizontal alignment and too many icons then return flex-wrapped icon lists
          : memoizedSocialIconListItems // otherwise return normal icon lists
      }
    </div>
  );
};

export default React.memo(SocialIconsList);
