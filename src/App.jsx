import { useCallback, useLayoutEffect, useState } from "react";
import { Home, About, Works, Galleries, Contact, Footer } from "./pages";
import { Loader, Navbar, DarkLight } from "./components";

function App() {
  // Page Loading State
  const [isPageLoading, setIsPageLoading] = useState(true);
  useLayoutEffect(() => {
    const setIsPageLoadingHandle = () => setIsPageLoading(false);
    if (document.readyState === "complete") {
      setIsPageLoadingHandle();
    } else {
      window.addEventListener("load", setIsPageLoadingHandle);
      return () => {
        window.removeEventListener("load", setIsPageLoadingHandle);
      };
    }
  }, []);

  // Page Loaded (Loader Hidden) State
  const [isLoaderHidden, setIsLoaderHidden] = useState(false);

  // Play Animation State
  const [playAnimation, setPlayAnimation] = useState(false);
  useLayoutEffect(() => {
    let timeoutId;
    if (isLoaderHidden) {
      setPlayAnimation(true);
      timeoutId = setTimeout(() => {
        // allow scroll
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoaderHidden]);

  // Toggle Light/Dark Mode State
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, []);

  return (
    <>
      <div
        className={`${
          isLoaderHidden
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 pointer-events-none"
        } ${darkMode ? "dark" : ""}`}
      >
        <Navbar />
        <Home playAnimation={playAnimation} />
        <DarkLight
          className="z-10 fixed bottom-7 right-5 lg:right-7"
          onClick={handleClick}
        />
      </div>

      <Loader
        isPageLoading={isPageLoading}
        setIsLoaderHidden={setIsLoaderHidden}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isLoaderHidden && "hidden"
        }`}
      />
    </>
  );
}

export default App;
