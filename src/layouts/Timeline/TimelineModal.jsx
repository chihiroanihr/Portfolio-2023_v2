import React, { forwardRef } from "react";
import clsx from "clsx";
import { TimelineWorkChart, TimelineLifeChart } from "./index";
import {
  Modal,
  CloseButton,
  DownloadButton,
  ScrollToTopButton,
} from "@components";
import { useScrollBackToTop } from "@utils";

const TimelineModal = forwardRef(({}, modalRef) => {
  console.log("[Render] @layouts/Timeline/TimelineModal.jsx");

  // ==== [ScrollToTopButton] Scroll Back to Top when clicked === //
  const { handleScrollBackToTop } = useScrollBackToTop({
    ref: modalRef,
    option: {
      top: 0,
      behavior: "smooth",
    },
  });

  // ************************* CSS ************************* //
  const timelineModalBgColor = "bg-coffee-100";
  const timelineModalTextColor = "text-coffee-800/80";
  const timelineModalTextFont = "font-serif";

  const closeButtonBgColor = "bg-coffee-600 hover:bg-coffee-800";
  const closeButtonStrokeColor = "text-coffee-100";

  const scrollToTopButtonStrokeColor = "text-coffee-600 hover:text-coffee-800";
  const scrollToTopTextFont = "font-default-sans";

  const downloadButtonBgColor = "bg-coffee-800/90 hover:bg-coffee-800";
  const downloadButtonTextColor = "text-coffee-100";
  const downloadButtonTextFont = "font-default-sans";

  // ************************* JSX ************************* //
  return (
    <Modal
      ref={modalRef}
      modalContentStyle={clsx(
        "page-layout xl:w-[70%]",
        "overflow-hidden",
        timelineModalBgColor,
        timelineModalTextColor,
        timelineModalTextFont
      )}
    >
      {/* Close Modal Button */}
      <CloseButton
        className={clsx("z-10", "m-[14px]", "absolute right-0")}
        bgColor={closeButtonBgColor}
        strokeColor={closeButtonStrokeColor}
      />

      {/* Work Chart */}
      <TimelineWorkChart className="mt-[80px]" />
      {/* Life Chart */}
      <TimelineLifeChart className="mt-[100px]" />

      {/* Other Buttons */}
      <div
        className={clsx(
          "md:my-[80px] my-[30px]",
          "relative",
          "w-full",
          "flex md:flex-row flex-col justify-center items-center",
          "gap-3"
        )}
      >
        {/* Download PDF Button */}
        <DownloadButton
          bgColor={downloadButtonBgColor}
          textColor={downloadButtonTextColor}
          fontType={downloadButtonTextFont}
        />
        {/* Scroll Back to Top Button */}
        <ScrollToTopButton
          className={clsx(
            "relative md:absolute",
            "md:bottom-0 right-[16px]",
            "self-end"
          )}
          strokeColor={scrollToTopButtonStrokeColor}
          fontType={scrollToTopTextFont}
          onClick={handleScrollBackToTop}
        />
      </div>
    </Modal>
  );
});

export default React.memo(TimelineModal);
