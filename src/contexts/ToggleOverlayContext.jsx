import { createContext } from "react";

// Create Context
const ToggleOverlayContext = createContext({
  isInsideOverlay: false,
});

// Provide Context
const ToggleOverlayProvider = ({ isInsideOverlay, children }) => {
  return (
    <ToggleOverlayContext.Provider value={{ isInsideOverlay }}>
      {children}
    </ToggleOverlayContext.Provider>
  );
};

export { ToggleOverlayContext, ToggleOverlayProvider };
