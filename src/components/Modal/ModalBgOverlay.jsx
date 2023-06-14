import { useContext } from "react";
import clsx from "clsx";
import { ToggleModalContext, ScrollLockContext } from "@contexts";

const ModalBgOverlay = ({ className, fullWidth = false }) => {
  console.log("[Render] [src] @components/Modal/ModalBgOverlay.jsx");

  // Retrieve States from Context
  const { handleScrollLock } = useContext(ScrollLockContext);
  const { handleToggleModal } = useContext(ToggleModalContext);

  return (
    <div
      className={clsx(
        className,
        "fixed inset-0",
        "h-full",
        "bg-black bg-opacity-75"
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
