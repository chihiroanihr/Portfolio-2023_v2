import { useContext, useRef, forwardRef, useImperativeHandle } from "react";
import clsx from "clsx";
import ModalBgOverlay from "./ModalBgOverlay";
import { ToggleModalContext } from "@contexts";
import { useScrollBackToTop } from "@hooks";

// (ScrollLock Target Ref passed as forwardRef from About.jsx)
const Modal = forwardRef(
  (
    {
      modalStyle = "bg-white text-coffee-800 font-default-sans",
      overlay = true,
      fullWidth = false,
      translate = false,
      direction = null,
      children,
    },
    ref
  ) => {
    console.log("[Render] [src] @components/Modal/Modal.jsx");

    // Get modal open direction string value if specified
    const directionStr = direction ? direction.trim().toLowerCase() : null;

    // Node Reference
    const modalContentNodeRef = useRef(null);

    // Retrieve States from Context
    const { isModalOpen } = useContext(ToggleModalContext);

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
        className={clsx(
          "z-50",
          "fixed top-0",
          "w-screen h-full",
          isModalOpen
            ? "opacity-100"
            : clsx(
                "opacity-0 pointer-events-none",
                translate && "transition-opacity delay-1000" // Animate if translate = true
              )
        )}
        role="dialog"
        aria-modal="true"
        tabIndex="-1"
      >
        {/* Modal Background Overlay */}
        {overlay && <ModalBgOverlay fullWidth={fullWidth} />}

        {/* Modal Content */}
        <div
          ref={modalContentNodeRef}
          className={clsx(
            "relative",
            "overflow-x-hidden",
            "overflow-y-scroll",
            // position style
            "fixed inset-0",
            "mx-auto",
            // layout style
            fullWidth ? "w-full" : "page-layout xl:w-[70%]", // modal content width
            "h-full",
            // color/font/background style
            modalStyle,
            // Animate if translate = true
            translate && // translate in y dir
              directionStr === "y" && [
                isModalOpen ? "translate-y-0" : "translate-y-full",
              ],
            translate && // translate in x dir
              directionStr === "x" && [
                isModalOpen ? "translate-x-0" : "translate-x-full",
              ],
            "transition-translate duration-[800ms]"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default Modal;
