const Button = (props) => {
  // Retrieve Props
  const classes = props.className;
  const onClick = props.onClick;

  return (
    <div
      className={`${classes} cursor-pointer`}
      onClick={onClick}
      type="button"
    >
      {props.children}
    </div>
  );
};

// Default Props
Button.defaultProps = {
  classes: "",
  onClick: null,
};

export default Button;
