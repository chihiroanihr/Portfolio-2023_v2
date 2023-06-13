import { useState, useEffect } from "react";

function useResizeObserver(ref, option) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      // Calculate and Set New Width and New Height
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    }, option);

    observer.observe(ref.current);

    return () =>
      ref.current ? observer.unobserve(ref.current) : observer.disconnect();
  }, [ref, option]);

  return size;
}

function useResizeObserverCallback(ref, callback, option) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      callback(ref.current, entries[0]);
    }, option);

    observer.observe(ref.current);

    return () =>
      ref.current ? observer.unobserve(ref.current) : observer.disconnect();
  }, [ref, callback, option]);

  return ref;
}

export { useResizeObserver, useResizeObserverCallback };

// Reference:

// [1] "How to use Resize Observer in React" — Vincas Stonys
// https://codefrontend.com/resize-observer-react/

// [2] "React Hooks — useObserve (use ResizeObserver Custom Hook)" — Eyas Mattar
// https://eymas.medium.com/react-hooks-useobserve-use-resizeobserver-custom-hook-45ec95ad9844
