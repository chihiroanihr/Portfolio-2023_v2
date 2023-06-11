import DOMPurify from "dompurify";

DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  // set all elements owning target to target=_blank
  if ("target" in node) {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener");
  }
});

// Sanitize Json String (extract links if exists)
const sanitizeMarkup = (htmlString) => {
  return { __html: DOMPurify.sanitize(htmlString) };
};

export default sanitizeMarkup