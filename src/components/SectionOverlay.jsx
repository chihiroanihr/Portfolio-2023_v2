import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cleanUpGsapAnimation } from "@animations/utils";

const SectionOverlay = ({ className, parentRef, duration = 1 }) => {
  console.log("[Render] @components/SectionOverlay.jsx");

  // Node References
  const overlayNodeRef = useRef(null);
  const pathNodeRef = useRef(null);

  // Configure SVG
  const numPointsRef = useRef(7);
  const delayPointsMaxRef = useRef(0.15);
  const pointsRef = useRef([]);

  const flipRef = useRef(false);
  const reverseRef = useRef(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!pathNodeRef.current && !overlayNodeRef.current && !parentRef.current)
      return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize
    initAnimation();

    timelineRef.current = gsap.timeline({
      defaults: {
        duration: duration,
        ease: "power3.inOut",
      },
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          // timelineRef.current.duration(1);
          flipRef.current = false;
          reverseRef.current = false;
          toggleAnimation();
        },
        onLeave: () => {
          flipRef.current = true;
          reverseRef.current = false;
          toggleAnimation();
        },
        onEnterBack: () => {
          flipRef.current = true;
          reverseRef.current = true;
          toggleAnimation();
        },
        onLeaveBack: () => {
          // timelineRef.current.duration(1.5);
          flipRef.current = false;
          reverseRef.current = true;
          toggleAnimation();
        },
      },
    });

    return () => {
      cleanUpGsapAnimation(timelineRef.current);
    };
  }, []);

  function initAnimation() {
    // Destructure Ref
    const numPoints = numPointsRef.current;
    // Set Initial Path pointsRef.current
    pointsRef.current = new Array(numPoints).fill(100);
  }

  function toggleAnimation() {
    // Destructure Ref
    const tl = timelineRef.current;
    const numPoints = numPointsRef.current;
    // Assign delays in every points
    const pointsDelay = Array.from(
      { length: numPoints },
      () => Math.random() * delayPointsMaxRef.current
    );

    tl.progress(0);

    if (!reverseRef.current) {
      tl.clear(); // Clear previous animation

      // Assign every points to 0
      for (let j = 0; j < numPoints; j++) {
        let delay = pointsDelay[j];
        tl.to(
          pointsRef.current,
          {
            [j]: 0,
            onUpdate: () => {
              renderAnimation();
            },
          },
          delay
        );
      }

      tl.play(0);
    } else {
      tl.reverse(0);
    }
  }

  function renderAnimation() {
    // Destructure Ref
    const numPoints = numPointsRef.current;
    const points = pointsRef.current;
    const flipped = flipRef.current;

    // Compute new SVG path points
    let d = "";
    d += !flipped ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

    for (let j = 0; j < numPoints - 1; j++) {
      let p = ((j + 1) / (numPoints - 1)) * 100;
      let cp = p - ((1 / (numPoints - 1)) * 100) / 2;
      d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
    }

    d += !flipped ? ` V 100 H 0` : ` V 0 H 0`;
    pathNodeRef.current?.setAttribute("d", d);
  }

  return (
    <svg
      ref={overlayNodeRef}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
    >
      <path ref={pathNodeRef} shapeRendering="optimizeSpeed" />
    </svg>
  );
};

export default React.memo(SectionOverlay);
