import { forwardRef } from "react";
import { buttonStyle } from "@constants/buttonStyle";

// !! forwardRef expects a function that accepts props and ref as arguments, thus destructuring is a recommended approach
const DarkLightButton = forwardRef(
  ({ handleToggleDarkMode, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className} ${buttonStyle.darkLightBtnStyle} cursor-pointer`}
        onClick={handleToggleDarkMode}
      >
        <svg
          className="w-10 fill-transparent dark:fill-yellow-400 stroke-coffee-600 dark:stroke-yellow-400
          transition-all duration-500"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    );
  }
);

// !! Assign the default value to prevent errors when they are not passed by the parent component.
DarkLightButton.defaultProps = { handleToggleDarkMode: null, className: "" };

export default DarkLightButton;
