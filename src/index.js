import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { ThemeProvider, GlobalStyle } from "./theme";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
