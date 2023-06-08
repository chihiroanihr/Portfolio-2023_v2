/**
 * Font Probing:
 * Checks if a font is available to be used on a web page without any fallbacks.
 *
 * @param {String} fontName The name of the font to check
 * @return {Boolean}
 * @license MIT
 * @copyright Sam Clarke 2013
 * @author Sam Clarke <sam@samclarke.com>
 */
// https://www.samclarke.com/javascript-is-font-available/

const isFontAvailable = (function (document) {
  const body = document.body;

  const probeElement = document.createElement("span");
  probeElement.innerHTML = Array(100).join("wi");
  probeElement.style.cssText = [
    "position:absolute",
    "width:auto",
    "font-size:128px",
    "left:-99999px",
  ].join(" !important;");

  const getWidth = function (fontFamily) {
    probeElement.style.fontFamily = fontFamily;
    body.appendChild(probeElement);

    const width = probeElement.offsetWidth;
    // console.log(probeElement.style.fontFamily, width);
    body.removeChild(probeElement);
    return width;
  };

  // Precompute the widths of monospace, serif & sans-serif to improve performance.
  const monoWidth = getWidth("monospace");
  const serifWidth = getWidth("serif");
  const sansWidth = getWidth("sans-serif");

  return function (font) {
    // console.log(monoWidth, getWidth(font + ",monospace"));
    // console.log(sansWidth, getWidth(font + ",sans-serif"));
    // console.log(serifWidth, getWidth(font + ",serif"));

    return (
      monoWidth !== getWidth(font + ",monospace") ||
      sansWidth !== getWidth(font + ",sans-serif") ||
      serifWidth !== getWidth(font + ",serif")
    );
  };
})(document);

// import { getFontFamily } from "./getNodeComputedStyle";

// export function checkFontFamilyExists(node, fontFamilyToCheck) {
//   const fontFamily = getFontFamily(node);
//   if (fontFamily.includes(fontFamilyToCheck)) return true;
//   return false;
// }

export default isFontAvailable;
