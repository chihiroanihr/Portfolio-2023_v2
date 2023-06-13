export function getOpacity(node) {
  const computedStyle = window.getComputedStyle(node, null);
  const opacityValue = computedStyle.opacity;
  return opacityValue;
}

export function getWidth(node) {
  const computedStyle = window.getComputedStyle(node, null);
  const widthValue = computedStyle.width;
  return widthValue;
}

export function getHeight(node) {
  const computedStyle = window.getComputedStyle(node, null);
  const heightValue = computedStyle.height;
  return heightValue;
}

export function getTop(node) {
  const computedStyle = window.getComputedStyle(node, null);
  const topValue = computedStyle.top;
  return topValue;
}

export function getRight(node) {
  const computedStyle = window.getComputedStyle(node, null);
  const rightValue = computedStyle.right;
  return rightValue;
}

export function getRotation(node, negative = false) {
  const computedStyle = window.getComputedStyle(node, null);
  const transformValue =
    computedStyle.getPropertyValue("-webkit-transform") ||
    computedStyle.getPropertyValue("-moz-transform") ||
    computedStyle.getPropertyValue("-ms-transform") ||
    computedStyle.getPropertyValue("-o-transform") ||
    computedStyle.getPropertyValue("transform") ||
    "none";
  if (transformValue != "none") {
    // Allow Negative Value
    if (negative) {
      var values = transformValue.split("(")[1].split(")")[0].split(",");
      return Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
    }
    // Only Return Positive Value
    else {
      var angle = Math.round(
        Math.atan2(values[1], values[0]) * (180 / Math.PI)
      );
      return angle < 0 ? angle + 360 : angle; //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
  }
  return 0;
}

export function getFontFamily(node) {
  const computedStyle = window.getComputedStyle(node, null);
  const fontFamily = computedStyle.fontFamily;
  return fontFamily;
}

// Reference: https://stackoverflow.com/questions/19574171/how-to-get-css-transform-rotation-value-in-degrees-with-javascript
