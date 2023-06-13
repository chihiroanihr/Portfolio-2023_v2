import { useState, useCallback, useEffect } from "react";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";

const useBodyScrollLock = (ref, option) => {
  console.log("[Render] [hooks] useBodyScrollLock.js");

  const [isScrollLocked, setIsScrollLocked] = useState(false);

  // Activate Scroll Lock (handle state change when clicked)
  const handleScrollLock = useCallback(
    (state) => {
      if (state) setIsScrollLocked(state);
      else setIsScrollLocked((prev) => !prev);
    },
    [isScrollLocked]
  );

  useEffect(() => {
    if (!ref.current) return;

    // Disable scroll other than target
    if (isScrollLocked) disableBodyScroll(ref.current, option);
    // Enable scroll other than target
    else enableBodyScroll(ref.current);

    // Clear all scroll locks when unmounted
    return () => clearAllBodyScrollLocks();
  }, [isScrollLocked, ref, option]);

  return { isScrollLocked, handleScrollLock };
};

export default useBodyScrollLock;

// Reference:
// https://note.com/101design/n/n164943bec0d4
