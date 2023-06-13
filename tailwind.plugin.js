const plugin = require("tailwindcss/plugin");

module.exports = [
  plugin(function ({ addUtilities, theme }) {
    const textShadowUtilities = Object.entries(theme("textShadow")).map(
      ([key, value]) => ({
        [`.text-shadow-${key}`]: {
          textShadow: value,
        },
      })
    );
    const strokeWidthUtilities = Object.entries(theme("strokeWidth")).map(
      ([key, value]) => ({
        [`.stroke-width-${key}`]: {
          WebkitTextStrokeWidth: value,
        },
      })
    );
    const strokeColorUtilities = Object.entries(theme("strokeColor")).map(
      ([key, value]) => ({
        [`.stroke-color-${key}`]: {
          WebkitTextStrokeColor: value,
        },
      })
    );
    const writingModeUtilities = {
      ".horizontal-tb": {
        writingMode: "horizontal-tb",
      },
      ".vertical-rl": {
        writingMode: "vertical-rl",
      },
      ".vertical-lr": {
        writingMode: "vertical-lr",
      },
    };
    addUtilities([
      ...textShadowUtilities,
      ...strokeWidthUtilities,
      ...strokeColorUtilities,
      writingModeUtilities,
    ]);
  }),
  function ({ matchUtilities }) {
    matchUtilities({
      "text-shadow": (value) => ({
        textShadow: value,
      }),
      "stroke-width": (value) => ({
        WebkitTextStrokeWidth: value,
      }),
      "stroke-color": (value) => ({
        WebkitTextStrokeColor: value,
      }),
    });
  },
];
