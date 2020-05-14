import React from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const theme = {
  colors: {
    primary: "#dbfe87",
    green: "#03b5aa",
    purple: "#7a306c",
    blue: "#oc1b33",
    khaki: "#B2AA8E",
  },
};

export const ThemeProvider = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  img {
    border: 5px solid transparent;
    border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
    border-image-slice: 1;
    margin: 20px auto;
  }

`;

export default theme;
