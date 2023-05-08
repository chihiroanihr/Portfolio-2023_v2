import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@components";
import { ScrollLockContext, ToggleModalContext } from "@contexts";
import { colorStyle, buttonStyle } from "@constants";

const CloseButton = ({ className }) => {
  console.log("[Render] @components/CloseButton.jsx");

  // Retrieve Scroll Lock State
  const { handleScrollLock } = useContext(ScrollLockContext);
  const { handleToggleModal } = useContext(ToggleModalContext);

  return (
    <Button
      className={className}
      onClick={() => {
        handleScrollLock();
        handleToggleModal();
      }}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className={`
         ${buttonStyle.timelineModalCloseBtnStyle}
         ${colorStyle.timelineModalCloseBtnColor}
         ${colorStyle.timelineModalCloseBtnTextColor}
         transition-colors duration-200`}
      />
    </Button>
  );
};

export default React.memo(CloseButton);
