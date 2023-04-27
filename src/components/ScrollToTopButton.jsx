import { Button } from "@components";

const ScrollToTopButton = (props) => {
  // Retrive Props
  const classes = props.className;
  const parentRef = props.parentRef;

  // Scroll Back to Top when clicked
  const onButtonClick = () => {
    if (parentRef.current) {
      parentRef.current.scrollTo(0, 0);
    }
  };

  return (
    <Button className={classes} onClick={onButtonClick}>
      {props.children}
    </Button>
  );
};

ScrollToTopButton.defaultProps = {
  classes: "",
  parentRef: null,
};

export default ScrollToTopButton;
