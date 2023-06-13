import { useCallback, useEffect } from "react";

const useScrollBackToTop = ({ ref, dependency, option = { top: 0 } }) => {
  console.log("[Render] [hooks] useScrollBackToTop.js");

  // Destructure the dependency if it is an array
  const dependencies = Array.isArray(dependency) ? dependency : [dependency];

  // Function to handle scroll back to top
  const handleScrollBackToTop = useCallback(() => {
    if (!ref.current) return;

    ref.current?.scrollTo(option);
  }, []);

  // If dependencies exists
  useEffect(() => {
    if (!ref.current && !dependency) return;

    handleScrollBackToTop();
  }, [...dependencies, option]);

  return handleScrollBackToTop;
};

export default useScrollBackToTop;
