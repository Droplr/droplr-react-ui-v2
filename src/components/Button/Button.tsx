import React from "react";
import "./button.css";
import styled, { css, useTheme } from "styled-components";
import Loader from "../Loader/Loader";
import { lightTheme } from "../../themes/themes";
import Icon from "../Icons/Icons";

/**
 * @interface ButtonProps Instance of switch component item
 * @member {String} className  Appends custom class names
 * @member {String} Style variants => primary | secondary | success | info | warning | danger | alternative
 * @member {String} size  Size variants => small | medium | large
 * @member {String} label  Text switch label
 * @member {boolean} disabled  Disabled and uninteractive
 * @member {boolean} loading  Shows loading spinner
 * @member {boolean} icon  The button icon (DroplrUI)
 * @member {Function} onClick  Click event handler
 */
export interface ButtonProps {
  /**
   * @member {string} className  Appends custom class names
   */
  className?: string;

  /**
   * variant  Style variants
   * @enum
   * @defaultValue 'primary'
   * @options primary | secondary | success | info | warning | danger
   */
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";

  /**
   * @member {string} size  Button sizes
   * @defaultValue 'medium'
   * @options small | medium | large
   */
  size?: "small" | "medium" | "large";

  /**
   * @member {String} label  Button label text
   * @defaultValue 'Button'
   */
  label: string;

  /**
   * @member {boolean} disabled  Disabled and uninteractive
   * @defaultValue false
   */
  disabled?: true | false;

  /**
   * @member {boolean} loading  Show loading spinner
   * @defaultValue false
   */
  loading?: true | false;

