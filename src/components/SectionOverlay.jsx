import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cleanUpGsapAnimation } from "@animations/utils";

const SectionOverlay = ({
  className,
  parentRef,
  isOpened = false,
  handleOverlayCompleted,
}) => {
  console.log("[Render] @components/SectionOverlay.jsx");

  // DOM References
  const overlayRef = useRef(null);
  const pathRef = useRef(null);

  // Configure SVG
  const numPointsRef = useRef(7);
  const delayPointsMaxRef = useRef(0.2);
  const durationRef = useRef(1.5);
  const pointsDelayRef = useRef([]);
  let pointsRef = useRef([]);

  // Set Initial Path pointsRef.current
  for (let j = 0; j < numPointsRef.current; j++) {
    pointsRef.current.push(50);
  }

  const timelineRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current && !overlayRef.current && !parentRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    timelineRef.current = gsap.timeline({
      onUpdate: render,
      defaults: {
        duration: durationRef.current,
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        toggleActions: "play none none reverse",
        markers: true,
        onEnter: () => {
          // timelineRef.current.duration(1);
          handleOverlayCompleted(true);
          toggle(timelineRef.current);
        },
        onLeave: () => {
          handleOverlayCompleted(false); // Reset
        },
        onEnterBack: () => {
          handleOverlayCompleted(true);
        },
        onLeaveBack: () => {
          // timelineRef.current.duration(1.5);
          handleOverlayCompleted(false); // Reset
        },
      },
    });

    return () => {
      cleanUpGsapAnimation(timelineRef.current);
    };
  }, [isOpened]);

  function toggle(tl) {
    tl.progress(0);

    for (let i = 0; i < numPointsRef.current; i++) {
      pointsDelayRef.current[i] = Math.random() * delayPointsMaxRef.current;
    }

    for (let j = 0; j < numPointsRef.current; j++) {
      let delay = pointsDelayRef.current[j];
      tl.to(
        pointsRef.current,
        {
          [j]: 0,
        },
        delay
      );
    }
  }

  function render() {
    let d = "";
    d += isOpened
      ? `M 0 0 V ${pointsRef.current[0]} C`
      : `M 0 ${pointsRef.current[0]} C`;

    for (let j = 0; j < numPointsRef.current - 1; j++) {
      let p = ((j + 1) / (numPointsRef.current - 1)) * 100;
      let cp = p - ((1 / (numPointsRef.current - 1)) * 100) / 2;
      d += ` ${cp} ${pointsRef.current[j]} ${cp} ${
        pointsRef.current[j + 1]
      } ${p} ${pointsRef.current[j + 1]}`;
    }

    d += isOpened ? ` V 100 H 0` : ` V 0 H 0`;
    pathRef.current?.setAttribute("d", d);
  }

  return (
    <svg
      ref={overlayRef}
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path ref={pathRef} />
    </svg>
  );
};

export default SectionOverlay;
