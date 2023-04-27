import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FiDownload } from "react-icons/fi";
import { SlArrowUpCircle } from "react-icons/sl";
import { TimelineWorkChart, TimelineLifeChart } from "@layouts";
import {
  Modal,
  ModalButton,
  DownloadButton,
  ScrollToTopButton,
} from "@components";
import { buttonStyle } from "@constants";

const TimelineModal = () => {
  // DOM reference to modal content
  const modalContentRef = useRef(null);

  return (
    <Modal
      ref={modalContentRef}
      modalContentWidth="xl:w-[70%] max-w-screen-xxxl overflow-hidden bg-coffee-100"
    >
      {/* Close Modal Button */}
      <ModalButton className="absolute right-0 z-10 m-[14px]">
        <FontAwesomeIcon
          icon={faXmark}
          className="p-[6px] text-[32px] aspect-square rounded-lg
          text-coffee-100 bg-coffee-600 hover:bg-coffee-800 transition-colors duration-200"
        />
      </ModalButton>

      {/* Modal Content */}
      <div className="py-[80px]">
        <TimelineWorkChart />
        <TimelineLifeChart className="mt-[100px]" />

        <div className="mt-[80px] flex justify-end items-center">
          {/* Download PDF Button */}
          <div className="w-full flex justify-center items-center">
            <DownloadButton
              className={`flex items-center gap-2 ${buttonStyle.aboutModalDownloadBtnStyle}`}
            >
              <FiDownload />
              <p>Download Resume</p>
            </DownloadButton>
          </div>

          {/* Scroll Back to Top Button */}
          <ScrollToTopButton
            parentRef={modalContentRef}
            className="absolute right-[14px]
            flex flex-col items-center
          text-coffee-600 hover:text-coffee-800 transition-colors duration-200"
          >
            <p className="font-default-sans font-semibold text-[12px] tracking-widest">
              TOP
            </p>
            <SlArrowUpCircle className="text-[50px]" />
          </ScrollToTopButton>
        </div>
      </div>
    </Modal>
  );
};

export default TimelineModal;
