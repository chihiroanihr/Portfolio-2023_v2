import React, { useCallback } from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "@components";
import { colorStyle, buttonStyle } from "@constants";

const DownloadButton = () => {
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
      className={`
      ${colorStyle.timelineModalDownloadBtnColor}
      ${colorStyle.timelineModalDownloadBtnTextColor}
      ${buttonStyle.timelineModalDownloadBtnStyle}
      flex justify-center items-center gap-2`}
      onClick={onButtonClick}
    >
      <FiDownload />
      <p>Download Resume</p>
    </Button>
  );
};

export default React.memo(DownloadButton);

// Reference: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
