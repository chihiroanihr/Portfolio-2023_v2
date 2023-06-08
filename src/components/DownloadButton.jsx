import React from "react";
import clsx from "clsx";
import { FiDownload } from "react-icons/fi";
import { Button, FancyButton } from "@components";
import { buttonStyle } from "@themes";
import { useDownloadFile } from "@utils";

const DownloadButton = ({ defaultStyle = true }) => {
  console.log("[Render] @components/DownloadButton.jsx");

  // PDF Path
  const pdfName = "resume_rhina-kim.pdf";
  // Handle Click Function
  const handleDownloadFile = useDownloadFile({
    fileName: pdfName,
    targetBlank: true,
  });

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
      onClick={handleDownloadFile}
    >
      <div className={clsx("flex justify-center items-center", "gap-2")}>
        <FiDownload />
        <p>Download Resume</p>
      </div>
    </Button>
  ) : (
    <FancyButton
      onClick={handleDownloadFile}
      btnStyle={buttonStyle.fancyDownloadBtnStyle}
    >
      <div className={clsx("flex justify-center items-center", "gap-2")}>
        <p>Download Resume</p>
        <FiDownload />
      </div>
    </FancyButton>
  );
};

export default React.memo(DownloadButton);
