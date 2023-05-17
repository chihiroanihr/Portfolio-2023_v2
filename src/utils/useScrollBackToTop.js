import { useCallback, useEffect } from "react";

const useScrollBackToTop = ({ ref, dependency, option = { top: 0 } }) => {
  // Destructure the dependency if it is an array
  const dependencies = Array.isArray(dependency) ? dependency : [dependency];

  // Function to handle scroll back to top
  const handleScrollBackToTop = useCallback(() => {
    if (!ref.current) return;

    ref.current?.scrollTo(option);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    handleScrollBackToTop();
  }, [...dependencies, option]);

  return { handleScrollBackToTop };
};

export default useScrollBackToTop;
