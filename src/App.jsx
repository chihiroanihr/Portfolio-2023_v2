import { useRef, useState, useMemo, useCallback, useLayoutEffect } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { Home, About, Works, Galleries, Contact, Footer } from "@views";
import { Navbar, CoffeeLanding } from "@layouts";
import { DarkLightButton } from "@components";
import { PlayAnimationProvider, DeviceTypeProvider } from "@contexts";
import {
  addGsapChildTimelinesInOrder,
  cleanUpGsapAnimation,
} from "@animations/utils";

function App() {
  console.log("[Render] App.jsx");

  // ================================ Document On Load ================================ //
  // Set Play Animation State (after loader hidden)
  // !! this state will be globaly available for all child components via useContext Provider.
  const [playAnimation, setPlayAnimation] = useState(false);

  // Allow animations when loader is hidden
  // !! useLayoutEffect executes before the DOM is painted -> avoid flash of content (some flickers during animation)
  useLayoutEffect(() => {
    setPlayAnimation(true);
  }, []);

  // =============================== Landing Animations =============================== //
  // Store Child Component Timelines
  const tempChildTimelinesListRef = useRef({});

  // Add Child Component Timelines to Parent Timeline Function
  const addToTempChildTimelineLists = useCallback((timeline, animateIndex) => {
    tempChildTimelinesListRef.current[animateIndex] = timeline;
  }, []);

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
      addGsapChildTimelinesInOrder({
        tlChild: tempChildTimelinesListRef.current,
        tlParent: landingTimelineRef.current,
        order: {
          0: "",
          1: ">-0.5",
          2: ">-1",
        },
      });

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

  // ===================== Change Background Color (Mobile Screen) ===================== //
  // Set Background Color State
  const [bgColor, setBgColor] = useState("bg-coffee-100 dark:bg-coffee-800");
  // Assign new background color when scrolled into section
  const onChangeBgColor = useCallback((newBgColor) => {
    setBgColor(newBgColor);
  }, []);

  // ************************* CSS ************************* //
  const navbarLayoutPositionStyle = clsx("z-20", "fixed-position-top-stretch");
  const darkLightButtonPositionStyle = clsx(
    "z-10",
    "fixed bottom-7 xl:right-6 lg:right-5 right-4"
  );

  // ************************* JSX ************************* //
  const memoizedContentPage = useMemo(
    () => (
      <>
        {/* --- Navbar (sticky) --- */}
        <Navbar
          addToLandingTimeline={addToTempChildTimelineLists}
          animateIndex={0}
          className={navbarLayoutPositionStyle}
        />

        {/* ------ Contents ------ */}
        <Home
          addToLandingTimeline={addToTempChildTimelineLists}
          animateIndex={2}
        />
        <CoffeeLanding />
        <About />
        <Works onChangeBgColor={onChangeBgColor} />
        <Galleries />
        <Contact />
        <Footer />

        {/* Dark Light Mode Button (sticky) */}
        <DarkLightButton
          className={darkLightButtonPositionStyle}
          handleToggleDarkMode={handleToggleDarkMode}
          addToLandingTimeline={addToTempChildTimelineLists}
          animateIndex={1}
        />
      </>
    ),
    []
  );

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isDarkMode && "dark",
        // opacity transition when loader hidden
        [playAnimation ? "opacity-100" : "opacity-0"],
        "transition-opacity duration-700"
      )}
    >
      {/* Content Page */}
      <DeviceTypeProvider>
        <PlayAnimationProvider playAnimation={playAnimation}>
          <div
            className={clsx(
              bgColor,
              // background colors transition when dark mode toggled
              "transition-[background-color] duration-700 will-change-[background-color]"
            )}
          >
            {memoizedContentPage}
          </div>
        </PlayAnimationProvider>
      </DeviceTypeProvider>
    </div>
  );
}

export default App;
