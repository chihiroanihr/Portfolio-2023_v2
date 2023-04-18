import { useState, useEffect, forwardRef } from "react";
import { checkVisited } from "@utils";
import { Loader } from "@components";

// !! forwardRef expects a function that accepts props and ref as arguments, thus destructuring is a recommended approach
const Loading = forwardRef(({ setIsLoaderHidden, className }, ref) => {
  // =============================== Page Loading =============================== //
  // Set Page Loaded State
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Load page on start
  useEffect(() => {
    let timeout = null;

    // Synchronous execution once page loaded
    const handlePageLoaded = async () => {
      // If user has never visited this website before
      const hasVisited = checkVisited();
      if (!hasVisited) {
        // Display animations (call the function synchronously)
        await playLoadingAnimation();
      }
      // Set status to loaded
      setIsPageLoaded(true);
      // Delay hiding loading page
      timeout = setTimeout(() => {
        setIsLoaderHidden(true);
      }, 1000);
    };

    // If document loaded then handle post loading execution
    if (document.readyState === "complete") {
      handlePageLoaded();
    }
    // Otherwise keep loading
    else {
      window.addEventListener("load", handlePageLoaded);
    }
    //  Clean up the setTimeout when the component unmounts
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", handlePageLoaded);
    };
  }, []);

  // ============================ Loading Animations ============================ //
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  // Synchronous Animation Function
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const playLoadingAnimation = async () => {
    // ! execute synchronously instead of using setTimeOut function
    setShowText1(true); // display text1
    await wait(2000);
    setShowText1(false); // hide text1
    await wait(1000);
    setShowText2(true); // display text2
    await wait(2000);
    setShowText2(false); // hide text2
    await wait(1000);
  };

  return (
    <div
      ref={ref}
      // If page fully loaded then fade-out loader page
      className={`${className} w-screen h-screen px-[8px]
      flex flex-col justify-center items-center md:gap-[40px] sm:gap-[32px] gap-[24px]
      bg-coffee-800
      text-coffee-100 font-default-sans font-light tracking-wider
      md:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px]
      ${
        isPageLoaded ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000`}
    >
      {/* Loader / Spinner Icon (stays forever) */}
      <Loader />
      {/* Text Section (animated dynamically) */}
      <div className="relative w-full text-center">
        <p
          className={`absolute w-full leading-relaxed ${
            showText1 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          Welcome to my space.
          <br />
          I'm Rhina, a web developer and designer.
        </p>
        <p
          className={`absolute w-full leading-relaxed ${
            showText2 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          Join me for a hot cup of freshly brewed design and development.
        </p>
      </div>
    </div>
  );
});

// !! Assign the default value to prevent errors when they are not passed by the parent component.
Loading.defaultProps = {
  setIsLoaderHidden: null,
  className: "",
};

export default Loading;
