import { useState, useEffect, forwardRef } from "react";
import { Loader } from "@components";
import { checkVisited } from "@utils";
import { colorStyle } from "@constants";

// Forward Ref from Parent Component
const Loading = forwardRef((props, ref) => {
  console.log("[Render] @pages/Loading.jsx");

  // Retrieve Props
  const classes = props.className;
  const setIsLoaderHidden = props.setIsLoaderHidden;

  // =============================== Page Loading =============================== //
  // Set Page Loaded State
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Load page on start
  useEffect(() => {
    let timeout = null;

    // Synchronous execution once page loaded
    const handlePageLoaded = async () => {
      // Check user visited status
      const hasVisited = checkVisited();

      // If user has never visited then display animations (call function synchronously)
      if (!hasVisited) {
        await playLoadingAnimation();
      }

      // Set status to loaded
      setIsPageLoaded(true);

      // Delay hiding loading page
      timeout = setTimeout(() => {
        setIsLoaderHidden(true);
      }, 1000);

      console.log("[LOG] (Loading.jsx) Page Loaded");
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

  // Synchronous Display Animation Function
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Loading Animation Function
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
      className={`${classes} 
      ${colorStyle.loadingBgColor} ${colorStyle.loadingTextColor}
      w-screen h-screen px-[8px]
      flex flex-col justify-center items-center md:gap-[40px] sm:gap-[32px] gap-[24px]
      font-default-sans font-light tracking-wider
      md:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px]
      ${
        // if content page fully loaded then fade-out loader page
        isPageLoaded ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000`}
    >
      {/* ------- Loader/Spinner Icon (stays forever) ------- */}
      <Loader />

      {/* ------- Text Section (animated dynamically) ------- */}
      <div className="relative w-full text-center">
        {/* Text Display 1 */}
        <p
          className={`absolute w-full leading-relaxed ${
            showText1 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          Welcome to my space.
          <br />
          I'm Rhina, a web developer and designer.
        </p>
        {/* Text Display 2 */}
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

export default Loading;
