import clsx from "clsx";
import { MailToLink } from "@components";

const EMAIL = "chihiroanihr@gmail.com";

const ContactMeText = ({ className }) => {
  // ************************* CSS ************************* //
  const textColor = "text-coffee-600 dark:text-coffee-300";
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
  const periodDotJsx = (
    <span
      className={clsx(
        "font-default-sans",
        "xl:text-[150px] text-[100px] leading-[0]"
      )}
    >
      .
    </span>
  );

  return (
    // Contact Me Text
    <div
      className={clsx(
        className,
        "inline-block",
        "uppercase",
        "xl:text-[150px] lg:text-[100px] sm:text-[80px] text-[60px]",
        textColor
      )}
    >
      {/* Link */}
      <MailToLink className={contactMeUnderlineStyle} email={EMAIL}>
        Contact Me
        {periodDotJsx}
      </MailToLink>
    </div>
  );
};

const EmailAddressText = () => {
  const textColor = "text-coffee-600 dark:text-coffee-300";

  return (
    <p className={clsx(textColor, "xl:text-[40px] sm:text-[30px] text-[20px]")}>
      {EMAIL}
    </p>
  );
};

const ContactMe = ({ className }) => {
  const fontType = "font-default-serif";

  return (
    <div
      className={clsx(
        className,
        fontType,
        "text-right",
        "font-bold",
        "leading-tight"
      )}
    >
      <ContactMeText className="mb-3" />
      <EmailAddressText />
    </div>
  );
};

export default ContactMe;
