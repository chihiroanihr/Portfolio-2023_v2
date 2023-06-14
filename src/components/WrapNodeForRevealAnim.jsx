import clsx from "clsx";
import parseMarkup from "../utils/parseMarkup";

const WrapNodeForRevealAnim = ({
  inputText,
  className,
  newLineSpace = "mb-5",
  children,
}) => {
  console.log("[Render] [src] @components/WrapNodeForRevealAnim.jsx");

  // Wrap children elements with input text inside Div Node
  return inputText ? (
    // Parse text data
    parseMarkup(inputText).map(({ text, italic, br }, index) =>
      br ? (
        <div key={`br-${index}`} className={clsx("block", newLineSpace)} />
      ) : (
        <div
          key={`${text}-${index}`}
          className={clsx(
            className,
            "relative",
            "overflow-hidden",
            "inline-block",
            "align-top" // avoid y-spaces created by inline-block
          )}
        >
          {children({ text, italic }, index)}
        </div>
      )
    )
  ) : (
    <div
      className={clsx(
        className,
        "relative",
        "overflow-hidden",
        "inline-block",
        "align-top" // avoid y-spaces created by inline-block
      )}
    >
      {children}
    </div>
  );
};

export default WrapNodeForRevealAnim;
