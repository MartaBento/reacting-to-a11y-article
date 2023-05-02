/** @type {import('tailwindcss').Config} */
import { gray as _gray, red as _red } from "tailwindcss/colors";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      courierPrime: ["Courier Prime", "monospace"],
      dongle: ["Dongle", "sans-serif"],
    },
  },
  // Plantish palette: https://coolors.co/dad7cd-a3b18a-588157-3a5a40-344e41
  colors: {
    timberwolf: "#DAD7CD",
    sage: "#A3B18A",
    fernGreen: "#588157",
    hunterGreen: "#3A5A40",
    brunswickGreen: "#344E41",
    white: "#fff",
    gray: _gray,
    red: _red,
  },
};

export const plugins = [];
