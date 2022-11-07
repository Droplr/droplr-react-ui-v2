import React, { ReactElement, useEffect, useState } from "react";
import "./thumbnail-switch.css";
import styled, { css } from "styled-components";
import Icon from "../Icons";
import { lightTheme } from "../../themes/themes";

/**
 * @interface ThumbnailSwitch Component props
 * @member {Array<ThumbnailSwitchItemProps} items - Select items list (labels and handlers)
 * @member {number} defaultIndex - Index of the default selected option
 * @member {String} className - Appends custom class names
 * @member {String} label - Text switch label
 * @member {boolean} disabled - Disabled and uninteractive
 * @member {Function} onChange - Click event handler, calls handler with selected item as the parameter
 */
export interface ThumbnailSwitchProps {
  /**
   * @member {Array<ThumbnailSwitchItemProps} items - Select items (labels, icons and handlers)
   */
  items: Array<ThumbnailSwitchItemProps>;

  /**
   * @member {number|string} defaultIndex - Index (or label) of the default selected item
   * @defaultValue 0
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
   * @defaultValue false
   */
  disabled?: true | false;

  /**
   * @member {boolean} withAnimation - Show wobble animation on select
   * @defaultValue true
   */
  withAnimation?: true | false;

  /**
   * @method onChange
   * @desc - Click event handler, calls handler with selected item as the parameter
   * @param {Function} arg - Handler function
   * @returns {ThumbnailSwitchItemProps} - Selected item
   */
  onChange: (arg: ThumbnailSwitchItemProps) => void;
}

/**
 * @interface ThumbnailSwitchItemProps - Instance of switch component item
 * @member {number} id - Numerical ID of the item
 * @member {String} label - Text label for the item
 * @member {icon} icon - DroplrUI icon component
 */
export interface ThumbnailSwitchItemProps {
  /**
   * @desc - The item label
   */
  label: string;

  /**
   * @desc - The item identifier
   */
  id: Number;

  /**
   * @desc - The item icon (DroplrUI)
   * @defaultValue none
   */
  icon?: ReactElement;
}

/**
 * @desc TextSwitch component
 * @param {TextSwitchProps} - Component props
 * @param {Array<ThumbnailSwitchItemProps>} - Component item list
 */

const ThumbnailSwitch = ({
  className = "",
  disabled = false,
  items = [],
  label = "Thumbnail Switch",
  withAnimation = true,
  defaultIndex,
  onChange,
}: ThumbnailSwitchProps) => {

  const setDefaultIndex = (): ThumbnailSwitchItemProps => {
    if(defaultIndex === null || defaultIndex === undefined) return items[0];
    if (typeof defaultIndex !== typeof "") {
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
          return items.find(x => x.id === parseInt(defaultIndex.toString()))
        }
      } else {
        return items.find(x => x.label === defaultIndex)
      }
    }
  }

  const [selected, setSelected] = useState(setDefaultIndex());
  const [selectHistory, setSelectHistory] = useState<Array<Number>>([]);

  const handleOnChange = (item: ThumbnailSwitchItemProps) => {
    if (item.id != null && !selectHistory.includes(item.id)) {
      setSelectHistory((prev) => [...prev, item.id!]);
    }
    setSelected(item);
    onChange(item);
  };

  return (
    <StyledThumbnailSwitch
      className={[
        "thumbnail-switch",
        disabled && " thumbnail-switch--disabled",
        className && ` ${className}`,
      ].join("")}
    >
      {items.map((item, i) => {
        return (
          <div
            key={i}
            className={[
              "thumbnail-switch-container",
              (selected !== null && selected !== undefined && selected.id === item.id) ? " active" : "",
              className && ` ${className}`,
            ].join("")}
            onClick={() => {
              handleOnChange(item);
            }}
          >
            {item.icon && item.icon}
            <div className="thumbnail-switch-label">{item.label}</div>
            { (selected !== null && selected !== undefined && selected.id === item.id) ? (
              <>
                <Icon
                  name={"Check"}
                  size={18}
                  className={[
                    "check-icon",
                    selectHistory.includes(item.id!) && withAnimation
                      ? " wobble"
                      : "",
                  ].join("")}
                  stroke={1.5}
                  color={"#fff"}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </StyledThumbnailSwitch>
  );
};

const StyledThumbnailSwitch = styled.div(({ theme }) => {
  if (!theme.fonts) {
    theme = lightTheme;
  }
  return css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .thumbnail-switch-container {
      padding: 16px 24px 4px 24px;
      border: 1px solid ${theme.thumbnailSwitch.borderColorInactive};
      background-color: ${theme.thumbnailSwitch.backgroundColor};
      border-radius: 5px;
      width: max-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 6px;
      transition-duration: 250ms;
    }
    .thumbnail-switch-container:hover {
      border: 1px solid ${theme.thumbnailSwitch.borderColorHover};
      cursor: pointer;
      transition-duration: 250ms;
    }

    .drui-thumbnail__icon {
      width: 28px;
      height: 28px;
      margin: 8px 0px 0px 0px;
    }

    .thumbnail-switch-label {
      display: flex;
      align-items: center;
      min-width: 64px;
      width: max-content;
      margin-top: 12px;
      margin-bottom: 12px;
      background-color: transparent;
      color: ${theme.thumbnailSwitch.textColor};
      font-family: ${theme.fonts.family.primary};
      font-size: ${theme.fonts.size.normal};
      font-weight: ${theme.fonts.weight.bold};
      text-align: center;
      text-shadow: none;
      border-radius: 5px;
      transition: all 250ms ease-in-out;
    }
    .thumbnail-switch-label:hover {
      cursor: pointer;
    }
    .check-icon {
      display: block;
      position: absolute;
      padding: 2px;
      bottom: -12px;
      border-radius: 50%;
      height: 20px;
      width: 20px;
      background-color: ${theme.thumbnailSwitch.checkmarkBackgroundColor};
      transition: all 250ms ease-in-out;
    }
    .active {
      background-color: ${theme.thumbnailSwitch.backgroundColor};
      border: 1px solid ${theme.thumbnailSwitch.borderColorActive};
      color: ${theme.thumbnailSwitch.textColor};
      position: relative;
    }

    .wobble {
      animation: wobble 0.5s ease;
      transition: all 250ms ease-in-out;
    }

    @keyframes wobble {
      0%,
      100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 15% 15%;
        transform-origin: 15% 15%;
      }

      30% {
        -webkit-transform: translateX(calc(6px / 2)) rotate(10deg);
        transform: translateX(calc(6px / 2)) rotate(10deg);
      }

      45% {
        -webkit-transform: translateX(calc(-6px / 2)) rotate(calc(-10deg / 1.8));
        transform: translateX(calc(-6px / 2)) rotate(calc(-10deg / 1.8));
      }

      75% {
        -webkit-transform: translateX(calc(-6px / 5.5)) rotate(calc(-10deg / 5));
        transform: translateX(calc(-6px / 5.5)) rotate(calc(-10deg / 5));
      }
    }
  `;
});

export default ThumbnailSwitch;
