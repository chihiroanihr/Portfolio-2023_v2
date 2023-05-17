import { createContext } from "react";

console.log("[Render] @contexts/PlayAnimationContext.jsx");

const PlayAnimationContext = createContext([
  { playAnimation: false },
  () => {},
]);

const PlayAnimationProvider = ({ playAnimation, children }) => {
  return (
    <PlayAnimationContext.Provider value={{ playAnimation }}>
      {children}
    </PlayAnimationContext.Provider>
  );
};

export { PlayAnimationContext, PlayAnimationProvider };
