import React, { useEffect, useState } from "react";
import "./text-switch.css";
import styled, { css } from "styled-components";
import { lightTheme } from "../../themes/themes";

/**
 * @interface TextSwitchProps Component props
 * @member {Array<TextSwitchItem} items - Select items (labels and handlers)
 * @member {number} defaultIndex - Index of the default selected option
 * @member {String} className - Appends custom class names
 * @member {String} label - Text switch label
 * @member {boolean} disabled - Disabled and uninteractive
 * @member {Function} onChange - Click event handler, calls handler with selected item as the parameter
 */
export interface TextSwitchProps {
  /**
   * @member {Array<TextSwitchItem} items - Select items (labels and handlers)
   */
  items: Array<TextSwitchItemProps>;

  /**
   * @member {number} defaultIndex - Index (or label) of the default selected option
   */
  defaultIndex?: number | string;

  /**
   * @member {String} className - Appends custom class names
   */
  className?: string;

  /**
   * @member {String} label - Text switch label
   */
  label: string;

  /**
   * @member {boolean} disabled - Disabled and uninteractive
   */
  disabled?: true | false;

  /**
   * @method onChange
   * @desc - Click event handler, calls handler with selected item as the parameter
   * @param {Function} arg - Handler function
   * @returns {TextSwitchItemProps} - Selected item
   */
  onChange: (arg: TextSwitchItemProps) => void;
}

/**
 * @interface TextSwitchItem - Instance of switch component item
 * @member {number} id - Numerical ID of the item
 * @member {String} label - Text label for the item
 * @member {Icon} [icon] - DroplrUI icon component
 */
export interface TextSwitchItemProps {
  /**
   * @desc - The item label
   * @defaultValue 'Option 1'
   */
  label: string;

  /**
   * @desc - The item identifier
   * @defaultValue 0
   */
  id: number | string;

  /**
   * @desc - The item icon (DroplrUI)
   * @defaultValue null
   */
  icon?: () => {};
}

/**
 * @desc TextSwitch component
 * @param {TextSwitchProps} - Component props
 * @param {Array<TextSwitchItemProps>} - Component item list
 */
const TextSwitch = ({
  className = "",
  disabled = false,
  items = [],
  label = "",
  defaultIndex = 0,
  onChange,
}: TextSwitchProps) => {
  const setDefaultIndex = (): TextSwitchItemProps => {
    if (typeof defaultIndex === typeof 1) {
      if (defaultIndex > items.length - 1) {
        return items[0];
      } else {
        return items[defaultIndex];
      }
    } else {
      if (!isNaN(parseInt(defaultIndex.toString()))) {
        if (parseInt(defaultIndex.toString()) > items.length - 1) {
          return items[0];
        } else {
          return items.find((x) => x.id.toString() === defaultIndex.toString());
        }
      } else {
        return items.find((x) => x.id.toString() === defaultIndex.toString());
      }
    }
  };
  const [selected, setSelected] = useState(setDefaultIndex());

  const handleChange = (selectedId: string) => {
    const selectedOption = items.find((x) => x.id.toString() === selectedId);
    setSelected(selectedOption || items[0]);
  };

  useEffect(() => {
    if (selected) {
      onChange(selected);
    }
  }, [selected]);

  return (
    <>
      {label && <StyledTextSwitchLabel>{label}</StyledTextSwitchLabel>}
      <StyledTextSwitch
        className={[disabled && "text-switch--disabled"].join(" ")}
      >
        {items.map((item, i) => {
          return (
            <div
              key={i}
              id={`text-switch-${i}${className && "-" + className}`}
              className={[
                "text-switch-item",
                selected.id == item.id && "active",
              ].join(" ")}
              onClick={() => {
                handleChange(item.id.toString());
              }}
            >
              <label>{item.label}</label>
            </div>
          );
        })}
      </StyledTextSwitch>
    </>
  );
};

const StyledTextSwitchLabel = styled.div(({ theme }) => {
  if (!theme.fonts) {
    theme = lightTheme;
  }
  return css`
    color: ${theme.textSwitch.textColorLabel};
    font-family: ${theme.fonts.family.primary};
    font-size: ${theme.fonts.size.normal};
    font-weight: ${theme.fonts.weight.bold};
    padding-bottom: 8px;
  `;
});

const StyledTextSwitch = styled.div(({ theme }) => {
  if (!theme.fonts) {
    theme = lightTheme;
  }
  return css`
    padding: 4px;
    border: 1px solid ${theme.textSwitch.borderColor};
    border-radius: 5px;
    width: max-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .text-switch-item {
      min-width: 64px;
      width: max-content;
      background-color: transparent;
      color: ${theme.textSwitch.textColorDisabled};
      font-family: ${theme.fonts.family.primary};
      font-size: ${theme.fonts.size.normal};
      font-weight: ${theme.fonts.weight.bold};
      text-align: center;
      text-shadow: none;
      padding: 8px 18px;
      border-radius: 5px;
      transition: all 250ms ease-in-out;

      path {
        fill: ${theme.textSwitch.iconColorDisabled};
      }
    }
    label {
      display: flex;
      align-items: center;
    }
    label:hover {
      cursor: pointer;
    }

    .drui-button__icon {
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }

    .active {
      background-color: ${theme.textSwitch.backgroundColor};
      color: ${theme.textSwitch.textColorActive};

      path {
        fill: ${theme.textSwitch.iconColorActive};
      }
    }
  `;
});

export default TextSwitch;
