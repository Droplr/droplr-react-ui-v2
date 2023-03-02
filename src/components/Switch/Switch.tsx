import React, { useState } from "react";
import styled, { css } from "styled-components";
import { lightTheme } from "../../themes/themes";
import Dropdown from "../Dropdown";

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
    <StyledSwitch
      className={[
        "switch",
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
    </StyledSwitch>
  );
};

const StyledSwitch = styled.label(({ theme }) => {
  if (!theme.fonts) {
    theme = lightTheme;
  }
  return css`
    font-size: ${theme.fonts.size.normal};
    font-family: ${theme.fonts.family.primary};
    color: ${theme.standardSwitch.textColor};
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;

    &.disabled {
      cursor: not-allowed;
      user-select: none;
      pointer-events: none;
      color: ${theme.standardSwitch.textColorDisabled};
    }

    &.switch--right {
      flex-direction: row-reverse;
    }

    &.switch--left {
      flex-direction: row;
    }

    &.switch--top {
      width: max-content;
      flex-direction: column;

      .switch__label {
        margin-bottom: 6px;
      }
    }

    &.switch--bottom {
      width: max-content;
      flex-direction: column-reverse;
    }

    .switch__button {
      position: relative;
      width: 40px;
      height: 20px;
      border-radius: 22px;
      background: ${theme.standardSwitch.backgroundColor};
      border: 1px solid ${theme.standardSwitch.borderColor};
      cursor: inherit;
      transition: all 300ms ease;
      box-sizing: border-box;

      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 16px;
        height: 16px;
        top: 1px;
        left: 1px;
        background-color: ${theme.standardSwitch.backgroundColorAfter};
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 ${theme.standardSwitch.shadowColor};
        transition-property: transform, box-shadow;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1);
        transition-duration: 300ms;
      }
    }

    .switch__input {
      display: none;

      &:checked ~ .switch__button {
        border-color: ${theme.standardSwitch.borderColorChecked};
        background: ${theme.standardSwitch.backgroundColorCheckedPrimary};

        &::after {
          transform: translate3d(20px, 0, 0);
        }
      }
    }

    .switch__input:disabled ~ .switch__button {
      background-color: ${theme.standardSwitch.backgroundColorDisabled};

      &::after {
        box-shadow: none;
      }
    }
  `;
});

export default Switch;
