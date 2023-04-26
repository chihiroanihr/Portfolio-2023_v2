import { CgCloseR } from "react-icons/cg";
import {
  Modal,
  ModalButton,
  TimelineWorkChart,
  TimelineLifeChart,
} from "@components";

const TimelineModal = () => {
  return (
    <Modal modalContentWidth="xl:w-[70%] max-w-screen-xxxl">
      {/* Close Modal Button */}
      <ModalButton className="absolute right-0 z-10">
        <CgCloseR size={50} className="m-[12px] text-coffee-600" />
      </ModalButton>
      {/* Modal Content */}
      <div className="max-w-screen-xxxl w-full h-full py-[50px] overflow-y-scroll bg-coffee-100">
        <TimelineWorkChart />
        <TimelineLifeChart className="mt-[150px]" />
      </div>
    </Modal>
  );
};

export default TimelineModal;
