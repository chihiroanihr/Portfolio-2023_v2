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

  // Set Dark Mode State
  const [darkMode, setDarkMode] = useState(false);
  // Toggle Light/Dark Mode State
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  // Set Menu Oepn State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle Menu Button
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);
  // Close Menu Button
  const handleCloseMenu = () => setIsMenuOpen(false);

  // Handle All Animations
  const homeRef = useRef(null);
  const navbarRef = useRef(null);
  const darkLightRef = useRef(null);
  // Create GSAP animation timeline
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    // ! Create new timeline on every render otherwise the animation will pause if you re-render in the middle.
    timelineRef.current = gsap.timeline({ defaults: { clearProps: "all" } });
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;
    // Add all animation timelines from children components into one timeline
    timelineRef.current.add(navbarRef.current);
    timelineRef.current.from(
      darkLightRef.current,
      {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "inOut",
      },
      ">-0.5"
    );
    timelineRef.current.add(homeRef.current, ">-1");

    // Clean up animation when component unmounts
    return () => {
      timelineRef.current?.kill();
    };
  }, [playAnimation]);

  return (
    <>
      {/* Loader (hidden) */}
      <Loader
        isPageLoading={isPageLoading}
        setIsLoaderHidden={setIsLoaderHidden}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isLoaderHidden && "hidden"
        }`}
      />

      {/* Page */}
      <div
        className={`opacity-${
          isLoaderHidden
            ? "100 transition-opacity duration-500"
            : "0 pointer-events-none"
        } ${darkMode ? "dark" : ""}`}
      >
        {/* Navbar (sticky) */}
        <div>
          <Navbar
            ref={navbarRef}
            isMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
            handleCloseMenu={handleCloseMenu}
            playAnimation={playAnimation}
            className="z-30 fixed top-0 l-0 r-0"
          />
        </div>

        {/* Contents */}
        <div>
          <Home ref={homeRef} playAnimation={playAnimation} />
        </div>

        {/* Dark Light Mode Button (sticky) */}
        <div>
          <DarkLight
            ref={darkLightRef}
            toggleDarkMode={toggleDarkMode}
            playAnimation={playAnimation}
            className="z-10 fixed bottom-7 right-5 lg:right-7"
          />
        </div>
      </div>
    </>
  );
}

export default App;
