import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FiDownload } from "react-icons/fi";
import { TimelineWorkChart, TimelineLifeChart } from "@layouts";
import { Modal, ModalButton, DownloadButton } from "@components";
import { buttonStyle } from "@constants";

const TimelineModal = () => {
  return (
    <Modal modalContentWidth="xl:w-[70%] max-w-screen-xxxl overflow-hidden bg-coffee-100">
      {/* Close Modal Button */}
      <ModalButton className="absolute right-0 z-10 m-[14px]">
        <FontAwesomeIcon
          icon={faXmark}
          className="p-[6px] xl:text-[24px] text-[32px] aspect-square rounded-lg
          text-coffee-100 bg-coffee-600 hover:bg-coffee-800 transition-colors duration-200"
        />
      </ModalButton>

      {/* Modal Content */}
      <div className="py-[80px]">
        <TimelineWorkChart />
        <TimelineLifeChart className="mt-[100px]" />

        {/* Download PDF Button */}
        <div className="flex justify-center items-center">
          <DownloadButton
            className={`flex items-center gap-2 ${buttonStyle.aboutModalDownloadBtnStyle}`}
          >
            <FiDownload />
            <p>Download Resume</p>
          </DownloadButton>
        </div>
      </div>
    </Modal>
  );
};

export default TimelineModal;
