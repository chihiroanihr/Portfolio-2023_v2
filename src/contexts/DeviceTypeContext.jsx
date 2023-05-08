import React, { useState, useEffect, createContext } from "react";

const DeviceTypeContext = createContext({ isTouchDevice: false });

const DeviceTypeProvider = ({ children }) => {
  // Set Device Type State
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Define Device Type On Load
  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
  }, []);

  return (
    <DeviceTypeContext.Provider value={{ isTouchDevice, setIsTouchDevice }}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

export { DeviceTypeContext, DeviceTypeProvider };
