// Reference:
// https://note.com/101design/n/n164943bec0d4

import { useLayoutEffect } from "react";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";

const useBodyScrollLock = ({
  isScrollLocked,
  scrollLockTargetRef,
  allowTouchMove = false,
}) => {
  useLayoutEffect(() => {
    if (!scrollLockTargetRef.current) {
      return;
    }

    // Disable scroll other than target
    if (isScrollLocked) {
      if (allowTouchMove) {
        disableBodyScroll(scrollLockTargetRef.current, {
          allowTouchMove: true,
        });
      }
      disableBodyScroll(scrollLockTargetRef.current);
    }
    // Enable scroll other than target
    else {
      enableBodyScroll(scrollLockTargetRef.current);
    }

    // Clear all scroll locks when unmounted
    return () => clearAllBodyScrollLocks();
  }, [isScrollLocked, scrollLockTargetRef]);

  return null;
};

export default useBodyScrollLock;
