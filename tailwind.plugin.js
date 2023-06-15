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
