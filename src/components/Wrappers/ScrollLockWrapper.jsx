import { useContext, forwardRef } from "react";
import clsx from "clsx";
import { RemoveScroll } from "react-remove-scroll";
import { ScrollLockContext } from "@contexts";

const ScrollLockWrapper = forwardRef(({ className, children }, ref) => {
  const { isScrollLocked } = useContext(ScrollLockContext);

  return (
    <RemoveScroll
      ref={ref}
      enabled={isScrollLocked}
      className={clsx(className, "overscroll-none")}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {children}
    </RemoveScroll>
  );
});

export default ScrollLockWrapper;
