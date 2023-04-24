import { useRef, useContext, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlobImage, BlobDots, Button, SocialIcons } from "@components";
import { PlayAnimationContext } from "@contexts";
import { buttonStyle } from "@constants/buttonStyle";

gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Retrieve Play Animation State
  const { playAnimation } = useContext(PlayAnimationContext);

  // DOM References
  const aboutSectionRef = useRef(null);

  // Update Animation when playAnimation is triggered
  useLayoutEffect(() => {
    if (!playAnimation) return;
    console.log("[LOG] (About.jsx) Animation Started");

    let ctx = gsap.context(
      () => {
        // Register all animations within the scope to the timeline
        gsap
          .timeline({
            defaults: {
              opacity: 0,
              duration: 0.8,
            },
            scrollTrigger: {
              id: "about-section-on-scroll",
              trigger: aboutSectionRef.current,
              start: "top-=500 top",
              end: "bottom-=100 top",
              toggleActions: "play reverse play reverse",
              ease: "power2.out",
              markers: true,
            },
          })
          .from(".about-full-name", { y: -100 })
          .from(".about-text-1", { x: -100 }, "=-0.5")
          .from(".about-text-2", { x: 100 }, "=-0.8")
          .from(".about-view-more-btn", { y: 100 }, "=-0.6")
          .from(".about-social-icons", { y: -100 }, "=-0.5");
      },
      // Scope
      aboutSectionRef
    );

    // Clean Up Animations
    return () => {
      ctx.revert();
      console.log("[LOG] (About.jsx) Animation Killed");
    };
  }, [playAnimation]);

  return (
    <div
      ref={aboutSectionRef}
      id="about"
      className={`${classes} overflow-hidden
      lg:px-[100px] md:px-[70px] sm:px-[45px] xs:px-[35px] px-[20px]`}
    >
      <div
        className="relative xl:h-screen min-h-screen
        flex flex-col-reverse xl:flex-row xl:gap-10 gap-0 justify-center items-center"
      >
        {/* -------- Button Column -------- */}
        <Button
          className={`about-view-more-btn
          xl:hidden ${buttonStyle.aboutBtnStyle}`}
        >
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
          <div
            className="about-full-name
            font-autography-cursive sm:text-[80px] xs:text-[58px] text-[48px] whitespace-nowrap"
          >
            Rhina Kim
          </div>
          <div className="font-default-sans lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px] sm:leading-[1.625em] xs:leading-6 leading-5">
            <p className="about-text-1">
              I'm a web developer and designer with a passion for creating
              inviting and engaging websites.
            </p>
            <div className="m-[25px]"></div>
            <p className="about-text-2">
              Just like a good cup of coffee, I believe that a website should be
              both functional and enjoyable, providing a comfortable experience
              for its users.
            </p>
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
          className="about-social-icons
          gap-2 lg:scale-[1] xs:scale-[0.8] scale-[0.7]
          absolute xl:top-1/2 xl:-translate-y-1/2
          right-0 lg:top-[18%] md:top-[15%] xs:top-[13%] top-[7%]"
        />
      </div>
    </div>
  );
};

// Default Props
About.defaultProps = {
  classes: "",
};

export default About;
