import { useContext, useRef, forwardRef, useImperativeHandle } from "react";
import clsx from "clsx";
import { ToggleModalContext, ScrollLockContext } from "@contexts";
import { useScrollBackToTop } from "@utils";

// (ScrollLock Target Ref passed as forwardRef from About.jsx)
const Modal = forwardRef(({ modalContentStyle, children }, ref) => {
  console.log("[Render] @components/Modal/Modal.jsx");

  // Node Reference
  const modalContentNodeRef = useRef(null);

  // Retrieve States from Context
  const { handleScrollLock } = useContext(ScrollLockContext);
  const { isModalOpen, handleToggleModal } = useContext(ToggleModalContext);

  // Scroll back to top when modal closed/opened in the middle of scroll
  useScrollBackToTop({
    ref: modalContentNodeRef,
    dependency: isModalOpen,
  });

  // Expose the childRef (modalContentNodeRef) to the parent component with useImperativeHandle
  // (This ref is used for ScrollToTop OnClick() Event inside TimelineModal.jsx)
  useImperativeHandle(ref, () => modalContentNodeRef.current);

  return (
    <div
      ref={ref}
      className={clsx("z-50", "fixed top-0", "w-screen", {
        "opacity-0 pointer-events-none transition-opacity delay-1000":
          !isModalOpen,
        "opacity-100": isModalOpen,
      })}
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      {/* Modal Background Overlay */}
      <div
        className={clsx(
          "fixed inset-0",
          "h-full",
          "bg-black bg-opacity-75",
          {
            "opacity-0 delay-500": !isModalOpen,
            "opacity-100": isModalOpen,
          },
          "transition-opacity duration-500"
        )}
        onClick={() => {
          handleToggleModal();
          handleScrollLock();
        }}
      />
      {/* Modal Content */}
      <div
        ref={modalContentNodeRef}
        className={clsx(
          modalContentStyle,
          "overflow-y-scroll",
          "fixed inset-0",
          "mx-auto",
          {
            "translate-y-full": !isModalOpen,
            "translate-y-0": isModalOpen,
          },
          "transition-translate duration-[800ms]"
        )}
      >
        {/* Contents */}
        {children}
      </div>
    </div>
  );
});

export default Modal;
