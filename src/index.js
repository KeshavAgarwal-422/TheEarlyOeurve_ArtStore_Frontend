import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(0,0,0,1)",
      dark: "rgba(0,0,0,1)",
      light: "rgba(61,64,66,1)",
      contrastText: "rgba(0,0,0,0)",
    },
    mode: "light",
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>
);
