import "./Loader.css";
import clsx from "clsx";
import loadingIcon from "@assets/images/loading-icon.png";

const Loader = () => {
  return (
    // <div className="spinner relative text-center">
    //   <div className="dot1 inline-block"></div>
    //   <div className="dot2 inline-block"></div>
    // </div>
    <div
      className={clsx(
        "relative",
        "text-center",
        // Loader SizeF
        "sm:w-[100px] sm:h-[100px]",
        "xs:w-[80px] xs:h-[80px]",
        "w-[70px] h-[70px]"
      )}
    >
      <img
        src={loadingIcon}
        alt="Loading Icon"
        className="mix-blend-color-dodge"
      />
    </div>
  );
};

export default Loader;
