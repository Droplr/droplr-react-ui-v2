import React from "react";
import "./loader.css";

export interface LoaderProps {}
const Loader = ({}: LoaderProps) => {
  return (
    <div className="drui-loader-container">
      <div className="drui-loader" />
    </div>
  );
};

export default Loader;
