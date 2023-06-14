import clsx from "clsx";
import { FiDownload } from "react-icons/fi";
import { Button, FancyButton } from "./index";
import { buttonStyle } from "@themes";

const DownloadButton = ({ onClick, defaultStyle = true }) => {
  console.log("[Render] [src] @components/Buttons/DownloadButton.jsx");

  return defaultStyle ? (
    <Button
      id={id}
      className={clsx(
        className,
        clsx(
          // layout style
          "rounded-full",
          "px-8 py-2",
          // effect style
          "shadow-light-btn-100 dark:shadow-dark-btn-100",
          // font style
          btnStyle.defaultDownloadBtnStyle.fontFamily,
          "sm:text-[24px] xs:text-[20px] text-[15px]",
          // color style
          btnStyle.defaultDownloadBtnStyle.bgColor,
          btnStyle.defaultDownloadBtnStyle.textColor,
          "transition-colors duration-200"
        )
      )}
      onClick={onClick}
    >
      <div className={clsx("flex justify-center items-center", "gap-2")}>
        <FiDownload />
        <p>Download Resume</p>
      </div>
    </Button>
  ) : (
    <FancyButton onClick={onClick} btnStyle={buttonStyle.fancyDownloadBtnStyle}>
      <div className={clsx("flex justify-center items-center", "gap-2")}>
        <p>Download Resume</p>
        <FiDownload />
      </div>
    </FancyButton>
  );
};

export default DownloadButton;
