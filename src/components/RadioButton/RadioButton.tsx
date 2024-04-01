import React from "react";
import "./radio-button.css";

/**
 * @interface RadioButtonProps Component props for the radio button
 * @member {boolean} checked  Checked state
 * @member {String} className  Appends custom class names
 * @member {String} variant The color variant:  primary | secondary | success | warning | danger
 * @member {boolean} disabled  Disabled and uninteractive
 * @member {Function} onClick  Click event handler
 */
export interface RadioButtonProps {
  /**
   * @member {boolean} checked  Checked state
   */
  checked?: boolean;

  /**
   * @member {string} className  Appends custom class names
   */
  className?: string;

  /**
   * @member {string} variant  The color variant
   * @defaultValue 'primary'
   * @options primary | secondary | success | warning | danger
   */
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";

  /**
   * @member {boolean} disabled  Disabled and uninteractive
   */
  disabled?: boolean;

  /**
   * @member {Function} onClick  Click event handler
   */
  onClick?: (e: any) => void;
}

/**
 * @component
 * @desc The radio button component
 * @param {RadioButtonProps}  props The component props, instance of RadioButtonProps
 */
const RadioButton = ({
  checked = false,
  variant = "primary",
  className = "",
  disabled = false,
  onClick = (e) => {},
}: RadioButtonProps) => {
  return (
    <div
      className={`drui-radio-button drui-radio-button-${variant} ${
        disabled ? "drui-radio-button-disabled" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick(!checked);
      }}
    >
      <input type="radio" checked={checked} />
      <span className={[`drui-radio-button-input`, className].join(" ")}></span>
    </div>
  );
};

export default RadioButton;
