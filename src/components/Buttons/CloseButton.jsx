import { useContext } from "react";
import clsx from "clsx";
import { SlClose } from "react-icons/sl";
import { Button } from "./index";
import { ToggleModalContext, ScrollLockContext } from "@contexts";

const CloseButton = ({ className }) => {
  console.log("[Render] [src] @components/Buttons/CloseButton.jsx");

  // Retrieve States from Contexts
  const { handleScrollLock } = useContext(ScrollLockContext);
  const { handleToggleModal } = useContext(ToggleModalContext);

  // ************************* CSS ************************* //
  const fillColor = clsx("fill-coffee-600 hover:fill-coffee-800");

  // ************************* JSX ************************* //
  return (
    <Button
      className={className}
      onClick={() => {
        handleScrollLock();
        handleToggleModal();
      }}
    >
      <SlClose
        className={clsx(
          "pt-[6px]",
          "text-[55px]",
          fillColor,
          // animation
          "transition-[fill] duration-200"
        )}
      />
    </Button>
  );
};

export default CloseButton;
