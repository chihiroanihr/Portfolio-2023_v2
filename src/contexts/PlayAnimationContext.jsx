import { createContext } from "react";

const PlayAnimationContext = createContext({ playAnimation: false });

const PlayAnimationProvider = ({ playAnimation, children }) => (
  <PlayAnimationContext.Provider value={{ playAnimation }}>
    {children}
  </PlayAnimationContext.Provider>
);

export { PlayAnimationContext, PlayAnimationProvider };
