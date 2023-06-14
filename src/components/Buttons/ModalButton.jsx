import { Button, FancyButton } from "@components";
import { buttonStyle } from "@themes";

const ModalButton = ({
  id,
  className,
  value,
  defaultStyle = true,
  onClick,
}) => {
  console.log("[Render] [src] @components/Buttons/ModalButton.jsx");

  return defaultStyle ? (
    <Button
      id={id}
      className={clsx(
        className,
        clsx(
          // layout style
          "rounded-full",
          "px-8 py-2",
          // effect style
          "shadow-light-btn-100 dark:shadow-dark-btn-100",
          // font style
          btnStyle.defualtModalBtnStyle.fontFamily,
          "sm:text-[24px] xs:text-[20px] text-[15px]",
          // color style
          btnStyle.defualtModalBtnStyle.bgColor,
          btnStyle.defualtModalBtnStyle.textColor,
          "transition-colors duration-200"
        )
      )}
      value={value}
      onClick={onClick}
    />
  ) : (
    <FancyButton
      id={id}
      className={className}
      value={value}
      onClick={onClick}
      btnStyle={buttonStyle.fancyModalBtnStyle}
    />
  );
};

export default ModalButton;
