// Reference:
// https://webanimation.blog/blog/wavy-text-animation-using-react-hooks-with-gsap-v3

// ---------------- Split Text To Chars Function ---------------- //
export const SplitTextToChars = (textNode) => {
  // Obtain and Split texts
  const textContent = textNode.textContent;
  const textSplit = textContent.split("");

  // Create new doc fragment
  const frag = document.createDocumentFragment();
  // Append each chars to doc fragment
  textSplit.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style = `${letter === " " ? "min-width: 1rem;" : ""}z-index: ${
      textSplit.length - i
    }; position: relative; display: inline-block;`;
    frag.appendChild(span);
  });

  // Removes the original text from the node
  textNode.textContent = "";
  // Appends the document fragment with chars
  textNode.appendChild(frag);

  // Returns its children, which are the individual <span> elements for each chars
  return textNode.children;
};

// ---------------- Split Text To Words Function ---------------- //
export const SplitTextToWords = (textNode) => {
  // Obtain and Split texts
  const textContent = textNode.textContent;
  const wordSplit = textContent.split(" ");

  // Create new doc fragment
  const frag = document.createDocumentFragment();
  // Append each words to doc fragment
  wordSplit.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.style = `z-index: ${
      wordSplit.length - i
    }; position: relative; display: inline-block;`;
    frag.appendChild(span);

    // If not last word in the array, add space to the fragment
    if (i < wordSplit.length - 1) {
      const space = document.createElement("span");
      space.textContent = " ";
      frag.appendChild(space);
    }
  });

  // Removes the original text from the node
  textNode.textContent = "";
  // Appends the document fragment with words
  textNode.appendChild(frag);

  // Returns its children, which are the individual <span> elements for each words
  return textNode.children;
};
