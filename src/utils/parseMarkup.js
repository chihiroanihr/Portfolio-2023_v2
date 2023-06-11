const nodeNameList = {
  italic: "I",
  bold: "B",
  div: "DIV",
  span: "SPAN",
  br: "BR",
};

// Create a single instance DOMParser and re-use it among functions
const parser = new DOMParser();

function findKeyByNodeName(nodeName) {
  return (
    Object.keys(nodeNameList).find((key) => nodeNameList[key] === nodeName) ||
    null
  );
}

function parseMarkup(text) {
  // Parse text string
  const doc = parser.parseFromString(text, "text/html");

  // Divide into individual HTML nodes
  const parsedTextData = Array.from(doc.body.childNodes).flatMap((node) => {
    // Further split each nodes into words
    const words = node.textContent.split(" ");

    // If node has html tag then get its nodeName as a key
    const key = findKeyByNodeName(node.nodeName);

    // Create key existence info
    const textData = key ? { [key]: true } : {};

    // Filter empty string only if key is not <br>
    const cleanedWords = key === "br" ? words : words.filter(Boolean);

    // Return each words as dictionary with key info
    return cleanedWords.map((word) => ({ text: word, ...textData }));
  });

  return parsedTextData;
}

export default parseMarkup;
