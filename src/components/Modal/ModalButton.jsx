import { useContext } from "react";
import clsx from "clsx";
import { Button } from "@components";
import { ToggleModalContext, ScrollLockContext } from "@contexts";

const ModalButton = ({ id, className, children }) => {
  console.log("[Render] @components/Modal/ModalButton.jsx");

  // Retrieve States from Contexts
  const { handleToggleModal } = useContext(ToggleModalContext);
  const { handleScrollLock } = useContext(ScrollLockContext);

  const modalOpenBtnFontType = "font-default-sans";
  const modalOpenBtnBgColor =
    "bg-coffee-600 hover:bg-coffee-800 dark:bg-coffee-300 dark:hover:bg-coffee-100";
  const modalOpenBtnTextColor = "text-coffee-100 dark:text-coffee-800";

  return (
    <Button
      id={id}
      className={clsx(
        className,
        // layout style
        "rounded-full",
        "px-8 py-2",
        // effect style
        "shadow-light-btn-100 dark:shadow-dark-btn-100",
        // font style
        modalOpenBtnFontType,
        "sm:text-[24px] xs:text-[20px] text-[15px]",
        // color style
        modalOpenBtnBgColor,
        modalOpenBtnTextColor,
        "transition-colors duration-200"
      )}
      onClick={() => {
        handleToggleModal();
        handleScrollLock();
      }}
    >
      {children}
    </Button>
  );
};

export default ModalButton;
