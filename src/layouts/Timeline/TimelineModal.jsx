import React, { useRef, useCallback } from "react";
import TimelineWorkChart from "./TimelineWorkChart";
import TimelineLifeChart from "./TimelineLifeChart";
import {
  Modal,
  CloseButton,
  DownloadButton,
  ScrollToTopButton,
} from "@components";
import { layoutStyle, colorStyle } from "@constants";

const TimelineModal = () => {
  console.log("[Render] @layouts/Timeline/TimelineModal.jsx");

  // DOM reference to modal content
  const modalContentRef = useRef(null);

  // ==== [ScrollToTopButton] Scroll Back to Top when clicked
  const handleScrollBackToTop = useCallback(() => {
    modalContentRef.current.scrollTo(0, 0);
  }, [modalContentRef]);

  return (
    <Modal
      ref={modalContentRef}
      modalContentWidth={`overflow-hidden
      ${layoutStyle.timelineModalMaxSize}
      ${colorStyle.timelineModalBgColor}
      ${colorStyle.timelineModalTextColor}`}
    >
      {/* Close Modal Button */}
      <CloseButton className="z-10 absolute right-0 m-[14px]" />

      {/* Work Chart */}
      <TimelineWorkChart className="mt-[80px]" />
      {/* Life Chart */}
      <TimelineLifeChart className="mt-[100px]" />

      {/* Other Buttons */}
      <div
        className="w-full md:my-[80px] my-[30px]
        relative flex md:flex-row flex-col justify-center items-center gap-3"
      >
        {/* Download PDF Button */}
        <DownloadButton />
        {/* Scroll Back to Top Button */}
        <ScrollToTopButton
          className="relative md:absolute md:bottom-0 right-[16px] self-end"
          onClick={handleScrollBackToTop}
        />
      </div>
    </Modal>
  );
};

export default React.memo(TimelineModal);
