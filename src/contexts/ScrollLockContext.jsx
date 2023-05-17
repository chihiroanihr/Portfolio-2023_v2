import { createContext } from "react";

// Create Context
const ScrollLockContext = createContext({
  handleScrollLock: () => {},
});

// Provide Context
const ScrollLockProvider = ({ handleScrollLock, children }) => {
  return (
    <ScrollLockContext.Provider value={{ handleScrollLock }}>
      {children}
    </ScrollLockContext.Provider>
  );
};

export { ScrollLockContext, ScrollLockProvider };
