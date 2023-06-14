// Credits: creme
// https://codepen.io/creme/pen/mdbpJWN

import React, { forwardRef } from "react";
import clsx from "clsx";

const Drop = forwardRef(({ className, x, y }, ref) => {
  console.log("[Render] [src] @layouts/DropBackground/Drop.jsx ----- Memoized");

  const dropStyle = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div
      ref={ref}
      id="drop"
      className={clsx(
        className,
        "-z-[1]", // z-index set to display drops behind any other elements
        "will-change-drop origin-center",
        // Outer Drop Circle Style
        "absolute -translate-x-1/2 -translate-y-1/2",
        "rounded-full", // w-[100vmin] h-[100vmin]
        "border-0 border-solid border-milky dark:border-chocolate",
        "blur-[1vmin] shadow-milky-drop dark:shadow-chocolate-drop",
        // Inner Drop Circle Style
        "before:content-['']",
        "before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0",
        "before:m-auto",
        "before:w-0 before:h-0",
        "before:rounded-full",
        "before:shadow-milky-drop before:dark:shadow-chocolate-drop"
      )}
      style={dropStyle}
    />
  );
});

// Re-render only when AutomaticDrop value changes
export default React.memo(Drop);
