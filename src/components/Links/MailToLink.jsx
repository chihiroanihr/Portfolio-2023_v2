import Link from "./Link";

const MailToLink = ({ className, email, children }) => {
  console.log("[Render] [src] @components/Links/MailToLink.jsx");

  const mailto = "mailto:" + email;

  return (
    <Link className={className} href={mailto} target="_blank">
      {children}
    </Link>
  );
};

export default MailToLink;

// Reference: Angelos Chalaris
// https://www.30secondsofcode.org/react/s/mailto/
