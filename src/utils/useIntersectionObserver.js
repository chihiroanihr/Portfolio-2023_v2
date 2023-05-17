import { useState, useEffect } from "react";

function useIntersectionObserver(ref, option) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, option);

    observer.observe(ref.current);

    return () =>
      ref.current ? observer.unobserve(ref.current) : observer.disconnect();
  }, [ref, option]);

  return isIntersecting;
}

export default useIntersectionObserver;
