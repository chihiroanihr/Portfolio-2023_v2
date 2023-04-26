import { useContext, useLayoutEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlayAnimationContext } from "@contexts";
import { imageCardsData } from "@data";

gsap.registerPlugin(ScrollTrigger);

// Forward Ref from Parent Component
const ImageCardsLanding = forwardRef((props, ref) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM References for Landing Animations
  const imageCardsRefs = useRef([]);
  // Timeline Reference for Scroll Animation
  const imageCardsTweensRefs = useRef([]);

  // Allow scroll triggered animations on complete
  const allowImageCardsScrollAnim = () => {
    imageCardsRefs.current.forEach((imageCard, index) => {
      let animationProps = {};
      let top = 0;
      switch (index) {
        case 0:
          animationProps = {
            y: -100,
            x: -100,
            rotate: -25,
          };
          top = 50;
          break;
        case 1:
          animationProps = {
            y: -150,
            x: 50,
            rotate: 5,
          };
          top = 200;
          break;
        case 2:
          animationProps = {
            y: -200,
            x: 150,
            rotate: 20,
          };
          top = 300;
          break;
        default:
          break;
      }
      imageCardsTweensRefs.current[index] = gsap.to(imageCard, {
        id: "home-image-cards-" + index,
        ...animationProps,
        opacity: 0,
        scrollTrigger: {
          id: "home-image-cards-on-scroll-" + index,
          trigger: imageCard,
          scrub: 2,
          start: top + " top",
          end: "+=500",
          // markers: true,
        },
      });
    });
  };

  // Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (ImageCardsLanding.jsx) Animation Started");

    // Register animations to the timeline
    ref.current.timeline = gsap.from(imageCardsRefs.current, {
      id: "home-landing-images",
      x: 200,
      y: -200,
      rotation: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: "power4.out",
      clearProps: true,
      onComplete: allowImageCardsScrollAnim,
    });

    // Clean Up Animations
    return () => {
      imageCardsTweensRefs.current.forEach((tween) => {
        tween?.scrollTrigger?.kill();
        tween?.kill();
      });
      ref.current.timeline?.kill();
      console.log("[LOG] (ImageCardsLanding.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <div className={`${classes} relative`}>
      {imageCardsData.map(({ id, img, style }, index) => (
        <img
          ref={(el) => (imageCardsRefs.current[index] = el)}
          key={id}
          src={img}
          alt={id}
          className={`absolute -translate-y-1/2 ${style.position} ${style.rotation} ${style.brightness}
            xxl:w-[400px] xxl:h-[650px] md:w-[300px] md:h-[500px] xs:w-[250px] xs:h-[400px] w-[180px] h-[300px]
            rounded-2xl shadow-cards-light dark:shadow-cards-dark object-cover object-center
            pointer-events-none prevent-select`}
        />
      ))}
    </div>
  );
});

// Default Props
ImageCardsLanding.defaultProps = { classes: "" };

export default ImageCardsLanding;
