import React, { useState } from "react";
import "./switch.css";

/**
 * @interface SwitchProps Component props
 * @member {boolean} checked - Toggle the switch component
 * @member {String} className - Appends custom class names
 * @member {String} label - The switch label
 * @member {String} labelPosition - The position of the label: "top" | "right" | "bottom" | "left"
 * @member {boolean} disabled - Disabled and uninteractive
 * @member {Function} onChange - Click event handler, calls handler with switch state as the parameter
 */
export interface SwitchProps {
  /**
   * @member {boolean} checked - Toggle the switch component
   */
  checked: boolean;
  /**
   * @member {boolean} disabled - Disabled and uninteractive
   */
  disabled?: boolean;
  //   variant? : "primary" | "secondary" | "info" | "success" | "danger" | "warning";
  /**
   * @member {String} className - Appends custom class names
   */
  className?: string;
  /**
   * @member {String} label - The switch label
   */
  label?: string;
  /**
   * @member {String} labelPosition - The switch label position: "top" | "right" | "bottom" | "left"
   */
  labelPosition?: "top" | "right" | "bottom" | "left";
  /**
   * @member {Function} onChange - Click event handler, calls handler with switch state as the parameter
   */
  onChange: (arg: any) => void;
}


/**
 * @desc Switch component
 * @param {SwitchProps} SwitchProps Component props
 */
const Switch = ({
  checked,
  disabled,
  className,
  //   variant,
  label,
  labelPosition,
  onChange,
}: SwitchProps) => {
  return (
    <label
      className={[
        "drui-switch",
        label !== ""
          ? ` switch--${labelPosition != undefined ? labelPosition : "right"}`
          : "",
        disabled ? " disabled" : "",
        // variant ? ` variant-${variant}` : '',
        className !== "" ? className : "",
      ].join("")}
    >
      {label && <span className="switch__label">{label}</span>}
      <input
        className="switch__input"
        type="checkbox"
        checked={checked}
        onChange={() => onChange(checked)}
        disabled={disabled}
      />
      <div className="switch__button" />
    </label>
  );
};

export default Switch;
