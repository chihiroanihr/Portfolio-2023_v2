// Reference:
// https://note.com/101design/n/n164943bec0d4

import { useLayoutEffect, useRef } from "react";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

const useBodyScrollLock = ({ isActive, target }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    targetRef.current = target.current;

    if (!targetRef.current) {
      return;
    }

    if (isActive) {
      disableBodyScroll(targetRef.current);
    } else {
      enableBodyScroll(targetRef.current);
    }

    return () => clearAllBodyScrollLocks();
  }, [isActive, target.current]);

  return null;
};

export default useBodyScrollLock;
