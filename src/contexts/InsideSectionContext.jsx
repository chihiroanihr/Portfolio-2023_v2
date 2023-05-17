import { createContext } from "react";

// Create Context
const InsideSectionContext = createContext({
  isInsideSection: false,
});

// Provide Context
const InsideSectionProvider = ({ isInsideSection, children }) => {
  return (
    <InsideSectionContext.Provider value={{ isInsideSection }}>
      {children}
    </InsideSectionContext.Provider>
  );
};

export { InsideSectionContext, InsideSectionProvider };
