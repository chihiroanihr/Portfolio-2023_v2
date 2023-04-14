import coffeeImg1 from "../assets/images/coffee-1.jpg";
import coffeeImg2 from "../assets/images/coffee-2.jpg";
import coffeeImg3 from "../assets/images/coffee-3.jpg";

// From Left To Right
// From Underneath To Top
export const homeImageCards = [
  {
    id: "coffee-img-3",
    img: coffeeImg3,
    style: {
      position: "top-[45%] right-[50%]",
      rotation: "-rotate-[17deg]",
      brightness: "dark:brightness-[0.7]",
    },
  },
  {
    id: "coffee-img-2",
    img: coffeeImg2,
    style: {
      position: "top-1/2 xs:right-[30%] right-[34%]",
      rotation: "-rotate-6",
      brightness: "dark:brightness-75",
    },
  },
  {
    id: "coffee-img-1",
    img: coffeeImg1,
    style: {
      position: "top-[60%] xs:right-[5%] right-[16%]",
      rotation: "rotate-6",
      brightness: "dark:brightness-[0.8]",
    },
  },
];
