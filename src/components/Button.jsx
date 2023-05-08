import { forwardRef } from "react";

const Button = forwardRef(({ id, className, onClick, children }, ref) => {
  console.log("[Render] @components/Button.jsx");

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} cursor-pointer`}
      onClick={onClick}
      type="button"
    >
      {children}
    </div>
  );
});

export default Button;
