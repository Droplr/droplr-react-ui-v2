import React, { useEffect, useState } from "react";
import "./text-switch.css";

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
  label?: string;

  /**
   * @member {boolean} disabled - Disabled and uninteractive
   */
  disabled?: true | false;

  /**
   * @member {String} activeColor - Background color
   */
  activeColor?: string;

  /**
   * @member {String} fontColor - Text color
   */
  fontColor?: string;

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
 * @param {TextSwitchProps} TextSwitchProps Component props
 * @param {Array<TextSwitchItemProps>} items Component item list
 */
const TextSwitch = ({
  className = "",
  disabled = false,
  items = [],
  label = "",
  defaultIndex = 0,
  activeColor = "",
  fontColor = "",
  onChange,
}: TextSwitchProps) => {

  const isActive = (item: TextSwitchItemProps) => {
    if(selected == null || selected == undefined) {
      if (typeof defaultIndex == typeof 5) {
        return items.indexOf(item) == defaultIndex;
      } else {
        return (defaultIndex?.toString() || '') == item.id.toString();
      }
    } else {
      return (selected.id?.toString() || '') === item.id.toString();
    }
  }
  const [selected, setSelected] = useState(null);

  const handleChange = (selectedId: any) => {
    const selectedOption = items.find((x) => x.id.toString() === selectedId.toString());
    setSelected(selectedOption || items[0]);
  };

  useEffect(() => {
    if (selected) {
      onChange(selected);
    }
  }, [selected]);

  return (
    <>
      {label && <div className="drui-text-switch__label">{label}</div>}
      <div
        className={[disabled && "text-switch--disabled", "drui-text-switch"].join(" ")}
      >
        {items.map((item, i) => {
          return (
            <div
              key={i}
              id={`text-switch-${i}${className && "-" + className}`}
              style={{backgroundColor: (activeColor !== "" && isActive(item)) ? activeColor : ""}}
              className={[
                `${className}`,
                " text-switch-item",
                isActive(item) ? " active" : "",
              ].join("")}
              onClick={() => {
                handleChange(item.id);
              }}
            >
              <label
              style={{color: (fontColor !== "" && isActive(item)) ? fontColor : ""}}>{item.label}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TextSwitch;
