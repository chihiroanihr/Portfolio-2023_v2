import { useState } from "react";
import { useSpring } from "@react-spring/web";

function useAnimatedSvgPath({
  toggle,
  duration = null,
  delay,
  pathLength = null,
}) {
  console.log("[Render] [hooks] useAnimatedSvgPath.js");

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    delay,
    config: { duration: duration },
    // config: config.slow,
  });

  // Return style variable for the animation and ref variable for the path length measurement.
  return {
    style: animatedStyle,
    ref: (ref) => {
      if (ref)
        !pathLength ? setLength(ref.getTotalLength()) : setLength(pathLength); // The ref is `null` on component unmount
    },
  };
}

export default useAnimatedSvgPath;

// Reference: https://dev.to/tomdohnal/react-svg-animation-with-react-spring-3-3c91
