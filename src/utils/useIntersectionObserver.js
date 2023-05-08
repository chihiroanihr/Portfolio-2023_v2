import { useState, useEffect, useLayoutEffect } from "react";

function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIntersecting] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.unobserve(ref.current);
  }, [ref, options]);

  return isIntersecting;
}

export default useIntersectionObserver;
