import { useRef, useEffect } from "react";

const SpiralText = ({ onDataUpdate, className, fillColor, ...props }) => {
  const svgRef = useRef(null);
  const textPathRef = useRef(null);

  useEffect(() => {
    const spiralPathDOM = svgRef.current.getElementById("spiral-path");
    const totalPathLength = spiralPathDOM.getTotalLength();

    onDataUpdate(svgRef, textPathRef, spiralPathDOM, totalPathLength);
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1900 780"
      xmlSpace="preserve"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...props}
    >
      <defs>
        <path
          id="spiral-path"
          d="M1131,364.7c3.7-43.6-11-89.9-41.9-125.1 c-30.5-35.4-76.8-58.9-126.5-62.2c-49.6-3.7-101.9,13.1-141.4,47.5c-39.7,34-65.8,85.2-69.1,139.8c-3.7,54.5,15.5,111.7,54.2,154.6 c38.2,43.1,95.5,71.2,156.3,74.4c60.6,3.7,123.9-17.5,171.1-59.7c47.5-41.7,78.2-103.7,81.4-169.3c3.8-65.4-20-133.5-66.5-184 c-46-50.8-114.2-83.4-186-86.6c-71.7-3.8-145.9,22-200.9,71.9c-55.3,49.4-90.6,122.3-93.7,198.7c-3.9,76.4,24.5,155.2,78.9,213.4 c53.8,58.6,133,95.7,215.8,98.8c82.7,3.8,167.9-26.5,230.7-84.1c63.2-57,102.9-140.8,106.1-228.2c3.9-87.3-29-177-91.2-242.9 c-61.6-66.4-151.7-107.9-245.5-111c-93.7-3.9-189.9,30.9-260.4,96.3c-71,64.7-115.3,159.3-118.4,257.6 c-3.9,98.2,33.5,198.7,103.5,272.3c69.3,74.1,170.4,120.2,275.3,123.2c104.8,3.9,211.9-35.3,290.2-108.5 c36.6-33.6,72.8-98.1,101-157.5c38-79.9,118.6-130.7,207-130.7h650.7"
          style={{
            fill: "none",
            stroke: "none",
          }}
        />
      </defs>
      <text>
        <textPath
          ref={textPathRef}
          id="spiral-text-path"
          xlinkHref="#spiral-path"
          aria-label="Espresso\u30FBDoppio\u30FBRistretto\u30FBLungo\u30FBLatte\u30FBMacchiato\u30FBCappuccino\u30FBMocha\u30FBAu Leut\u30FBAmericano\u30FBFlat White\u30FBCon Panna\u30FBIced Coffee\u30FBcon Leche\u30FBBreve\u30FBAffogato\u30FBVienna\u30FBCon Hielo\u30FBIrish\u30FBGlace\u30FBCorretto\u30FBMarochino\u30FBGalao\u30FBRomano\u30FBRaf"
          side="right"
          textLength={5420}
          startOffset={0}
          className={fillColor}
        >
          {
            "ESPRESSO\u30FBDOPPIO\u30FBRISTRETTO\u30FBLUNGO\u30FBLATTE\u30FBMACCHIATO\u30FBCAPPUCCINO\u30FBMOCHA\u30FBAU LEUT\u30FBAMERICANO\u30FBFLAT WHITE\u30FBCON PANNA\u30FBICED COFFEE\u30FBCON LECHE\u30FBBREVE\u30FBAFFOGATO\u30FBVIENNA\u30FBCON HIELO\u30FBIRISH\u30FBGLACE\u30FBCORRETTO\u30FBMAROCHINO\u30FBGALAO\u30FBROMANO\u30FBRAF"
          }
        </textPath>
      </text>
    </svg>
  );
};

export default SpiralText;
