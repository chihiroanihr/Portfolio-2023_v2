import clsx from "clsx";

const Link = ({
  id,
  className,
  href,
  target,
  onClick: handleParentClick = null,
  disabled = false,
  children,
}) => {
  console.log("[Render] @components/Link.jsx");

  // If disabled link
  const disableClick = (event) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  // onClick function
  const handleClick = () => {
    disableClick();
    if (handleParentClick) handleParentClick();
  };

  return (
    <a
      className={clsx(className, disabled && "pointer-events-none")}
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
