const Link = ({ id, className, href, target, disabled, children }) => {
  console.log("[Render] @components/Link.jsx");

  // If disabled link
  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  return (
    <a
      className={`${className} ${disabled ? "pointer-events-none" : ""}`}
      id={id}
      href={href}
      target={target}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
