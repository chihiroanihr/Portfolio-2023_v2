/* Credits: 

Paulina Adamkiewicz (Coffee)
Source Code: https://codepen.io/apomekhanes/pen/BprZdq

Tran Anh Tuat (Smoke) 
Github: https://github.com/trananhtuat/css-smoke-effect/tree/main
Youtube: https://www.youtube.com/watch?v=CFb3LKrE-OQ&feature=youtu.be

*/

import React from "react";
import clsx from "clsx";
import smokeImg from "@assets/images/coffee/smoke.png";

const Coffee = () => {
  console.log(
    "[Render] [src] @layouts/CoffeeLanding/Coffee.jsx ----- Memoized"
  );

  // ************************* CSS ************************* //
  // Config
  const coffeeCupSizeStyle = "w-[385px] h-[361px]";
  const coffeeCupImgSizeStyle = "bg-[length:360px_361px] bg-coffee";
  const coffeeSizeStyle = "w-[170px] h-[170px]";
  const coffeeImgSizeStyle = "bg-[-116px_-85px] bg-[length:370px] bg-coffee";

  // Style
  const coffeeWrapperStyle = clsx(
    "relative",
    "dark:brightness-[0.8]",
    "lg:scale-[1.25] md:scale-[1.2] sm:scale-[0.9] xs:scale-[0.7] scale-[0.65]"
  );
  const coffeeCupStyle = clsx(
    "relative",
    "top-0 left-0",
    coffeeCupSizeStyle,
    coffeeCupImgSizeStyle
  );
  const coffeeStyle = clsx(
    "z-[1]",
    "absolute",
    "top-[80px] left-[111px]",
    coffeeImgSizeStyle,
    coffeeSizeStyle,
    "rounded-full",
    "shadow-coffee-cup",
    "will-change-coffee"
  );
  const steamWrapperStyle = clsx(
    "z-[2]",
    "absolute",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3",
    "h-full w-full",
    "flex justify-center"
  );
  const smokeStyle = clsx(
    "absolute",
    "rounded-full",
    "blur-[5px]",
    "opacity-0", // initial value
    "will-change-smoke"
  );

  // ************************* JSX ************************* //
  return (
    <div className={coffeeWrapperStyle}>
      {/* -------- Cup -------- */}
      <div className={coffeeCupStyle} />
      {/* ------ Coffee ------ */}
      <div className={clsx(coffeeStyle, "animate-coffee")} />
      {/* ------- Smoke ------- */}
      <div className={steamWrapperStyle}>
        <img src={smokeImg} className={clsx(smokeStyle, "animate-smoke1")} />
        <img src={smokeImg} className={clsx(smokeStyle, "animate-smoke2")} />
        <img src={smokeImg} className={clsx(smokeStyle, "animate-smoke3")} />
      </div>
    </div>
  );
};

export default React.memo(Coffee);
