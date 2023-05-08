import { useContext, useEffect, useRef, forwardRef } from "react";
import { ScrollLockContext, ToggleModalContext } from "@contexts";
import { useBodyScrollLock } from "@utils";

const Modal = forwardRef(({ modalContentWidth, children }, ref) => {
  console.log("[Render] @components/Modal/Modal.jsx");

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

  // Scroll back to top when modal closed/opened in the middle of scroll
  useEffect(() => {
    ref.current.scrollTo(0, 0);
  }, [isModalOpen]);

  return (
    <div
      ref={scrollLockTargetRef}
      className={`fixed top-0 w-screen z-50 ${
        isModalOpen
          ? "opacity-100"
          : "opacity-0 pointer-events-none transition-opacity delay-1000"
      }`}
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      {/* Modal Background Overlay */}
      <div
        className={`fixed inset-0 h-full bg-black bg-opacity-75 ${
          isModalOpen ? "opacity-100" : "opacity-0 delay-500"
        } transition-opacity duration-500`}
        onClick={() => {
          handleToggleModal();
          handleScrollLock();
        }}
      />
      {/* Modal Content */}
      <div
        ref={ref}
        className={`fixed inset-0 mx-auto overflow-y-scroll ${modalContentWidth} ${
          isModalOpen ? "translate-y-0" : "translate-y-full"
        } transition-translate duration-[800ms]`}
      >
        {/* Contents */}
        {children}
      </div>
    </div>
  );
});

export default Modal;
