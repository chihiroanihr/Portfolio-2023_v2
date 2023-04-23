import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPinterest } from "react-icons/tb";
import { TbBrandBehance } from "react-icons/tb";

const SocialIcons = (props) => {
  const classes = props.className;
  return (
    <div
      className={`text-[45px] ${classes} flex flex-col justify-center items-center gap-1`}
    >
      <TbBrandLinkedin
        className="text-coffee-400 hover:text-coffee-600 dark:hover:text-coffee-100 cursor-pointer"
        style={{ scale: 1.3, strokeWidth: 1.6 }}
      />
      <TbBrandGithub
        className="text-coffee-400 hover:text-coffee-600 dark:hover:text-coffee-100 cursor-pointer"
        style={{
          borderRadius: "50%",
          border: "3.7px solid",
          padding: "3px 0px 1px 1px",
        }}
      />
      {/* <TbBrandGithub className="text-coffee-400 hover:text-coffee-600 dark:hover:text-coffee-100 cursor-pointer" /> */}
      <FaInstagram
        className="text-coffee-400 hover:text-coffee-600 dark:hover:text-coffee-100 cursor-pointer"
        style={{ scale: 1.05, strokeWidth: 0.9 }}
      />
      <FaDribbble
        className="text-coffee-400 hover:text-coffee-600 dark:hover:text-coffee-100 cursor-pointer"
        style={{ strokeWidth: 2.5 }}
      />
      <TbBrandPinterest
        className="text-coffee-400 hover:text-coffee-600 dark:hover:text-coffee-100 cursor-pointer"
        style={{ scale: 1.2, strokeWidth: 1.5 }}
      />
      <TbBrandBehance
        className="text-coffee-400 hover:text-coffee-600 dark:hover:text-coffee-100 cursor-pointer"
        style={{
          borderRadius: "50%",
          border: "3.7px solid",
          padding: "3px 0px 2px 1px",
        }}
      />
    </div>
  );
};

export default SocialIcons;
