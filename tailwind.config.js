const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
      "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
            meteor: {
                "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                "70%": { opacity: "1" },
                "100%": {
                    transform: "rotate(215deg) translateX(-500px)",
                    opacity: "0",
                },
            },
        },
    },
  },
    plugins: [
        addVariablesForColors,
        function ({ matchUtilities, theme}) {
            matchUtilities(
                {
                    "bg-dot": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
            );
        },
    ],
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
