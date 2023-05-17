import { useState, useEffect, forwardRef } from "react";
import clsx from "clsx";
import { Loader } from "@components";
import { checkIsVisited } from "@utils";

// Forward Ref from Parent Component
const Loading = forwardRef(({ className, setIsLoaderHidden }, ref) => {
  console.log("[Render] @pages/Loading.jsx");

  // ===================== Page Loading ===================== //
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Load page on start
  useEffect(() => {
    let timeout = null;

    // Synchronous execution once page loaded
    const handlePageLoaded = async () => {
      // Check user visited status
      const hasVisited = checkIsVisited();

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

  // ================== Loading Animations ================== //
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

  // ************************* CSS ************************* //
  const loadingPageBgColor = "bg-coffee-800";
  const loadingPageTextColor = "text-coffee-100";
  const loadingPageTextFont = "font-default-sans";

  const loadingPageStyle = clsx(
    className,
    loadingPageBgColor,
    loadingPageTextColor,
    "w-screen h-screen px-[8px]",
    "flex flex-col justify-center items-center",
    "md:gap-[40px] sm:gap-[32px] gap-[24px]", // Gap between loader and text section
    "md:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px]",
    "font-light tracking-wider",
    loadingPageTextFont,
    {
      // if content page fully loaded then fade-out loader page
      "opacity-0": isPageLoaded,
      "opacity-100": !isPageLoaded,
    },
    "transition-opacity duration-1000"
  );

  const loadingPageFirstTextStyle = clsx(
    "absolute w-full leading-relaxed",
    {
      "opacity-0": !showText1,
      "opacity-100": showText1,
    },
    "transition-opacity duration-1000"
  );
  
  const loadingPageSecondTextStyle = clsx(
    "absolute w-full leading-relaxed",
    {
      "opacity-0": !showText2,
      "opacity-100": showText2,
    },
    "transition-opacity duration-1000"
  );

  // ************************* JSX ************************* //
  return (
    <div ref={ref} className={loadingPageStyle}>
      {/* ------- Loader/Spinner Icon (stays forever) ------- */}
      <Loader />

      {/* ------- Text Section (animated dynamically) ------- */}
      <div className="relative w-full text-center">
        {/* Text Display 1 */}
        <p className={loadingPageFirstTextStyle}>
          Welcome to my space.
          <br />
          I'm Rhina, a web developer and designer.
        </p>
        {/* Text Display 2 */}
        <p className={loadingPageSecondTextStyle}>
          Join me for a hot cup of freshly brewed design and development.
        </p>
      </div>
    </div>
  );
});

export default Loading;
