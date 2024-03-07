import React, { ReactElement, useState } from "react";
import "./thumbnail-switch.css";
import Icon from "../Icons";

/**
 * @interface ThumbnailSwitch Component props
 * @member {Array<ThumbnailSwitchItemProps} items - Select items list (labels and handlers)
 * @member {number} defaultIndex - Index of the default selected option
 * @member {String} className - Appends custom class names
 * @member {String} label - Text switch label
 * @member {number} fontSize - Font size of the label
 * @member {String} fontColor - Font color of the label
 * @member {boolean} showCheckmark - Show checkmark on selected item
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
   * @member {number} fontSize - Font size of the label
   * @defaultValue 14
   */
  fontSize?: number;
  /**
   * @member {String} fontColor - Font color of the label
   * @defaultValue #000
   */
  fontColor?: string;

  /**
   * @member {boolean} showCheckmark - Show checkmark on selected item
   */
  showCheckmark?: boolean;

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
  fontSize = 14,
  showCheckmark = true,
  fontColor = "",
  withAnimation = true,
  defaultIndex = 0,
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
    if (selected == null || selected == undefined) {
      if (typeof defaultIndex == typeof 5) {
        return items.indexOf(item) == defaultIndex;
      } else {
        return (defaultIndex.toString() || "") == item.id.toString();
      }
    } else {
      return (selected.id?.toString() || "") === item.id.toString();
    }
  };

  return (
    <div
      className={[
        "thumbnail-switch",
        disabled ? " thumbnail-switch--disabled" : "",
        className ? ` ${className}` : "",
      ].join("")}
    >
      {items.map((item, i) => {
        return (
          <div
            key={i}
            className={[
              "thumbnail-switch-container",
              item.disabled ? " thumbnail_switch-item-disabled" : "",
              isActive(item) ? " active" : "",
              className && ` ${className}`,
            ].join("")}
            onClick={() => {
              if (!item.disabled) {
                handleOnChange(item);
              }
            }}
            style={{ opacity: isActive(item) ? 1 : 0.8 }}
          >
            {item.icon && item.icon}
            <div
              className="thumbnail-switch-label"
              style={{ fontSize: fontSize, color: fontColor }}
            >
              {item.label}
            </div>
            {isActive(item) && showCheckmark ? (
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
    </div>
  );
};

export default ThumbnailSwitch;
