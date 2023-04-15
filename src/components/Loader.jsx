import { useEffect } from "react";
import "./Loader.css";

const Loader = ({ isPageLoading, setIsLoaderHidden, className }) => {
  useEffect(() => {
    let timeoutId;

    // Hide loader after a delay
    if (!isPageLoading) {
      timeoutId = setTimeout(() => {
        setIsLoaderHidden(true);
      }, 1000);
    }
    //  Clean up the setTimeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPageLoading, setIsLoaderHidden]);

  return (
    <div
      className={`${className} spinner w-screen h-screen 
      ${!isPageLoading ? "opacity-0 transition-opacity duration-500" : ""}`}
    >
      <div className="dot1"></div>
      <div className="dot2"></div>
    </div>
  );
};

export default Loader;