  /**
   * @desc  The button icon (DroplrUI)
   * @defaultValue null
   */
  icon?: JSX.Element;
  /**
   * @method onClick
   * @desc  Click event handler
   * @param {Function} event  Handler function
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * @component
 * @desc The button component
 * @param {ButtonProps}  props The component props, instance of Button Props
 */
const Button = ({
  className = "",
  disabled = false,
  loading = false,
  size = "medium",
  variant = "primary",
  icon,
  onClick = () => {},
  label = "",
}: ButtonProps) => {
  console.log(icon !== undefined)
  return (
    <StyledButton
      type="button"
      className={[
        className,
        "drui-button",
        `drui-button--${size}`,
        `drui-button--${variant}`,
        `${disabled && "drui-button--disabled"}`,
        `${loading && "drui-button--loading"}`,
      ].join(" ")}
      onClick={!disabled ? onClick : null}
    >
      <div className="drui-button__content">
        <>
          {icon && <span className={label !== "" ? "drui-button__icon" : ""}>{icon}</span>}
          {label}
        </>
      </div>
      {loading && <Loader />}
    </StyledButton>
  );
};

const StyledButton = styled.button(({ theme }) => {
  if (!theme.fonts) {
    theme = lightTheme;
  }
  return css`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: auto;
    height: 40px;
    min-width: 64px;
    padding: 0 12px;
    border-radius: 4px;
    background: ${theme.button.primary.backgroundColor};
    color: ${theme.button.primary.textColor};
    border: none;
    outline: none;
    font-size: ${theme.fonts.size.normal};
    font-weight: ${theme.fonts.weight.bold};
    font-family: ${theme.fonts.family.primary};
    cursor: pointer;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  
    &:hover {
      background: ${theme.button.primary.backgroundColorHover};
    }
  
    &:active {
      background: ${theme.button.primary.backgroundColorActive};
    }
  
    .drui-loader {
      border-color: ${theme.button.primary.loaderColor};
    }
  }
  
  .drui-button__icon {
    margin-right: 12px;
  }
  
  &.drui-button__content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex: 1;

  }
  
  &.drui-button__dropdownIcon {
    width: 24px;
    height: 24px;
  
    path {
      fill: ${theme.button.primary.iconColor};
    }
  }
  
  &.drui-button--withText {
    &.drui-button__dropdownIcon {
      margin-left: 8px;
    }
  }
  
    &.drui-button--withText, &.drui-button--withIcon {
      padding: 0 16px;
    }
  
    &.drui-button--maxWidth {
      width: 100%;
    }
  
    &.drui-button--disabled,
    &.drui-button--disabled:hover {
      background: ${theme.button.primary.backgroundColorDisabled};
      box-shadow: none;
      cursor: not-allowed;
      border: none;
    }
    &.drui-button--loading,
    &.drui-button--loading:hover {
      background: ${theme.button.primary.backgroundColor};
  
      .drui-button__content {
        z-index: -1;
      }
    }
  
    &.drui-button--success {
      background: ${theme.button.primary.Success.backgroundColor};
  
      &:hover {
        background: ${theme.button.primary.Success.backgroundColorHover};
      }
  
      &:active {
        background: ${theme.button.primary.Success.backgroundColorActive};
      }
    }
  
    &.drui-button--success&.drui-button--disabled {
      background: ${theme.button.primary.Success.backgroundColorDisabled};
      color: ${theme.button.primary.Success.textColorDisabled};
    }
  
    &.drui-button--success&.drui-button--loading {
      background: ${theme.button.primary.Success.backgroundColor};
  
      &.drui-button__content {
        z-index: -1;
      }
    }
  
    &.drui-button--danger {
      background: ${theme.button.primary.danger.backgroundColor};
  
      &:hover {
        background: ${theme.button.primary.danger.backgroundColorHover};
      }
  
      &:active {
        background: ${theme.button.primary.danger.backgroundColorActive};
      }
    }
  
    &.drui-button--danger&.drui-button--disabled {
      background: ${theme.button.primary.danger.backgroundColorDisabled};
      color: ${theme.button.primary.danger.textColorDisabled};
    }
    &.drui-button--danger&.drui-button--loading {
      background: ${theme.button.primary.danger.backgroundColor};
  
      &.drui-button__content {
        z-index: -1;
      }
    }
  
    &.drui-button--info {
      background: ${theme.button.primary.info.backgroundColor};
  
      &:hover {
        background: ${theme.button.primary.info.backgroundColorHover};
      }
  
      &:active {
        background: ${theme.button.primary.info.backgroundColorActive};
      }
    }
  
    &.drui-button--info&.drui-button--disabled {
      background: ${theme.button.primary.info.backgroundColorDisabled};
      color: ${theme.button.primary.info.textColorDisabled};
    }
  
    &.drui-button--info&.drui-button--loading {
      background: ${theme.button.primary.info.backgroundColor};
  
      &.drui-button__content {
        z-index: -1;
      }
    }
  
    &.drui-button--warning {
      background: ${theme.button.primary.warning.backgroundColor};
  
      &:hover {
        background: ${theme.button.primary.warning.backgroundColorHover};
      }
  
      &:active {
        background: ${theme.button.primary.warning.backgroundColorActive};
      }
    }
  
    &.drui-button--warning&.drui-button--disabled {
      background: ${theme.button.primary.warning.backgroundColorDisabled};
      color: ${theme.button.primary.warning.textColorDisabled};
    }
  
    &.drui-button--warning&.drui-button--loading {
      background: ${theme.button.primary.warning.backgroundColor};
  
      &.drui-button__content {
        z-index: -1;
      }
    }
  
    &.drui-button--secondary {
      background: ${theme.button.secondary.backgroundColor};
      border: 1px solid ${theme.button.secondary.borderColor};
      font-weight: ${theme.fonts.weight.bolder};
      color: ${theme.button.secondary.textColor};
      box-shadow: none;
  
      &:hover {
        background: ${theme.button.secondary.backgroundColorHover};
        border: 1px solid ${theme.button.secondary.borderColorHover};
      }
  
      &:active {
        background: ${theme.button.secondary.backgroundColorActive};
      }
  
      .drui-loader {
        border-color: ${theme.button.secondary.loaderColor};
      }
  
      &.drui-button__icon {
        path {
          fill: ${theme.button.secondary.iconColor};
        }
      }
  
      &.drui-button__dropdownIcon {
        path {
          fill: ${theme.button.secondary.iconColor};
        }
      }
  
      &&.drui-button--disabled,
      &&.drui-button--disabled:hover {
        background: ${theme.button.secondary.backgroundColorDisabled};
        border: 1px solid ${theme.button.secondary.borderColor};
        color: ${theme.button.secondary.textColorDisabled};
        box-shadow: none;
        cursor: not-allowed;
      }
  
      &&.drui-button--loading,
      &&.drui-button--loading:hover {
        background: ${theme.button.secondary.backgroundColor};
        border: 1px solid ${theme.button.secondary.borderColor};
      }
  
      &&.drui-button--danger {
        background: none;
        border: 1px solid ${theme.button.secondary.danger.borderColor};
        color: ${theme.button.secondary.danger.textColor};
  
        &.drui-button__icon {
          path {
            fill: ${theme.button.secondary.danger.borderColor};
          }
        }
  
        &:hover {
          border-color: ${theme.button.secondary.danger.borderColorHover};
          color: ${theme.button.secondary.danger.textColorHover};
  
          &.drui-button__icon {
            path {
              fill: ${theme.button.secondary.danger.borderColorHover};
            }
          }
        }
  
        &:active {
          border-color: ${theme.button.secondary.danger.borderColorActive};
          color: ${theme.button.secondary.danger.textColorActive};
  
          &.drui-button__icon {
            path {
              fill: ${theme.button.secondary.danger.borderColorActive};
            }
          }
        }
      }
  
      &&.drui-button--danger&.drui-button--disabled {
        color: ${theme.button.secondary.danger.textColorDisabled};
        border-color: ${theme.button.secondary.danger.borderColorDisabled};
      }
  
      &&.drui-button--danger&.drui-button--loading {
        background: none;
  
        .drui-loader {
          border-color: ${theme.button.secondary.danger.borderColor};
        }
  
        &.drui-button__content {
          z-index: -1;
        }
      }
    }
    `;
});

export default Button;
