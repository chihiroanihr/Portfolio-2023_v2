// Credits: creme
// https://codepen.io/creme/pen/mdbpJWN

import React, { forwardRef } from "react";

const Drop = forwardRef(({ className, x, y }, ref) => {
  console.log("[Render] @layouts/DropBackground/Drop.jsx");

  const dropStyle = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div
      ref={ref}
      id="drop"
      className={`absolute -z-[1] ${className}
      will-change-auto origin-center -translate-x-1/2 -translate-y-1/2
      rounded-full blur-[1vmin] shadow-milky-drop dark:shadow-chocolate-drop
      border-0 border-solid border-milky dark:border-chocolate
      before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:m-auto
      before:w-0 before:h-0 before:rounded-full before:shadow-milky-drop before:dark:shadow-chocolate-drop
      `} // z-index set to display drops behind any other elements
      style={dropStyle}
    />
  );
});

// Re-render only when AutomaticDrop value changes
export default React.memo(Drop);
