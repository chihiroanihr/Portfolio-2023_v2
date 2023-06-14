import { useContext } from "react";
import clsx from "clsx";
import { ToggleModalContext, ScrollLockContext } from "@contexts";

const ModalBgOverlay = ({ className, fullWidth = false }) => {
  console.log("[Render] [src] @components/Modal/ModalBgOverlay.jsx");

  // Retrieve States from Context
  const { handleScrollLock } = useContext(ScrollLockContext);
  const { isModalOpen, handleToggleModal } = useContext(ToggleModalContext);

  return (
    <div
      className={clsx(
        "fixed inset-0",
        "h-full",
        "bg-black bg-opacity-75",
        [isModalOpen ? "opacity-100" : "opacity-0 delay-500"],
        "transition-opacity duration-500"
      )}
      onClick={() => {
        if (!fullWidth) {
          handleToggleModal();
          handleScrollLock();
        }
      }}
    />
  );
};

export default ModalBgOverlay;
