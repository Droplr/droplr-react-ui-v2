import React, { useEffect } from "react";
import "./checkbox.css";
import Icon from "../Icons/Icons";

/**
 * @interface CheckboxProps Component props
 * @member {boolean} [checked] The checked state of the item
 * @member {String} [className] Appends custom class names
 * @member {string} [variant] The theme variant of the item
 * @member {boolean} [disabled] Disables the item
 * @method onClick Click event handler
 * @method onChange Check change state event handler
 */

export interface CheckboxProps {
  /**
   * @member { boolean } [checked] The checked state of the component
   * @defaultValue false
   */
  checked?: boolean;
  /**
   * @member { "primary" | "secondary" | "warning" | "danger" | "success"} [variant] The theme variant of the item
   * @defaultValue "primary"
   */
  variant?: "primary" | "secondary" | "warning" | "danger" | "success";
  /**
   * @member {boolean} [disabled] Disables the component
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * @member {string} [className] Appends custom class names
   */
  className?: string;

  /**
   * @method onChange
   * @desc Triggers when the checked state changes
   * @param {Function} [arg] The handling function
   */
  onChange?: (checked: boolean) => any;

  /**
   * @method onClick
   * @desc Click event handler, usually used to set the checked state
   */
  onClick?: () => any;
}

const Checkbox = ({
  checked = false,
  variant = "primary",
  disabled = false,
  className = "",
  onChange = (_e) => {},
  onClick = () => {},
}): JSX.Element => {
  useEffect(() => {
    onChange(checked);
  }, [checked]);
  return (
    <div
      className={["drui-checkbox-container", className].join(" ")}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      <div
        className={[
          "drui-checkbox",
          checked && "checked",
          disabled && "disabled",
          `variant-${variant}`,
        ].join(" ")}
      >
        {checked && !disabled && (
          <Icon
            name="CheckSimple"
            color={"#fff"}
            size={16}
            className={"drui-checkbox-check"}
          />
        )}
        {disabled && (
          <Icon
            name="RemoveSimple"
            color={"#fff"}
            size={14}
            className={"drui-checkbox-remove"}
          />
        )}
      </div>
    </div>
  );
};

export default Checkbox;
