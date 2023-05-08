/* Credits: 

Paulina Adamkiewicz (Coffee)
Source Code: https://codepen.io/apomekhanes/pen/BprZdq

Tran Anh Tuat (Smoke) 
Github: https://github.com/trananhtuat/css-smoke-effect/tree/main
Youtube: https://www.youtube.com/watch?v=CFb3LKrE-OQ&feature=youtu.be

*/

import React from "react";
import smokeImg from "@assets/images/smoke.png";

const Coffee = () => {
  console.log("[Render] @layouts/CoffeeLanding/Coffee.jsx");

  return (
    <div
      className="relative dark:brightness-[0.8]
      lg:scale-[1.25] md:scale-[1.2] sm:scale-[0.9] xs:scale-[0.7] scale-[0.65]"
    >
      {/* Cup */}
      <div
        className={`cup relative top-0 left-0 w-[385px] h-[361px] bg-[length:360px_361px] bg-coffee`}
      />
      {/* Coffee */}
      <div
        className={`coffee absolute top-[80px] left-[111px] w-[170px] h-[170px]
        bg-coffee bg-[-116px_-85px] bg-[length:370px] shadow-coffee-cup animate-coffee
        rounded-full z-[1]`}
      />
      {/* Smoke */}
      <div
        id="steamWrapper"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 h-full w-full
        flex justify-center z-[2]"
      >
        <img
          src={smokeImg}
          className="absolute rounded-full blur-[5px]
          animate-smoke1 will-change-smoke opacity-0"
        />
        <img
          src={smokeImg}
          className="absolute rounded-full blur-[5px]
          animate-smoke2 will-change-smoke opacity-0"
        />
        <img
          src={smokeImg}
          className="absolute rounded-full blur-[5px]
          animate-smoke3 will-change-smoke opacity-0"
        />
      </div>
      {/* <div
          id="steam"
          className="rounded-full w-full h-full min-w-[600px] min-h-[600px]
          shadow-coffee-steam animate-steam will-change-steam"
        /> */}
    </div>
  );
};

export default React.memo(Coffee);
