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
    const targetElement = document.querySelector(
      event.currentTarget.getAttribute("href")
    );

    // preventDefault() --> window.scrollTo() execution does not work in iOS thus solved with setTimeout()
    setTimeout(() => {
      if (typeof offset === "number")
        // offset in px
        window.scrollTo({
          top: targetElement.offsetTop + offset, // 100vh
        });
      // scroll into child id node
      else targetElement.querySelector(offset).scrollIntoView();
    }, 1);
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
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
