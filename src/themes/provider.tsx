import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";

const DroplrThemeProvider = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
export default DroplrThemeProvider;
