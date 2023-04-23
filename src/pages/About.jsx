import { BlobImage, BlobDots, Button, SocialIcons } from "@components";
import { buttonStyle } from "@constants/buttonStyle";

const About = ({ className }) => {
  return (
    <div
      id="about"
      className={`${className} overflow-x-hidden
      lg:px-[100px] md:px-[70px] sm:px-[45px] xs:px-[35px] px-[20px]`}
    >
      <div
        className="relative xl:h-screen min-h-screen
        flex flex-col-reverse xl:flex-row xl:gap-10 gap-0 justify-center items-center"
      >
        {/* -------- Button Column -------- */}
        <Button className={`xl:hidden ${buttonStyle.aboutBtnStyle}`}>
          View More
        </Button>
        {/* -------- Image Area -------- */}
        <div
          className="xl:flex-1 relative overflow-hidden h-full w-full
          lg:min-h-[50vh] min-h-[45vh]"
        >
          <BlobDots
            className="absolute w-full h-full left-[-5%] top-[-1%]"
            fillColor="fill-coffee-600 dark:fill-coffee-300"
          />
          <BlobImage className="absolute w-full h-full right-[-5%] bottom-[-1%]" />
        </div>
        {/* -------- Text Area -------- */}
        <div
          className="xl:flex-1 xs:pr-[80px] pr-[60px] max-w-screen-md flex flex-col
          text-coffee-600 dark:text-coffee-300"
        >
          <div className="font-autography-cursive sm:text-[80px] xs:text-[58px] text-[48px] whitespace-nowrap">
            Rhina Kim
          </div>
          <div className="font-default-sans lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px] sm:leading-[1.625em] xs:leading-6 leading-5">
            I'm a web developer and designer with a passion for creating
            inviting and engaging websites.
            <div className="m-[25px]"></div>
            Just like a good cup of coffee, I believe that a website should be
            both functional and enjoyable, providing a comfortable experience
            for its users.
          </div>
          {/* -------- Button Row -------- */}
          <Button
            className={`xl:block hidden self-center mt-5 ${buttonStyle.aboutBtnStyle}`}
          >
            View More
          </Button>
        </div>
        {/* -------- Social Icons -------- */}
        <SocialIcons
          className="gap-2 lg:scale-[1] xs:scale-[0.8] scale-[0.7]
          absolute xl:top-1/2 xl:-translate-y-1/2
          right-0 lg:top-[18%] md:top-[15%] xs:top-[13%] top-[7%]"
        />
      </div>
    </div>
  );
};

export default About;
