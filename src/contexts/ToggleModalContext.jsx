import { useState, useCallback, createContext } from "react";

// Create Context
const ToggleModalContext = createContext({
  isModalOpen: false,
  handleToggleModal: () => {},
});

// Provide Context
const ToggleModalProvider = ({ children }) => {
  // Set Modal Oepn State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle Modal Button
  const handleToggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, [isModalOpen]);

  return (
    <ToggleModalContext.Provider value={{ isModalOpen, handleToggleModal }}>
      {children}
    </ToggleModalContext.Provider>
  );
};

export { ToggleModalContext, ToggleModalProvider };
