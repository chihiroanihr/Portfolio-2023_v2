import React, { useContext, forwardRef } from "react";
import clsx from "clsx";
import { TimelineWorkChart, TimelineLifeChart } from "./index";
import {
  Modal,
  CloseButton,
  DownloadButton,
  ScrollToTopButton,
} from "@components";
import { DeviceTypeContext } from "@contexts";
import { useScrollBackToTop } from "@utils";

const TimelineModal = forwardRef(({}, modalRef) => {
  console.log("[Render] @layouts/Timeline/TimelineModal.jsx");

  // Change modal open direction depending on the device type
  const { isTouchDevice } = useContext(DeviceTypeContext);

  // ==== [ScrollToTopButton] Scroll Back to Top when clicked === //
  const handleScrollBackToTop = useScrollBackToTop({
    ref: modalRef,
    option: {
      top: 0,
      behavior: "smooth",
    },
  });

  // ************************* CSS ************************* //
  const timelineModalBgColor = "bg-coffee-100";
  const timelineModalTextColor = "text-coffee-600";
  const timelineModalTextFont = "font-default-sans";
  const timelineModalBgTexture = "bg-notebook bg-local bg-repeat";

  // ************************* JSX ************************* //
  return (
    <Modal
      ref={modalRef}
      modalStyle={clsx(
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
        <DownloadButton defaultStyle={false} />

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
});

export default React.memo(TimelineModal);
