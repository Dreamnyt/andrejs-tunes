module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-primary": "#1db954",
        "gray-primary": "#29292B",
        "primary-variant-light-mode": "#3700B3",
        "background-light-mode": "#F0F2F9",
        "primary-variant-dark-mode": "#3700B3",
        "background-dark-mode": "#202021",
        "span-light": "#717171",
        "text-dark": "#6B6BF1",
        "white-translucent": "rgba(255, 255, 255, 0.3)",
        "black-translucent": "rgba(0, 0, 0, 0.3)",
      },

      borderWidth: {
        normal: "3px",
      },

      width: {
        movieCard: "320px",
        NavBar: "760",
      },

      height: {
        movieCard: "515px",
      },

      margin: {
        bigScreen: "800px",
      },

      transitionProperty: {
        "transition-icon": "all 5s ease",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
