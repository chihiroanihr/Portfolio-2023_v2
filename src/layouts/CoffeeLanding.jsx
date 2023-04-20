import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpiralText } from "@components";
import { Coffee, Coffee2 } from "@components";

gsap.registerPlugin(ScrollTrigger);

const CoffeeLanding = ({ className }) => {
  const home2Ref = useRef(null);

  const [svgRef, setSvgRef] = useState(null);
  const [textPathRef, setTextPathRef] = useState(null);
  const [spiralPathDOM, setSpiralPathDOM] = useState(null);
  const [totalPathLength, setTotalPathLength] = useState(0);

  const handleChildData = (
    svgRef,
    textPathRef,
    spiralPathDOM,
    totalPathLength
  ) => {
    setSvgRef(svgRef);
    setTextPathRef(textPathRef);
    setSpiralPathDOM(spiralPathDOM);
    setTotalPathLength(totalPathLength);
  };

  useEffect(() => {
    if (!textPathRef && !svgRef && !spiralPathDOM && !totalPathLength) return;
    console.log("[LOG] (Home2.jsx) Animation Started");

    const targetScrollTrigger = home2Ref.current;
    const timeline = gsap.to(textPathRef.current, {
      attr: { startOffset: totalPathLength - 400 },
      scrollTrigger: {
        id: "home-spiral-text-on-scroll",
        trigger: targetScrollTrigger,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: "+=100%",
        toggleActions: "restart pause reverse reset",
        // markers: { startColor: "yellow", endColor: "yellow" },
      },
    });

    return () => {
      timeline.scrollTrigger.kill();
      timeline.kill();
      console.log("[LOG] (Home2.jsx) Animation Killed");
    };
  }, [svgRef, textPathRef, spiralPathDOM, totalPathLength]);

  return (
    <div id="home-2" ref={home2Ref} className={className}>
      <div className="h-full flex justify-center items-center">
        {/* <Coffee /> */}
        <Coffee2 />
        <SpiralText
          onDataUpdate={handleChildData}
          className="absolute xxl:scale-[120%] xl:scale-[130%] md:scale-[160%] scale-[250%] left-[2%]
            font-default-sans font-medium"
          fillColor="fill-coffee-600 dark:fill-coffee-300"
        />
      </div>
    </div>
  );
};

// !! Assign the default value to prevent errors when they are not passed by the parent component.
CoffeeLanding.defaultProps = {
  className: "",
};

export default CoffeeLanding;
