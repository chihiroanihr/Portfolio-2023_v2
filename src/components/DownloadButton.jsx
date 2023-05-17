import React, { useCallback } from "react";
import clsx from "clsx";
import { FiDownload } from "react-icons/fi";
import { Button } from "@components";

const DownloadButton = ({ bgColor, textColor, fontType }) => {
  console.log("[Render] @components/DownloadButton.jsx");

  // PDF Path
  const pdfName = "resume_rhina-kim.pdf";

  // Function will execute on click of button
  const onButtonClick = useCallback(() => {
    // using Java Script method to get PDF file
    fetch(pdfName).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;

        // ----- [Option 1] Open in New Tab ----- //
        alink.target = "_blank";
        alink.rel = "noreferrer";

        // ----- [Option 2] Directly Download ----- //
        // alink.download = "pdfName";

        // Click Event
        alink.click();
      });
    });
  }, []);

  return (
    <Button
      className={clsx(
        // layout style
        "rounded-full",
        "px-8 py-2",
        // effect style
        "shadow-light-btn-100 dark:shadow-dark-btn-100",
        // font style
        fontType,
        "sm:text-[24px] xs:text-[20px] text-[15px]",
        // color style
        bgColor,
        textColor,
        // child positioning
        "flex justify-center items-center",
        "gap-2"
      )}
      onClick={onButtonClick}
    >
      <FiDownload />
      <p>Download Resume</p>
    </Button>
  );
};

export default React.memo(DownloadButton);

// Reference: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
