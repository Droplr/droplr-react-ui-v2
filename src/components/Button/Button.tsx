import React, { useEffect } from "react";
import "./button.css";
import Loader from "../Loader/Loader";
import "../../assets/shared.css";
import { useToast } from "../Toast/provider";
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
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";

  /**
   * @member {boolean} flat  Uses a solid color instead of a gradient
   */
  flat?: boolean;

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
  label?: string;

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
  icon?: any;
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
  icon = null,
  onClick = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
  label = "",
  flat = false,
}: ButtonProps) => {
  const Toast = useToast();
  return (
    <button
      className={[
        className,
        "drui-button",
        `drui-button--${size}`,
        flat ? `drui-button--${variant}--flat` : `drui-button--${variant}`,
        `${disabled && "drui-button--disabled"}`,
        `${loading && "drui-button--loading"}`,
      ].join(" ")}
      onClick={
        !disabled
          ? (e) => {
              Toast.Info({
                message: "This is a toast message.",
                title: "A test toast title. Have fun!",
                icon: <Icon name="Alert" size={24} color="var(--color-primary)" />,
                duration: 1500,
              });
              onClick(e);
            }
          : null
      }
    >
      <div className="drui-button__content">
        <>
          {icon !== ("None" as any) && icon !== null && (
            <span className={label !== "" ? "drui-button__icon" : ""}>
              {icon}
            </span>
          )}
          {label}
        </>
      </div>
      {loading && <Loader />}
    </button>
  );
};
export default Button;
