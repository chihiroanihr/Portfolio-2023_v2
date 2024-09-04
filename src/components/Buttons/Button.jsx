import { forwardRef } from "react";
import clsx from "clsx";

const Button = forwardRef(
  ({ id, className, value, onClick, disabled = false, children }, ref) => {
    console.log("[Render] [src] @components/Buttons/Button.jsx");

    return (
      <button
        ref={ref}
        id={id}
        className={clsx(className, "cursor-pointer")}
        onClick={onClick}
        disabled={disabled}
      >
        {value ? value : children}
      </button>
    );
  }
);

export default Button;
