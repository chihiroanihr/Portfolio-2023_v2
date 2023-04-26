import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPinterest } from "react-icons/tb";
import { TbBrandBehance } from "react-icons/tb";

const socialMediaPlatformsData = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rhina-kim-568ab3178/",
    icon: TbBrandLinkedin,
    style: { scale: "1.3", strokeWidth: 1.45 },
    disabled: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/chihiroanihr",
    icon: TbBrandGithub,
    style: {
      borderRadius: "50%",
      border: "3.7px solid",
      padding: "3px 0px 1px 1px",
    },
    disabled: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/chipie_af/",
    icon: FaInstagram,
    style: { scale: "1.05", strokeWidth: 0.9 },
    disabled: false,
  },
  {
    name: "Dribbble",
    href: "#",
    icon: FaDribbble,
    style: { strokeWidth: 2.5 },
    disabled: true,
  },
  {
    name: "Pinterest",
    href: "#",
    icon: TbBrandPinterest,
    style: { scale: "1.2", strokeWidth: 1.5 },
    disabled: true,
  },
  {
    name: "Behance",
    href: "#",
    icon: TbBrandBehance,
    style: {
      borderRadius: "50%",
      border: "3.7px solid",
      padding: "3px 0px 2px 1px",
    },
    disabled: true,
  },
];

export default socialMediaPlatformsData;
