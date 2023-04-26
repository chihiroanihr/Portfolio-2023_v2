// Reference: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/

import { Button } from "@components";

const DownloadButton = (props) => {
  // Retrieve Props
  const classes = props.className;

  // PDF Path
  const pdfName = "resume_rhina-kim.pdf";

  // Function will execute on click of button
  const onButtonClick = () => {
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
  };

  return (
    <Button className={classes} onClick={onButtonClick}>
      {props.children}
    </Button>
  );
};

// Default Props
DownloadButton.defaultProps = {
  classes: "",
};

export default DownloadButton;
