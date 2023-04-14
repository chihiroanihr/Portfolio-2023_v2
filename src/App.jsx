import { useCallback, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Home, About, Works, Galleries, Contact, Footer } from "./pages";
import { Loader, Navbar, DarkLight } from "./components";

function App() {
  // Set Page Loading State
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === "complete") {
      setIsPageLoading(false);
    } else {
      const handleLoad = () => setIsPageLoading(false); // inline arrow callback function
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Set Page Loaded (Loader Hidden) State
  const [isLoaderHidden, setIsLoaderHidden] = useState(false);

  // Set Play Animation State
  const [playAnimation, setPlayAnimation] = useState(false);
  // By using layout effects, execution starts as soon as possible, without waiting for all assets to load.
  useEffect(() => {
    let timeoutId;
    if (isLoaderHidden) {
      // Allow animation
      setPlayAnimation(true);
      // Allow scroll
      timeoutId = setTimeout(() => {}, 1000);
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

  // Handle All Animations
  const homeRef = useRef(null);
  const navbarRef = useRef(null);
  const darkLightRef = useRef(null);

  const timelineRef = useRef(gsap.timeline());

  useEffect(() => {
    if (!playAnimation) return;
    timelineRef.current.add(navbarRef.current);
    timelineRef.current.from(
      darkLightRef.current,
      {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "inOut",
        clearProps: "all",
      },
      ">-0.5"
    );
    timelineRef.current.add(homeRef.current, ">-1");
  }, [playAnimation]);

  return (
    <>
      <div
        className={`${
          isLoaderHidden
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 pointer-events-none"
        } ${darkMode ? "dark" : ""}`}
      >
        <Navbar ref={navbarRef} playAnimation={playAnimation} />
        <Home ref={homeRef} playAnimation={playAnimation} />
        <DarkLight
          ref={darkLightRef}
          playAnimation={playAnimation}
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
