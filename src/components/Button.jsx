const Button = (props) => {
  // Retrieve Props
  const classes = props.className;

  return <div className={`${classes} cursor-pointer`}>{props.children}</div>;
};

// Default Props
Button.defaultProps = {
  classes: "",
};

export default Button;
