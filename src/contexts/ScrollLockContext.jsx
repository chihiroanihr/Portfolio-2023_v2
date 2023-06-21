import { useState, useCallback, createContext } from "react";

// Create Context
const ScrollLockContext = createContext({
  isScrollLocked: false,
  handleScrollLock: () => {},
});

// Provide Context
const ScrollLockProvider = ({ children }) => {
  // Set Scroll Lock State
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  // Activate Scroll Lock (handle state change when clicked)
  const handleScrollLock = useCallback(
    (state) => {
      if (state) setIsScrollLocked(state);
      else setIsScrollLocked((prev) => !prev);
    },
    [isScrollLocked]
  );

  return (
    <ScrollLockContext.Provider value={{ isScrollLocked, handleScrollLock }}>
      {children}
    </ScrollLockContext.Provider>
  );
};

export { ScrollLockContext, ScrollLockProvider };
