import { forwardRef } from "react";
import clsx from "clsx";

const Button = forwardRef(
  ({ id, className, value, onClick, children }, ref) => {
    console.log("[Render] @components/Button.jsx");

    return (
      <button
        ref={ref}
        id={id}
        className={clsx(className, "cursor-pointer")}
        onClick={onClick}
      >
        {value ? value : children}
      </button>
    );
  }
);

export default Button;
