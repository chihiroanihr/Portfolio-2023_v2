import clsx from "clsx";

const Link = ({
  id,
  className,
  href,
  target,
  disabled = false,
  offset = null,
  onClick: handleParentClick = null,
  children,
}) => {
  console.log("[Render] @components/Link.jsx");

  const offsetClick = (event) => {
    event.preventDefault();

    if (offset) {
      const targetElement = document.querySelector(
        event.currentTarget.getAttribute("href")
      );

      window.scrollTo({ top: targetElement.offsetTop + offset }); // offset in px
    }
  };

  // onClick function
  const handleClick = (event) => {
    if (disabled) event.preventDefault();
    if (offset) offsetClick(event);
    if (handleParentClick) handleParentClick();
  };

  return (
    <a
      className={clsx(className, disabled && "pointer-events-none")}
      id={id}
      href={href}
      target={target}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
