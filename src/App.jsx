import {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import {
  Loading,
  Home,
  About,
  Works,
  Galleries,
  Contact,
  Footer,
} from "@pages";
import { Navbar } from "@layouts";
import { DarkLightButton } from "@components";
import { PlayAnimationContext } from "@contexts";
import { useBodyScrollLock } from "@utils";

function App() {
  // ================================ Document On Load ================================ //
  // Set Loader Hidden State (after page loaded)
  const [isLoaderHidden, setIsLoaderHidden] = useState(false);
  // Set Play Animation State (after loader hidden)
  // This state will be globaly available for all child components via useContext Provider.
  const [playAnimation, setPlayAnimation] = useState(false);

  // Allow animations / interactions when loader is hidden
  // !! useLayoutEffect executes before the DOM is painted -> avoid flash of content (some flickers during animation)
  useLayoutEffect(() => {
    let timeoutId;
    if (isLoaderHidden) {
      // Allow animation
      setPlayAnimation(true);
      // Allow scroll
      timeoutId = setTimeout(() => {
        setIsScrollLocked(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoaderHidden]);

  // =============================== Landing Animations =============================== //
  // DOM element and its Timeline References to handle animations
  const homeRef = useRef({ timeline: null });
  const navbarRef = useRef({ timeline: null });
  const darkLightRef = useRef({ timeline: null });

  // GSAP Animation Timeline Reference
  const timelineRef = useRef(null);

  // Handle All Animations from parent + child components
  // ! Referenced animations fails to get added to the timeline on first-render with useLayoutEffect(), thus use useEffect()
  useEffect(() => {
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;

    // ! Create new timeline on every render otherwise the animation will pause if you re-render in the middle.
    timelineRef.current = gsap.timeline({
      defaults: { clearProps: "all" },
      onStart: function () {
        console.log("play");
      },
      onComplete: function () {
        console.log("finish");
      },
    });
    // Add all children components' animation timelines into one timeline
    timelineRef.current.add(navbarRef.current.timeline);
    timelineRef.current.add(darkLightRef.current.timeline, ">-0.5");
    timelineRef.current.add(homeRef.current.timeline, ">-1");

    // Play all animations once everything is added
    timelineRef.current.play();

    // Clean up animation when component unmounts
    return () => {
      timelineRef.current?.kill();
    };
  }, [playAnimation]);

  // ============================= Toggle Dark/Light Mode ============================= //
  // Set Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Toggle Light/Dark Mode State
  const handleToggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, [isDarkMode]);

  // ================================== Scroll Lock ================================== //
  // DOM Reference to activate scroll lock
  const scrollLockTargetRef = useRef(null);
  // Set Scroll Lock State
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  // Function to execute scroll lock on the target reference
  useBodyScrollLock({
    isScrollLocked,
    scrollLockTargetRef,
  });

  return (
    <div className={`scroll-smooth ${isDarkMode ? "dark" : ""}`}>
      {/* -------- Loader (hidden) -------- */}
      <Loading
        ref={scrollLockTargetRef}
        setIsLoaderHidden={setIsLoaderHidden}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isLoaderHidden && "hidden"
        }`}
      />
      {/* -------- Loaded Page -------- */}
      <div
        className={`bg-coffee-100 dark:bg-coffee-800 ${
          isLoaderHidden ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-500`}
      >
        <PlayAnimationContext.Provider value={{ playAnimation }}>
          {/* Navbar (sticky) */}
          <Navbar ref={navbarRef} className="z-20 fixed top-0 l-0 r-0" />

          {/* Contents */}
          <Home
            ref={homeRef}
            className="max-w-screen-xxxl mx-auto overflow-x-hidden"
          />
          <About className="max-w-screen-xxxl mx-auto overflow-x-hidden" />
          <Works />
          <Galleries />
          <Contact />
          <Footer />

          {/* Dark Light Mode Button (sticky) */}
          <DarkLightButton
            ref={darkLightRef}
            handleToggleDarkMode={handleToggleDarkMode}
            className="z-10 fixed bottom-7 right-5 lg:right-7"
          />
        </PlayAnimationContext.Provider>
      </div>
    </div>
  );
}

export default App;
