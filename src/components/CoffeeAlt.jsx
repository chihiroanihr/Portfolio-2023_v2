import { useEffect } from "react";
import "./CoffeeAlt.css";

const CoffeeAlt = ({ className }) => {
  // Register the resize event listener and call the resize() function once when the component mounts
  useEffect(() => {
    function resize() {
      if (window.innerWidth <= 800) {
        document.getElementById("blurFilter").setAttribute("stdDeviation", 4);
      } else {
        document.getElementById("blurFilter").setAttribute("stdDeviation", 10);
      }
    }

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div
        id="plate"
        className={`${className} shadow-xl dark:shadow-2xl dark:drop-shadow-xl`}
      >
        <div id="cup">
          <div id="cupInner"></div>
          <div id="coffeBg">
            <div id="foamWrapper">
              <div id="foam1" className="foam"></div>
              <div id="foam2" className="foam"></div>
              <div id="foam3" className="foam"></div>
              <div id="foam4" className="foam"></div>
              <div id="foam5" className="foam"></div>
              <div id="foam6" className="foam"></div>
              <div id="foam7" className="foam"></div>
              <div id="foam8" className="foam"></div>
              <div id="foam9" className="foam"></div>
              <div id="foam10" className="foam"></div>
              <div id="foam11" className="foam"></div>
              <div id="foam12" className="foam"></div>
              <div id="foam13" className="foam"></div>

              <div id="foamMiddleWrapper">
                <div id="foamMiddleContainer">
                  <div id="foamMiddle1" className="foamMiddle"></div>
                  <div id="foamMiddle2" className="foamMiddle"></div>
                  <div id="bubbleMiddle1" className="bubble"></div>
                  <div id="bubbleMiddle2" className="bubble"></div>
                  <div id="bubbleMiddle3" className="bubble"></div>
                  <div id="bubbleMiddle4" className="bubble"></div>
                </div>
              </div>

              <div id="bubble1" className="bubble"></div>
              <div id="bubble2" className="bubble"></div>
              <div id="bubble3" className="bubble"></div>
              <div id="bubble4" className="bubble"></div>
              <div id="bubble5" className="bubble"></div>
              <div id="bubble6" className="bubble"></div>
              <div id="bubble7" className="bubble"></div>
              <div id="bubble8" className="bubble"></div>
              <div id="bubble9" className="bubble"></div>
              <div id="bubble10" className="bubble"></div>
              <div id="bubble11" className="bubble"></div>
              <div id="bubble12" className="bubble"></div>
              <div id="bubble13" className="bubble"></div>
              <div id="bubble14" className="bubble"></div>
              <div id="bubble15" className="bubble"></div>

              <div id="bubbleSmall1" className="bubbleSmall"></div>
              <div id="bubbleSmall2" className="bubbleSmall"></div>
              <div id="bubbleSmall3" className="bubbleSmall"></div>
              <div id="bubbleSmall4" className="bubbleSmall"></div>
              <div id="bubbleSmall5" className="bubbleSmall"></div>
              <div id="bubbleSmall6" className="bubbleSmall"></div>
              <div id="bubbleSmall7" className="bubbleSmall"></div>
              <div id="bubbleSmall8" className="bubbleSmall"></div>
            </div>
            <div id="innerShadow"></div>
            <div id="glow"></div>
          </div>
        </div>
        <div id="handle"></div>
      </div>
      <div id="steamWrapper">
        <div id="steam"></div>
      </div>

      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
              id="blurFilter"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -5"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <filter id="scatter">
            <feTurbulence
              baseFrequency="10.9"
              type="fractalNoise"
              numOctaves="1"
            />
            <feDisplacementMap
              in="SourceGraphic"
              xChannelSelector="G"
              yChannelSelector="B"
              scale="20"
            />
            <feComposite operator="in" in2="finalMask" />
          </filter>
        </defs>
      </svg>

      <svg width="0" height="0">
        <filter id="fog">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
    </>
  );
};

export default CoffeeAlt;
