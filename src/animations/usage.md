# [1] Via Custom Hooks

```js
function useGsapEffect(target, effect, vars) {
  const [animation, setAnimation] = useState();

  useLayoutEffect(() => {
    setAnimation(gsap.effects[effect](target.current, vars));
  }, [effect]);

  return animation;
}

function App() {
  const box = useRef();
  const animation = useGsapEffect(box, "spin");

  return <Box ref={box}>Hello</Box>;
}
```

# [2] Via Reusable Functions

```js
function fadeIn(target, vars) {
  return gsap.from(target, { opacity: 0, ...vars });
}

function App() {
  const box = useRef();

  useLayoutEffect(() => {
    const animation = fadeIn(box.current, { x: 100 });
  }, []);

  return (
    <div className="box" ref={box}>
      Hello
    </div>
  );
}
```

# [3] Via Reusable Component

```js
function FadeIn({ children, vars }) {
  const el = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animation.current = gsap.from(el.current.children, {
        opacity: 0,
        ...vars,
      });
    });
    return () => ctx.revert();
  }, []);

  return <span ref={el}>{children}</span>;
}

function App() {
  return (
    <FadeIn vars={{ x: 100 }}>
      <div className="box">Box</div>
    </FadeIn>
  );
}
```

# [4] Via GSAP Register Effect

```js
gsap.registerEffect({
  name: "pulse",
  effect(targets) {
    return gsap.fromTo(
      targets,
      {
        scale: 1,
      },
      {
        scale: 1.5,
        repeat: 1,
        ease: "bounce",
        yoyoEase: "power3",
      }
    );
  },
});

gsap.registerEffect({
  name: "spin",
  effect(targets) {
    return gsap.to(targets, {
      rotation: (i, el) =>
        gsap.utils.snap(360, gsap.getProperty(el, "rotation") + 360),
    });
  },
});

gsap.registerEffect({
  name: "shake",
  effect(targets) {
    return gsap.fromTo(
      targets,
      {
        x: 0,
      },
      {
        x: 10,
        ease: "myWiggle",
      }
    );
  },
});

const GsapEffect = forwardRef(({ children, effect, targetRef, vars }, ref) => {
  const animation = useRef();
  const ctx = gsap.context(() => {});

  useEffect(() => {
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (gsap.effects[effect]) {
      ctx.add(() => {
        animation.current = gsap.effects[effect](targetRef.current, vars);
      });
    }
  }, [ctx, effect, targetRef, vars]);

  useEffect(() => {
    // forward the animation instance if a ref is passed
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return <>{children}</>;
});

const Box = forwardRef(({ children }, ref) => {
  return (
    <div className="box" ref={ref}>
      {children}
    </div>
  );
});

const wrap = gsap.utils.wrap(["pulse", "spin", "shake"]);

function App() {
  const boxRef = useRef();
  const count = useRef(0);
  const [effect, setEffect] = useState("");

  const toggle = () => {
    setEffect(wrap(count.current++));
  };

  return (
    <div className="app">
      <div>
        <button onClick={toggle}>Toggle</button>
      </div>
      <p>Effect: {effect}</p>
      <GsapEffect targetRef={boxRef} effect={effect}>
        <Box ref={boxRef}>Box</Box>
      </GsapEffect>
    </div>
  );
}
```
