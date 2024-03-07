import React from "react";

const DroplrThemeProvider = ({ theme, children }) => {
  return (
    <div
      className={[
        "drui-theme-wrapper",
        theme === "light" ? "theme-light" : "theme-dark",
      ].join(" ")}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
export default DroplrThemeProvider;
