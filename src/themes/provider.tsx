import React from "react";

const DroplrThemeProvider = ({ theme, children }) => {
  return (
    <div
      className={[
        "drui-theme-wrapper",
        theme === "light" ? "theme-light" : "theme-dark",
      ].join(" ")}
    >
      {children}
    </div>
  );
};
export default DroplrThemeProvider;
