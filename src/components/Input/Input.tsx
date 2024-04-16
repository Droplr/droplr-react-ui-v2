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
 * @member {function} [onBlur]  Event handler for the 'onBlur' event
 * @member {function} [onFocus]  Event handler for the 'onFocus' event
 * @member {function} [onKeyPress]  Event handler for the 'onKeyPress' event
 * @member {function} [onChange]  Event handler for the 'onChange' event
 */
export interface InputProps {
  /**
   * @member {string | number} [value]  The default value of the input field
   */
  value?: string | number;

  /**
   * @member {string} [type]  The input type, values => text | password | number
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
   * @member {boolean} [passwordVisible] Shows or hides the password text
   */
  passwordVisible?: boolean;

  /**
   * @member {boolean} [useHidePasswordIcon]  Uses the library's hide password icon to toggle visibility
   */
  useHidePasswordIcon?: boolean;

  /**
   * @member {function} [onBlur]  Event handler for the 'onBlur' event
   */
  onBlur?: (e) => void;

  /**
   * @member {function} [onFocus]  Event handler for the 'onFocus' event
   */
  onFocus?: (e) => void;

  /**
   * @member {function} [onKeyPress]  Event handler for the 'onKeyPress' event
   */
  onKeyPress?: (e) => void;

  /**
   * @member {function} [onChange]  Event handler for the 'onChange' event
   */
  onChange?: (e) => void;
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
  name = "input-filed",
  disabled = false,
  placeholder = "",
  info = "",
  error = "",
  autoFocus = false,
  readOnly = false,
  passwordVisible = false,
  useHidePasswordIcon = false,
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
      <div className="drui-input__styled">
        {label && <span className="drui-inputLabel">{label}</span>}
        {sublabel && <span className="drui-inputSublabel">{sublabel}</span>}
        <div className="drui-inputIconsContainer">
          <input
            className={[
              "drui-input",
              className ? ` ${className}` : "",
              disabled ? " drui-input--disabled" : "",
              type === "password" ? " drui-input--hasOneIcon" : "",
              error ? " drui-input--error" : "",
              readOnly ? " drui-input--readOnly" : "",
            ].join("")}
            type={type === "password" && isPasswordVisible ? "text" : type}
            defaultValue={value}
            placeholder={placeholder}
            autoFocus={autoFocus}
            readOnly={readOnly}
            disabled={disabled}
            name={name}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            onChange={onChange}
          />
          {useHidePasswordIcon && type === "password" && (
            <div className="drui-iconsContainer">
              {type === "password" &&
                useHidePasswordIcon &&
                (isPasswordVisible ? (
                  <Icon
                    name="Eye"
                    className="drui-input__icon drui-input__passwordVisibilityIcon"
                    onClick={(arg) => setIsPasswordVisible(!isPasswordVisible)}
                    size={18}
                  />
                ) : (
                  <Icon
                    name="EyeOff"
                    className="drui-input__icon drui-input__passwordVisibilityIcon"
                    onClick={(arg) => setIsPasswordVisible(!isPasswordVisible)}
                    size={18}
                  />
                ))}
              {error && (
                <Icon
                  name="Error"
                  className="drui-input__icon drui-input__errorIcon"
                  color="tomato"
                  size={22}
                />
              )}
            </div>
          )}
        </div>
      </div>
      {error && <span className="drui-input__styled-error">{error}</span>}
      {info && <span className="drui-input__styled-info">{info}</span>}
    </>
  );
};

export default Input;
