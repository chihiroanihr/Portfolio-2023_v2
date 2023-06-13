import { useCallback } from "react";

const useDownloadFile = ({ fileName, targetBlank = false }) => {
  const handleDownloadFile = useCallback(() => {
    // using Java Script method to get PDF file
    fetch(fileName)
      .then((response) => response.blob())
      .then((blob) => {
        // Create new object of the file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement("a");
        alink.href = fileURL;

        // ----- [Option 1] Open in New Tab ----- //
        if (targetBlank) {
          alink.target = "_blank";
          alink.rel = "noopener noreferrer"; // Security purpose
        }
        // ----- [Option 2] Directly Download ----- //
        else {
          alink.download = "fileName";
        }

        // Click Event
        alink.click();
      });
  }, [fileName]);

  return handleDownloadFile;
};

export default useDownloadFile;

// Reference: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
