import React, { useContext } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@components";
import { ToggleModalContext, ScrollLockContext } from "@contexts";

const CloseButton = ({ className, bgColor, strokeColor }) => {
  console.log("[Render] @components/CloseButton.jsx");

  // Retrieve States from Contexts
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
        className={clsx(
          // layout
          "rounded-lg",
          "aspect-square",
          "p-[6px]",
          // font size
          "text-[32px]",
          // color
          "transition-colors duration-200",
          bgColor,
          strokeColor
        )}
      />
    </Button>
  );
};

export default React.memo(CloseButton);
