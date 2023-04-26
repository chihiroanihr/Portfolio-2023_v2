import { createContext } from "react";

// Create Context
const PlayAnimationContext = createContext();

// import { createContext, useState } from "react";

// const PlayAnimationContext = createContext([{}, () => {}]);

// const PlayAnimationProvider = ({ children }) => {
//   const [playAnimation, setPlayAnimation] = useState(false);

//   return (
//     <PlayAnimationContext.Provider value={[playAnimation, setPlayAnimation]}>
//       {children}
//     </PlayAnimationContext.Provider>
//   );
// };

// export { PlayAnimationContext, PlayAnimationProvider };

export default PlayAnimationContext;
