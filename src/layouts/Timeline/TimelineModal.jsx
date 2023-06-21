import { useRef, useContext } from "react";
import clsx from "clsx";
import { TimelineWorkChart, TimelineLifeChart } from "./index";
import {
  Modal,
  CloseButton,
  DownloadButton,
  ScrollToTopButton,
} from "@components";
import { DeviceTypeContext, ToggleModalContext } from "@contexts";
import { useScrollBackToTop, useDownloadFile } from "@hooks";

const TimelineModal = () => {
  console.log("[Render] [src] @layouts/Timeline/TimelineModal.jsx");

  // Node Reference
  const modalNodeRef = useRef(null);

  // Retrieve States from Context
  const { isModalOpen } = useContext(ToggleModalContext);
  // Change modal open direction depending on the device type
  const { isTouchDevice } = useContext(DeviceTypeContext);

  // ==== [ScrollToTopButton] Scroll Back to Top when clicked === //
  const handleScrollBackToTop = useScrollBackToTop({
    ref: modalNodeRef,
    option: {
      top: 0,
      behavior: "smooth",
    },
  });

  // ======== [DownloadButton] Download file when clicked ======= //
  const PDF_NAME = "resume_rhina-kim.pdf";

  // Handle Click Function
  const handleDownloadFile = useDownloadFile({
    fileName: PDF_NAME,
    targetBlank: true,
  });

  // ************************* CSS ************************* //
  const timelineModalBgColor = "bg-coffee-100";
  const timelineModalTextColor = "text-coffee-600";
  const timelineModalTextFont = "font-default-sans";
  const timelineModalBgTexture = "bg-notebook bg-local bg-repeat";

  // ************************* JSX ************************* //
  return (
    <Modal
      ref={modalNodeRef}
      modalStyle={clsx(
        isModalOpen
          ? "opacity-100 delay-500 duration-[1s]"
          : "opacity-0 duration-500",
        timelineModalTextFont,
        timelineModalBgColor,
        timelineModalTextColor,
        timelineModalBgTexture
      )}
      overlay={true}
      fullWidth={true}
      translate={true}
      direction={isTouchDevice ? "y" : "x"}
    >
      {/* Close Modal Button */}
      <CloseButton className={clsx("z-10", "m-[14px]", "absolute right-0")} />

      {/* Work Chart */}
      <TimelineWorkChart className="mt-[80px]" />
      {/* Life Chart */}
      <TimelineLifeChart className="md:mt-[100px] mt-[80px]" />

      {/* Other Buttons */}
      <div
        className={clsx(
          "md:my-[80px] my-[30px]",
          "relative",
          "w-full",
          "flex md:flex-row flex-col justify-center items-center",
          "gap-x-3 gap-y-5"
        )}
      >
        {/* Download PDF Button */}
        <DownloadButton defaultStyle={false} onClick={handleDownloadFile} />

        {/* Scroll Back to Top Button */}
        <ScrollToTopButton
          className={clsx(
            "relative md:absolute",
            "md:bottom-0 right-[16px]",
            "self-end"
          )}
          onClick={handleScrollBackToTop}
        />
      </div>
    </Modal>
  );
};

export default TimelineModal;
