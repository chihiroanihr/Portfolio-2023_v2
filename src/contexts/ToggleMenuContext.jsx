import { useState, useCallback, createContext } from "react";

// Create Context
const ToggleMenuContext = createContext({
  isMenuOpen: false,
  handleToggleMenu: () => {},
});

// Provide Context
const ToggleMenuProvider = ({ children }) => {
  // Set Menu Oepn State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle Menu Button
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [isMenuOpen]);

  return (
    <ToggleMenuContext.Provider value={{ isMenuOpen, handleToggleMenu }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};

export { ToggleMenuContext, ToggleMenuProvider };
