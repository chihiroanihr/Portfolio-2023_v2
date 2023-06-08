import clsx from "clsx";
import { HorizontalLine } from "./Line";
import { SocialIconsList } from "@components";
import { socialMediaPlatformsStyle } from "@themes";

const SocialIcons = ({ id }) => (
  <div
    id={id}
    className={clsx(
      "relative",
      "w-full",
      "flex justify-center items-center",
      "xs:flex-nowrap flex-wrap"
    )}
  >
    <HorizontalLine
      id="horizontal-line-lr"
      className="xs:origin-left origin-center"
    />

    <SocialIconsList
      className={clsx(
        "w-full sm:px-5",
        "lg:scale-100 xs:scale-[0.8] scale-[0.7]"
      )}
      iconStyle={socialMediaPlatformsStyle}
      iconGap="sm:gap-x-3 gap-x-2 gap-y-1"
      direction="x"
    />

    <HorizontalLine
      id="horizontal-line-rl"
      className="xs:origin-right origin-center"
    />
  </div>
);

export default SocialIcons;
