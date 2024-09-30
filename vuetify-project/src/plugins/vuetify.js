/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// Define custom themes
const myCustomLightTheme = {
  dark: false, // Theme is light
  colors: {
    background: "#FFFFFF", // Set background to white
    surface: "#FFFFFF", // Optional: you can set surface to white as well
    primary: "#000000",
    jingga : "#fda432", // Set text color to black
    "on-background": "#000000", // Ensure other texts are also black
    "on-surface": "#000000", // Set surface text color to black
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme, // Register the custom theme
    },
  },
});
