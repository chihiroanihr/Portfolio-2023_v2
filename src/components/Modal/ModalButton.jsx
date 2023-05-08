import { useContext } from "react";
import { Button } from "@components";
import { ScrollLockContext, ToggleModalContext } from "@contexts";
import { colorStyle, buttonStyle } from "@constants";

const ModalButton = ({ id, className, children }) => {
  console.log("[Render] @components/Modal/ModalButton.jsx");

  // Retrieve Scroll Lock State
  const { handleScrollLock } = useContext(ScrollLockContext);
  const { handleToggleModal } = useContext(ToggleModalContext);

  return (
    <Button
      id={id}
      className={`${className}
      ${buttonStyle.timelineModalOpenBtnStyle}
      ${colorStyle.timelineModalOpenBtnColor}
      ${colorStyle.timelineModalOpenBtnTextColor}
      transition-colors duration-200`}
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
