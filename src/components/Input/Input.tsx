import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Icon from "../Icons";

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
   * @member {string} [value]  The default value of the input field
   */
  value?: string;

  /**
   * @member {string} [type]  The input type, values => text | password | number
   */
  type?: "text" | "password" | "number";

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
  onBlur?: () => void;

  /**
   * @member {function} [onFocus]  Event handler for the 'onFocus' event
   */
  onFocus?: () => void;

  /**
   * @member {function} [onKeyPress]  Event handler for the 'onKeyPress' event
   */
  onKeyPress?: () => void;

  /**
   * @member {function} [onChange]  Event handler for the 'onChange' event
   */
  onChange?: () => void;
}

/**
 * @component
 * @desc The Input component
 * @param {InputProps}  props The component props, instance of InputProps
 */
const Input = ({
  value,
  type = "text",
  className,
  label,
  sublabel,
  disabled,
  placeholder,
  info,
  error,
  autoFocus,
  readOnly,
  passwordVisible,
  useHidePasswordIcon,
  onBlur,
  onChange,
  onFocus,
  onKeyPress,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] =
    useState<boolean>(passwordVisible);

  // Password Visibility Hook
  useEffect(() => {
    setIsPasswordVisible(passwordVisible);
  }, [passwordVisible]);

  return (
    <>
      <StyledInput>
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
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            onChange={onChange}
          />
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
        </div>
      </StyledInput>
      {error && <StyledError>{error}</StyledError>}
      {info && <StyledInfo>{info}</StyledInfo>}
    </>
  );
};

const StyledError = styled.span(({ theme }) => {
  return css`
    display: block;
    color: tomato;
    font-size: ${theme.fonts.size.small};
    font-family: ${theme.fonts.family.primary};
    font-family: ${theme.input.errorColor};
    margin-bottom: 6px;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
});

const StyledInfo = styled.span(({ theme }) => {
  return css`
    display: block;
    color: ${theme.input.textColor};
    font-size: ${theme.fonts.size.small};
    font-family: ${theme.fonts.family.primary};
    font-family: ${theme.input.errorColor};
    margin-bottom: 6px;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
});

const StyledInput = styled.div(({ theme }) => {
  return css`
    font-size: ${theme.fonts.size.normal};
    font-family: ${theme.fonts.family.primary};
    position: relative;
    width: 100%;

    .drui-inputLabel,
    .drui-inputSublabel {
      display: block;
      color: ${theme.input.label.textColor};
      font-size: ${theme.fonts.size.normal};
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .drui-inputSublabel {
      font-size: ${theme.fonts.size.small};
    }

    .drui-inputInfo,
    .drui-inputError {
      font-size: ${theme.fonts.size.small};
      margin-bottom: 0;
      margin-top: 6px;
    }

    .drui-inputError {
      margin-top: 0;
      color: ${theme.input.errorColor};
      font-weight: ${theme.fonts.weight.bold};
    }

    .drui-input {
      position: relative;
      box-sizing: border-box;
      height: 40px;
      width: 100%;
      padding: 0 12px;
      background-color: ${theme.input.backgroundColor};
      color: ${theme.input.textColor};
      border-width: 1px;
      border-style: solid;
      border-color: ${theme.input.borderColor};
      border-radius: 4px;
      outline: none;
      font-size: inherit;
      font-weight: inherit;
      font-family: inherit;
      transition: all 0.2s ease;

      &::placeholder {
        color: ${theme.input.placeholderColor};
      }

      &:hover {
        border-color: ${theme.input.borderColorHover};
      }

      &:focus {
        color: ${theme.input.textColorFocus};
        border-color: ${theme.input.borderColorFocus};
        //box-shadow: inset 0 0 0 2px ${theme.input.shadowColor};
      }
    }

    .drui-input--readOnly:hover,
    .drui-input--readOnly:focus,
    .drui-input--disabled:hover {
      border-color: ${theme.input.borderColor};
      box-shadow: none;
    }

    .drui-input--readOnly:focus {
      color: ${theme.input.textColor};
    }

    .drui-input--disabled {
      cursor: not-allowed;
      color: ${theme.input.disabledTextColor};
    }

    .drui-input--hasOneIcon {
      padding-right: 44px;
    }

    .drui-input--hasTwoIcons {
      padding-right: 68px;
    }

    .drui-input--error {
      border-color: ${theme.input.errorColor};
    }

    .drui-input--error:hover,
    .drui-input--error:focus {
      border-color: ${theme.input.errorColor};
      box-shadow: none;
    }

    .drui-inputIconsContainer {
      position: relative;

      .drui-iconsContainer {
        position: absolute;
        top: 10px;
        right: 12px;
      }
      .drui-input__passwordVisibilityIcon {
        cursor: pointer;
      }

      .drui-input__errorIcon {
        path {
          fill: ${theme.input.errorColor};
        }
      }
    }
  `;
});

export default Input;
