import clsx from "clsx";
import { MailToLink } from "@components";
import { isFontAvailable } from "@utils";

const EMAIL = "chihiroanihr@gmail.com";

const EmailAddressText = ({ className }) => (
  <p className={clsx(className, "xl:text-[40px] sm:text-[30px] text-[20px]")}>
    {EMAIL}
  </p>
);

const ContactMeText = ({ className }) => {
  // ************************* CSS ************************* //
  const underlineColor = clsx(
    "from-coffee-700 to-coffee-400",
    "dark:from-coffee-300 dark:to-coffee-700"
  );

  // Underline CSS Style
  const contactMeUnderlineStyle = clsx(
    "bg-[length:0_5px] hover:bg-[length:100%_5px]",
    "bg-no-repeat bg-left-bottom",
    "bg-gradient-to-r",
    underlineColor,
    "transition-[background-size] duration-500 ease-in-out"
  );

  // ************************* JSX ************************* //
  return (
    // Contact Me Text
    <MailToLink
      className={clsx(
        className,
        "uppercase",
        "xl:text-[150px] lg:text-[100px] sm:text-[80px] text-[60px]",
        contactMeUnderlineStyle
      )}
      email={EMAIL}
    >
      <span>Contact Me</span>
      <span className={clsx("xl:text-[150px] text-[100px]", "leading-[0]")}>
        .
      </span>
    </MailToLink>
  );
};

const ContactMe = ({ className }) => {
  const fontType = "font-limelight-cursive";
  const textColor = "text-coffee-600 dark:text-coffee-300";

  const contactMeTextStyle = clsx(
    textColor,
    fontType,
    "leading-tight",
    !isFontAvailable("Limelight") && "font-bold"
  );

  return (
    <div className={clsx(className, "text-right", contactMeTextStyle)}>
      <ContactMeText />
      <EmailAddressText className="mt-3" />
    </div>
  );
};

export default ContactMe;
