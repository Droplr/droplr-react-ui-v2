import React from "react";
import { WithToastProps, WithToasts } from "../components/Toast/handler";

export interface DroplrUIProviderProps {
  theme: "light" | "dark";
  children: any;
  toastProps?: WithToastProps;
}
const DroplrUIProvider = ({
  theme = "light",
  children,
  toastProps = null,
}: DroplrUIProviderProps) => {
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
      <WithToasts {...toastProps}>
        {children}
        <div
          className="drui-tooltip-portal-root"
          id="drui-tooltip-portal-root"
          style={{
            position: "fixed",
            zIndex: "2147483647 !important",
          }}
        ></div>
        <div
          className="drui-dropdown-portal-root"
          id="drui-dropdown-portal-root"
          style={{
            position: "fixed",
            zIndex: "2147483647 !important",
          }}
        ></div>
      </WithToasts>
    </div>
  );
};
export default DroplrUIProvider;
