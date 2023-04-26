import { useContext, useRef } from "react";
import { ScrollLockContext, ToggleModalContext } from "@contexts";
import { useBodyScrollLock } from "@utils";

const Modal = (props) => {
  // Retrieve Props
  const modalContentWidth = props.modalContentWidth;

  // Retrieve Handle Toggle Modal State
  const { isModalOpen, handleToggleModal } = useContext(ToggleModalContext);

  // Retrieve Scroll Lock State
  const { isScrollLocked, handleScrollLock } = useContext(ScrollLockContext);
  // DOM Reference to activate scroll lock
  const scrollLockTargetRef = useRef(null);
  // Function to execute scroll lock on the target reference
  useBodyScrollLock({
    isScrollLocked,
    scrollLockTargetRef,
    allowTouchMove: true,
  });

  return (
    <div
      ref={scrollLockTargetRef}
      className={`${isModalOpen ? "block" : "hidden"} fixed top-0 w-screen z-50
      `}
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      {/* Modal Background */}
      <div
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity h-full"
        onClick={() => {
          handleToggleModal();
          handleScrollLock();
        }}
      />
      {/* Modal Content */}
      <div className={`fixed inset-0 mx-auto ${modalContentWidth}`}>
        {/* Contents */}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
