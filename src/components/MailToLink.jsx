import Link from "./Link";

const MailToLink = ({ className, email, children }) => {
  const mailto = "mailto:" + email;

  return (
    <Link className={className} target="_blank" href={mailto}>
      {children}
    </Link>
  );
};

export default MailToLink;

// Reference: Angelos Chalaris
// https://www.30secondsofcode.org/react/s/mailto/
