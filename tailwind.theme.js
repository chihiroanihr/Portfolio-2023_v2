const defaultTheme = require("tailwindcss/defaultTheme"); // for font fallbacks

module.exports = {
  extend: {
    colors: {
      coffee: {
        100: "#F0EDEB",
        300: "#D3CAC4", // #EFDECD
        400: "#A59A99",
        600: "#786766",
        700: "#6F4F3A",
        800: "#231814",
      },
      milky: "#E7E1D8",
      "milky-lighter": "#FDFDFC", // #c9bca7
      "milky-darker": "#D1C5B4",
      chocolate: "#332421",
      "chocolate-light": "#402D29",
      "chocolate-lighter": "#503833",
      "chocolate-darker": "#291D1A",
    },
    fontFamily: {
      "default-sans": ["Montserrat", "Roboto", ...defaultTheme.fontFamily.sans],
      "cabin-sans": ["Cabin", "Roboto", ...defaultTheme.fontFamily.sans],
      "fredoka-sans": [
        "Fredoka",
        "Helvetica Neue",
        ...defaultTheme.fontFamily.sans,
      ],
      "title-cursive": ["Travel November", ...defaultTheme.fontFamily.serif],
      "limelight-cursive": ["Limelight", ...defaultTheme.fontFamily.serif],
      "radditya-signature-cursive": [
        "Radditya Signature",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    gridTemplateColumns: {
      // fixed width size
      "fixed-4": "repeat(4, minmax(100px, 1fr))",
      "fixed-6": "repeat(6, minmax(80px, 1fr))",
      // "fixed-8": "repeat(8, minmax(80px, 1fr))",
      // "fixed-12": "repeat(12, minmax(80px, 1fr))",
    },
    backgroundImage: {
      coffee: "url('/src/assets/images/coffee/coffee-cup.png')",
      notebook: "url('/src/assets/images/notebook.png')",
      // pinstripe: "url('/src/assets/images/pinstripe.png')",
    },

    textShadow: {
      milky: "0 10px 9px #C4B59D, 0px -3px 3px #FFF",
      chocolate: "0 10px 9px #211715, 0px -3px 3px #644640",
      stroke:
        "-1px -1px 0 theme('colors.coffee.600'), \
            1px -1px 0 theme('colors.coffee.600'), \
            -1px 1px 0 theme('colors.coffee.600'), \
            1px 1px 0 theme('colors.coffee.600')",
      // "dark-stroke":
      //   "-1px -1px 0 theme('colors.coffee.300'), 1px -1px 0 theme('colors.coffee.300'), -1px 1px 0 theme('colors.coffee.300'), 1px 1px 0 theme('colors.coffee.300')",
    },
    boxShadow: {
      "light-btn-100":
        "rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 1px 3px 1px",
      "dark-btn-100":
        "rgba(0, 0, 0, 0.8) 0px 1px 2px 0px, rgba(0, 0, 0, 0.4) 0px 1px 3px 1px",
      "light-btn-200": "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)",
      "dark-btn-200": "-1px 3px 8px -1px rgba(0, 0, 0, 0.6)",
      "img-cards-light":
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      "img-cards-dark":
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      "btn-on-cards": "2px 4px 4px rgba(80, 46, 21, 0.25)",
      "coffee-cup":
        "0px 0px 10px 3px rgba(0, 0, 0, 0.4), inset 0px 0px 10px 3px rgba(0, 0, 0, 0.4)",
      "coffee-steam": "-156px 492px 123px -252px #fff",
      "milky-drop":
        "-5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
            5vmin 5vmin 5vmin theme('colors.milky-darker'), \
            inset -5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
            inset 5vmin 5vmin 5vmin theme('colors.milky-darker')",
      "chocolate-drop":
        "-5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
            5vmin 5vmin 5vmin theme('colors.chocolate-darker'), \
            inset -5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
            inset 5vmin 5vmin 5vmin theme('colors.chocolate-darker')",
    },
    animation: {
      coffee: "coffee 100s linear infinite",
      smoke1: "smoke1 3s ease-in-out 0.5s infinite",
      smoke2: "smoke2 3s ease-in-out 1.5s infinite",
      smoke3: "smoke3 4s ease-in-out infinite",
      "milky-drop1":
        "milky-drop1 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
      "chocolate-drop1":
        "chocolate-drop1 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
      "milky-drop2":
        "milky-drop2 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
      "chocolate-drop2":
        "chocolate-drop2 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
      "clicked-milky-drop1":
        "milky-drop1 4s cubic-bezier(0.165, 0.84, 0.44, 1) 1",
      "clicked-chocolate-drop1":
        "chocolate-drop1 4s cubic-bezier(0.165, 0.84, 0.44, 1) 1",
      "clicked-milky-drop2":
        "milky-drop2 4s cubic-bezier(0.165, 0.84, 0.44, 1) 1",
      "clicked-chocolate-drop2":
        "chocolate-drop2 4s cubic-bezier(0.165, 0.84, 0.44, 1) 1",
    },
    keyframes: {
      coffee: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      smoke1: {
        "0%": {
          transform: "translate(20%, -60%)",
          rotate: "0deg",
          filter: "blur(0px)",
          opacity: 0,
        },
        "50%": { filter: "blur(5px)", opacity: 0.4 },
        "100%": {
          transform: "translate(70%, -110%)",
          rotate: "10deg",
          filter: "blur(7px)",
          opacity: 0,
        },
      },
      smoke2: {
        "0%": {
          transform: "translate(40%, -35%)",
          rotate: "0deg",
          filter: "blur(0px)",
          opacity: 0,
        },
        "50%": { filter: "blur(5px)", opacity: 0.5 },
        "100%": {
          transform: "translate(80%, -90%)",
          rotate: "10deg",
          filter: "blur(7px)",
          opacity: 0,
        },
      },
      smoke3: {
        "0%": {
          transform: "translate(30%, -85%)",
          rotate: "0deg",
          filter: "blur(0px)",
          opacity: 0,
        },
        "50%": { filter: "blur(5px)", opacity: 0.4 },
        "100%": {
          transform: "translate(70%, -120%)",
          rotate: "15deg",
          filter: "blur(7px)",
          opacity: 0,
        },
      },
      "milky-drop1": {
        "0%": {
          width: 0,
          height: 0,
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                5vmin 5vmin 5vmin theme('colors.milky-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.milky-darker')",
        },
        "5%": {
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                5vmin 5vmin 5vmin theme('colors.milky-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.milky-darker')",
        },
        "90%": {
          boxShadow: "none",
        },
        "100%": {
          width: "100vmin",
          height: "100vmin",
          boxShadow: "none",
          border: "0 solid theme('colors.milky')",
        },
      },
      "chocolate-drop1": {
        "0%": {
          width: 0,
          height: 0,
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                5vmin 5vmin 5vmin theme('colors.chocolate-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.chocolate-darker')",
        },
        "5%": {
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                5vmin 5vmin 5vmin theme('colors.chocolate-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.chocolate-darker')",
        },
        "90%": {
          boxShadow: "none",
        },
        "100%": {
          width: "100vmin",
          height: "100vmin",
          boxShadow: "none",
          border: "0 solid theme('colors.chocolate')",
        },
      },
      "milky-drop2": {
        "0%": {
          width: 0,
          height: 0,
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                5vmin 5vmin 5vmin theme('colors.milky-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.milky-darker')",
          border: "0 solid theme('colors.milky')",
        },
        "20%": {
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                5vmin 5vmin 5vmin theme('colors.milky-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.milky-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.milky-darker')",
        },
        "100%": {
          width: "60%",
          height: "60%",
          boxShadow: "none",
          border: "1vmin solid theme('colors.milky')",
        },
      },
      "chocolate-drop2": {
        "0%": {
          width: 0,
          height: 0,
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                5vmin 5vmin 5vmin theme('colors.chocolate-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.chocolate-darker')",
          border: "0 solid theme('colors.chocolate')",
        },
        "20%": {
          boxShadow:
            "-5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                5vmin 5vmin 5vmin theme('colors.chocolate-darker'), \
                inset -5vmin -5vmin 5vmin theme('colors.chocolate-lighter'), \
                inset 5vmin 5vmin 5vmin theme('colors.chocolate-darker')",
        },
        "100%": {
          width: "60%",
          height: "60%",
          boxShadow: "none",
          border: "1vmin solid theme('colors.chocolate')",
        },
      },
    },
    willChange: {
      coffee: "transform",
      smoke: "transform, rotate, opacity, filter",
      drop: "width, height, transform, box-shadow, border",
    },
  },
  screens: {
    xs: "360px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1440px",
    xxxl: "1700px",
  },
};
