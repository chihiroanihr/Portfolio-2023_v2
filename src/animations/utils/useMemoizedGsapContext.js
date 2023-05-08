import { useMemo } from "react";
import { gsap } from "gsap";

function useMemoizedGsapContext(scope) {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
  return ctx;
}

export default useMemoizedGsapContext;

// Usage:

// const ctx = useMemoizedGsapContext(scopeRef);

// Inside useLayoutEffect:

// ctx.add(() => { ... })
