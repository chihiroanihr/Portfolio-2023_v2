import { useState, useEffect } from "react";

function useIntersectionObserver(ref, option, enterOnly = false) {
  console.log("[Render] [hooks] useIntersectionObserver.js");

  const [isIntersecting, setIntersecting] = useState(false);

  // Observer Function
  const observer = new IntersectionObserver(([entry]) => {
    // execute call back only at entering (and run only once)
    if (enterOnly) {
      if (entry.intersectionRatio > 0) {
        setIntersecting(true);
        ref.current && observer.unobserve(ref.current);
      }
    }
    // default behavior
    else {
      setIntersecting(entry.isIntersecting);
    }
  }, option);

  // Begin Observe
  useEffect(() => {
    if (!ref.current) return;

    observer.observe(ref.current);

    return () =>
      ref.current ? observer.unobserve(ref.current) : observer.disconnect();
  }, [ref, option]);

  return isIntersecting;
}

export default useIntersectionObserver;
