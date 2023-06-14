import clsx from "clsx";

const Link = ({
  id,
  className,
  href,
  target,
  disabled = false,
  offset = null,
  onClick: handleParentClick = null,
  style,
  children,
}) => {
  console.log("[Render] [src] @components/Links/Link.jsx");

  const offsetClick = (event) => {
    const targetElement = document.querySelector(
      event.currentTarget.getAttribute("href")
    );

    event.preventDefault();

    // preventDefault() --> window.scrollTo() execution does not work in iOS thus solved with setTimeout()
    setTimeout(() => {
      if (typeof offset === "number")
        // offset in px
        window.scrollTo({
          top: targetElement.offsetTop + offset,
        });
      // scroll into child id node
      else targetElement.querySelector(offset).scrollIntoView();
    }, 0);
  };

  // onClick function
  const handleClick = (event) => {
    offset && offsetClick(event);
    disabled && event.preventDefault();
    handleParentClick && handleParentClick();
  };

  return (
    <a
      className={clsx(className, disabled && "pointer-events-none")}
      id={id}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      style={style}
    >
      {children}
    </a>
  );
};

export default Link;
