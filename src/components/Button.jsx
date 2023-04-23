const Button = (props) => {
  const classes = props.className;

  return <div className={`${classes} cursor-pointer`}>{props.children}</div>;
};

export default Button;
