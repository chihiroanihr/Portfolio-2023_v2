import { useContext } from "react";
import { Button } from "@components";
import { ScrollLockContext, ToggleModalContext } from "@contexts";

const ModalButton = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Scroll Lock State
  const { handleScrollLock } = useContext(ScrollLockContext);
  const { handleToggleModal } = useContext(ToggleModalContext);

  return (
    <Button
      className={classes}
      onClick={() => {
        handleToggleModal();
        handleScrollLock();
      }}
    >
      {props.children}
    </Button>
  );
};

// Default Props
ModalButton.defaultProps = {
  classes: "",
};

export default ModalButton;
