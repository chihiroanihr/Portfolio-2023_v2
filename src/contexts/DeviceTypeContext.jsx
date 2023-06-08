import { useMemo, useState, useEffect, createContext } from "react";

const DeviceTypeContext = createContext({ isTouchDevice: false });

const DeviceTypeProvider = ({ children }) => {
  // Set Device Type State
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Define Device Type On Load
  useEffect(() => {
    if (
      "maxTouchPoints" in navigator ||
      "msMaxTouchPoints" in navigator ||
      "ontouchstart" in window ||
      "orientation" in window
    ) {
      setIsTouchDevice(
        "ontouchstart" in window ||
          "orientation" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    } else {
      const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        setIsTouchDevice(!!mQ.matches);
      } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        setIsTouchDevice(
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
      }
    }
  }, []);

  // Memoize
  const contextValue = useMemo(
    () => ({ isTouchDevice, setIsTouchDevice }),
    [isTouchDevice]
  );

  return (
    <DeviceTypeContext.Provider value={contextValue}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

export { DeviceTypeContext, DeviceTypeProvider };

// Reference: Volodymyr Hudyma
// https://vhudyma-blog.eu/detect-mobile-device-in-react/
