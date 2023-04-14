import {
  useCallback,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
} from "react";
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
  const childrenTimelineRefs = useRef([]);
  useEffect(() => {
    const timeline = gsap.timeline();

    // Check if all animation elements are fully built and registered before playing
    const isReady = childrenTimelineRefs.current.every((ref) => {
      timeline.add(ref.getTimeline());
      return timeline.getChildren().length > 10;
    });

    // // Check if all animation elements are fully built and registered before playing
    if (isReady) {
      console.log(timeline.getChildren());
      timeline.restart();
    }
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
        <Navbar playAnimation={playAnimation} />
        <Home
          ref={(el) => (childrenTimelineRefs.current[0] = el)}
          playAnimation={playAnimation}
        />
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
