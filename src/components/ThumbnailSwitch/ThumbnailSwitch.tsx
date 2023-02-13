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
 * @member {number} iconSize - The pixel size of the thumbnails icon
 * @member {boolean} disabled - Disables the specific item
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

  /**
   * @desc - The pixel size of the thumbnails icon
   */
  iconSize: number;

  /**
   * @desc - Disables the specific item
   * @defaultValue falls
   */
  disabled?: boolean;
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
  label = "",
  withAnimation = true,
  defaultIndex,
  onChange,
}: ThumbnailSwitchProps) => {

  const [selected, setSelected] = useState(null);
  const [selectHistory, setSelectHistory] = useState<Array<Number>>([]);

  const handleOnChange = (item: ThumbnailSwitchItemProps) => {
    if (item.id != null && !selectHistory.includes(item.id)) {
      setSelectHistory((prev) => [...prev, item.id!]);
    }
    setSelected(item);
    onChange(item);
  };

  const isActive = (item: ThumbnailSwitchItemProps) => {
    if(selected == null || selected == undefined) {
      if (typeof defaultIndex == typeof 5) {
        return items.indexOf(item) == defaultIndex;
      } else {
        return (defaultIndex.toString() || '') == item.id.toString();
      }
    } else {
      return (selected.id?.toString() || '') === item.id.toString();
    }
  }

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
              item.disabled ? " thumbnail_switch-item-disabled" : "",
              isActive(item)
                ? " active"
                : "",
              className && ` ${className}`,
            ].join("")}
            onClick={() => {
              if(!item.disabled) {
                handleOnChange(item);
              }
            }}
          >
          {item.icon && item.icon}
            <div className="thumbnail-switch-label">{item.label}</div>
            {
              isActive(item)? (
              <>
                <Icon
                  name={"Check"}
                  size={item.iconSize > 1 ? item.iconSize : 12}
                  className={[
                    "check-icon",
                    selectHistory.includes(item.id!) && withAnimation
                      ? " wobble"
                      : "",
                  ].join("")}
                  stroke={2}
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
    justify-content: space-between;

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
      padding: 4px;
      bottom: -12px;
      border-radius: 50%;
      height: 1em;
      width: 1em;
      background-color: ${theme.thumbnailSwitch.checkmarkBackgroundColor};
      transition: all 250ms ease-in-out;
    }
    .active {
      background-color: ${theme.thumbnailSwitch.backgroundColor};
      border: 1px solid ${theme.thumbnailSwitch.borderColorActive};
      color: ${theme.thumbnailSwitch.textColor};
      position: relative;
    }
    .thumbnail_switch-item-disabled {
      opacity: 0.4;
      &:hover {
        cursor: not-allowed;
      }
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
