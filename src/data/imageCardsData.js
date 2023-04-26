import coffeeBgImg1 from "@assets/images/coffee-bg-1.jpg";
import coffeeBgImg2 from "@assets/images/coffee-bg-2.jpg";
import coffeeBgImg3 from "@assets/images/coffee-bg-3.jpg";

// From Left To Right
// From Underneath To Top
const imageCardsData = [
  {
    id: "coffee-bg-img-3",
    img: coffeeBgImg3,
    style: {
      position: "top-[45%] right-[50%]",
      rotation: "-rotate-[17deg]",
      brightness: "dark:brightness-[0.5]",
    },
  },
  {
    id: "coffee-bg-img-2",
    img: coffeeBgImg2,
    style: {
      position: "top-1/2 xs:right-[30%] right-[34%]",
      rotation: "-rotate-6",
      brightness: "dark:brightness-[0.6]",
    },
  },
  {
    id: "coffee-bg-img-1",
    img: coffeeBgImg1,
    style: {
      position: "top-[60%] xs:right-[5%] right-[16%]",
      rotation: "rotate-6",
      brightness: "dark:brightness-[0.6]",
    },
  },
];

export default imageCardsData;
