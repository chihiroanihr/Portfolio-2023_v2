import { useRef, useState, useCallback, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import { PlayAnimationContext, DeviceTypeProvider } from "@contexts";
import { positionStyle, colorStyle } from "@constants";
import {
  addGsapChildTimelinesInOrder,
  cleanUpGsapAnimation,
} from "@animations/utils";
import { useBodyScrollLock } from "@utils";

gsap.registerPlugin(ScrollTrigger);

function App() {
  console.log("[Render] App.jsx");

  // ================================ Document On Load ================================ //
  // Set Loader Hidden State (after page loaded)
  const [isLoaderHidden, setIsLoaderHidden] = useState(false);
  // Set Play Animation State (after loader hidden)
  // !! this state will be globaly available for all child components via useContext Provider.
  const [playAnimation, setPlayAnimation] = useState(false);

  // Allow animations / interactions when loader is hidden
  // !! useLayoutEffect executes before the DOM is painted -> avoid flash of content (some flickers during animation)
  useLayoutEffect(() => {
    let timeoutId;

    if (isLoaderHidden) {
      // Allow animation
      setPlayAnimation(true);
      // Allow scroll after delay
      timeoutId = setTimeout(() => {
        setIsScrollLocked(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isLoaderHidden]);

  // =============================== Landing Animations =============================== //
  // Store Child Component Timelines
  const tempChildTimelinesListRef = useRef({});

  // Add Child Component Timelines to Parent Timeline Function
  const addToTempChildTimelineLists = useCallback((timeline, animateIndex) => {
    tempChildTimelinesListRef.current[animateIndex] = timeline;
  }, []);

  // Child Component Timelines Animation Timing
  const animateChildTimelineTimings = {
    0: "",
    1: ">-0.5",
    2: ">-1",
  };

  // Reference to Timeline
  const landingTimelineRef = useRef(
    gsap.timeline({
      defaults: { clearProps: true },
      paused: true,
    })
  );

  useLayoutEffect(() => {
    // If playAnimation is not triggered yet than skip
    if (!playAnimation) return;
    console.log("[LOG] (App.jsx) Animation Started");

    // !! Create new timeline on every render otherwise the animation will pause if you re-render in the middle.
    const ctx = gsap.context(() => {
      // Sort and append child timelines to timeline
      addGsapChildTimelinesInOrder(
        tempChildTimelinesListRef.current,
        animateChildTimelineTimings,
        landingTimelineRef.current
      );

      // Play all landing timelines
      landingTimelineRef.current.progress(0).play(0);
    });

    // Clean up animation when component unmounts
    return () => {
      cleanUpGsapAnimation(ctx);
      console.log("[LOG] (App.jsx) Animation Killed");
    };
  }, [playAnimation]);

  // ============================= Toggle Dark/Light Mode ============================= //
  // Set Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Toggle Light/Dark Mode State
  const handleToggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

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
    <DeviceTypeProvider>
      <div className={isDarkMode ? "dark" : ""}>
        {/* -------- Loader (hidden) -------- */}
        <Loading
          ref={scrollLockTargetRef}
          setIsLoaderHidden={setIsLoaderHidden}
          className={`
          ${positionStyle.loaderPosition}
          ${isLoaderHidden && "hidden"}
          `}
        />
        {/* -------- Loaded Page -------- */}
        <div
          className={`${colorStyle.bgColor} ${
            isLoaderHidden ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-500`}
        >
          <PlayAnimationContext.Provider value={{ playAnimation }}>
            {/* Navbar (sticky) */}
            <Navbar
              addToLandingTimeline={addToTempChildTimelineLists}
              animateIndex={0}
              className={`z-20 ${positionStyle.navbarPosition}`}
            />

            {/* Contents */}
            <Home
              addToLandingTimeline={addToTempChildTimelineLists}
              animateIndex={2}
            />
            <About />
            <Works />
            <Galleries />
            <Contact />
            <Footer />

            {/* Dark Light Mode Button (sticky) */}
            <DarkLightButton
              addToLandingTimeline={addToTempChildTimelineLists}
              animateIndex={1}
              handleToggleDarkMode={handleToggleDarkMode}
              className={`z-10 ${positionStyle.darkLightBtnPosition}`}
            />
          </PlayAnimationContext.Provider>
        </div>
      </div>
    </DeviceTypeProvider>
  );
}

export default App;
