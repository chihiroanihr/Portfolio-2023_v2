import {
  useCallback,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { Home, About, Works, Galleries, Contact, Footer } from "./pages";
import { Loader, Navbar, DarkLight } from "./components";

function App() {
  // Set Page Loading State
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Load page on start / load
  useEffect(() => {
    const handleLoad = () => setIsPageLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Set Page Loaded (Loader Hidden) State
  const [isLoaderHidden, setIsLoaderHidden] = useState(false);
  // Set Play Animation State
  const [playAnimation, setPlayAnimation] = useState(false);

  // Allow animations / interactions when loader is hidden
  // !! useLayoutEffect executes before the DOM is painted -> avoid flash of content (some flickers during animation)
  useLayoutEffect(() => {
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
  // Create GSAP animation timeline
  const timeline = gsap.timeline({ defaults: { clearProps: "all" } });

  useEffect(() => {
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;
    // Add all animation timelines from children components into one timeline
    timeline.add(navbarRef.current);
    timeline.from(
      darkLightRef.current,
      {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "inOut",
      },
      ">-0.5"
    );
    timeline.add(homeRef.current, ">-1");

    timeline.play()

    // Clean up animation when component unmounts
    return () => {
      timeline?.kill();
    };
  }, [playAnimation]);

  // Whole Page Styles after Loaded
  const pageStyles = `opacity-${
    isLoaderHidden
      ? "100 transition-opacity duration-500"
      : "0 pointer-events-none"
  } ${darkMode ? "dark" : ""}`;

  return (
    <>
      <div className={pageStyles}>
        <Navbar ref={navbarRef} playAnimation={playAnimation} />
        <Home ref={homeRef} playAnimation={playAnimation} />
        <DarkLight
          ref={darkLightRef}
          onClick={handleClick}
          playAnimation={playAnimation}
          className="z-10 fixed bottom-7 right-5 lg:right-7"
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
