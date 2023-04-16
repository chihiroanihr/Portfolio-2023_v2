// Reference:
// https://note.com/101design/n/n164943bec0d4

import { useLayoutEffect } from "react";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";

const useBodyScrollLock = ({ isScrollLocked, scrollLockTargetRef }) => {
  useLayoutEffect(() => {
    if (!scrollLockTargetRef.current) {
      return;
    }

    // Disable scroll other than target
    if (isScrollLocked) {
      disableBodyScroll(scrollLockTargetRef.current);
    }
    // Enable scroll other than target
    else {
      enableBodyScroll(scrollLockTargetRef.current);
    }

    // Clear all scroll locks when unmounted
    return () => clearAllBodyScrollLocks();
  }, [isScrollLocked, scrollLockTargetRef.current]);

  return null;
};

export default useBodyScrollLock;
