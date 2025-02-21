import React, { useEffect, useState } from "react";
import Icon from "../Icons";
import "./input.css";

/**
 * @interface InputProps Instance of switch component item
 * @member {string} [value]  The default value of the input field
 * @member {string} [type]  The input type, values => text | password | number
 * @member {string} [className]  Append a custom class to the component
 * @member {string} [label]  The label of the input field
 * @member {string} [sublabel]  A smaller label under the {label} prop
 * @member {boolean} [disabled]  Disables the input field
 * @member {string} [placeholder]  The placeholder text for the input field
 * @member {string} [info]  Small informative text under the input field
 * @member {string} [error]  Displays an error message under the input field
 * @member {boolean} [autofocus]  Autofocuses the input field
 * @member {boolean} [readOnly]  Makes the component uneditable
 * @member {boolean} [passwordVisible] Shows or hides the password text
 * @member {boolean} [useHidePasswordIcon]  Uses the library's hide password icon to toggle visibility
 * @member {number} [min]  The minimum value for the input field
 * @member {number} [max]  The maximum value for the input field
 * @member {function} [onBlur]  Event handler for the 'onBlur' event
 * @member {function} [onFocus]  Event handler for the 'onFocus' event
 * @member {function} [onKeyPress]  Event handler for the 'onKeyPress' event
 * @member {function} [onChange]  Event handler for the 'onChange' event
 */
export interface InputProps {
  /**
   * @member {string | number} [value] The default value of the input field
   */
  value?: string | number;

  /**
   * @member {string} [type] The input type
   * @default "text"
   */
  type?: "text" | "password" | "number";

  /**
   * @member {string} [name]  The name attribute for the input field
   */
  name?: string;

  /**
   * @member {string} [className]  Append a custom class to the component
   */
  className?: string;

  /**
   * @member {string} [label]  The label of the input field
   */
  label?: string;

  /**
   * @member {string} [sublabel]  A smaller label under the {label} prop
   */
  sublabel?: string;

  /**
   * @member {boolean} [disabled]  Disables the input field
   */
  disabled?: boolean;

  /**
   * @member {string} [placeholder]  The placeholder text for the input field
   */
  placeholder?: string;

  /**
   * @member {string} [info]  Small informative text under the input field
   */
  info?: string;

  /**
   * @member {string} [error]  Displays an error message under the input field
   */
  error?: string;

  /**
   * @member {boolean} [autofocus]  Autofocuses the input field
   */
  autoFocus?: boolean;

  /**
   * @member {boolean} [readOnly]  Makes the component uneditable
   */
  readOnly?: boolean;

  /**
   * @member {boolean} [passwordVisible] Initial visibility state for password fields
   * @description When type is "password", shows a toggle icon that switches between showing and hiding the password text
   * @default false
   */
  passwordVisible?: boolean;

  /**
   * @member {React.ReactNode} [icon] The icon displayed on the right-hand side of the input field
   * @description Recommended icon size: 20px. For password fields, the Eye/EyeOff icons are automatically shown
   */
  icon?: React.ReactNode;

  /**
   * @member {string} [iconTopOffset]  The offset from the top of the input field
   * @desc Default value: 52%
   */
  iconTopOffset?: string;

  /**
   * @member {number} [min]  The minimum value for the input field
   */
  min?: number;

  /**
   * @member {number} [max]  The maximum value for the input field
   */
  max?: number;

  /**
   * @member {number} [step]  The step value for the input field
   */
  step?: number;

  /**
   * @member {function} [onBlur]  Event handler for the 'onBlur' event
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * @member {function} [onFocus]  Event handler for the 'onFocus' event
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * @member {function} [onKeyPress]  Event handler for the 'onKeyPress' event
   */
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * @member {function} [onChange]  Event handler for the 'onChange' event
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @component
 * @desc The Input component
 * @param {InputProps}  props The component props, instance of InputProps
 */
const Input = ({
  value = "",
  type = "text",
  className = "",
  label = "",
  sublabel = "",
  name = "input-field",
  disabled = false,
  placeholder = "",
  info = "",
  error = "",
  autoFocus = false,
  readOnly = false,
  passwordVisible = false,
  icon = null,
  iconTopOffset = "",
  min = 0,
  max = 9999999999999,
  step = 1,
  onBlur = (e) => {},
  onChange = (e) => {},
  onFocus = (e) => {},
  onKeyPress = (e) => {},
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] =
    useState<boolean>(passwordVisible);

  // Password Visibility Hook
  useEffect(() => {
    setIsPasswordVisible(passwordVisible);
  }, [passwordVisible]);

  return (
    <>
      <div
        className={[
          "drui-input__styled",
          className ? ` ${className}` : "",
        ].join(" ")}
      >
        {label && <span className="drui-inputLabel">{label}</span>}
        {sublabel && <span className="drui-inputSublabel">{sublabel}</span>}
        <input
          className={[
            "drui-input",
            disabled ? " drui-input--disabled" : "",
            type === "password" ? " drui-input--hasOneIcon" : "",
            error ? " drui-input--error" : "",
            readOnly ? " drui-input--readOnly" : "",
            icon ? " drui-input--has-icon" : "",
          ].join("")}
          type={type === "password" && isPasswordVisible ? "text" : type}
          defaultValue={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
        {(icon || type === "password") && (
          <div
            className="drui-input-field-icon"
            style={{
              top:
                iconTopOffset !== ""
                  ? iconTopOffset
                  : sublabel !== ""
                  ? "64%"
                  : "52%",
              cursor: type === "password" ? "pointer" : "default",
            }}
            onClick={type === "password" ? () => setIsPasswordVisible(!isPasswordVisible) : undefined}
          >
            {type === "password" ? (
              <Icon name={isPasswordVisible ? "EyeOff" : "Eye"} size={20} />
            ) : (
              icon
            )}
          </div>
        )}
      </div>
      {error && <span className="drui-input__styled-error">{error}</span>}
      {info && <span className="drui-input__styled-info">{info}</span>}
    </>
  );
};

export default Input;
