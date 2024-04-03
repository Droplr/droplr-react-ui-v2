import React, { useEffect, useRef, useState } from "react";
import "./toast.css";

/**
 * @interface ToastProps Component props for a toast message
 * @member {number} id  Unique identifier for the toast
 * @member {string} message  The message to display
 * @member {string} title  The title of the toast
 * @member {any} icon  The icon to display
 * @member {number} duration  The duration the toast is displayed
 * @member {string} variant  The color variant: success | error | warning | info
 * @member {boolean} clickToDismiss  Dismiss the toast on click
 * @member {boolean} withProgressBar  Show a progress bar
 * @member {Function} onClick  Click event handler
 */
export interface ToastProps {
  /**
   * @member {number} id  Unique identifier for the toast
   */
  id?: number;
  /**
   * @member {string} message  The message to display
   */
  message: string;
  /**
   * @member {string} title  The title of the toast
   */
  variant: "success" | "error" | "warning" | "info";
  /**
   * @member {any} icon  The icon to display
   */
  title?: string;
  /**
   * @member {number} duration  The duration the toast is displayed
   */
  icon?: any;
  /**
   * @member {string} variant  The color variant: success | error | warning | info
   */
  duration?: number;
  align?: "top" | "bottom";
  /**
   * @member {boolean} clickToDismiss  Dismiss the toast on click
   */
  clickToDismiss?: boolean;
  /**
   * @member {boolean} withProgressBar  Show a progress bar
   */
  withProgressBar?: boolean;
  /**
   * @member {Function} onClick  Click event handler
   */
  onClick?: () => void;
}

/**
 * @component
 * @desc The toast component
 * @param {ToastProps}  props The component props, instance of ToastProps
 */
const Toast = ({
  id = 0,
  message = "",
  title = "",
  icon = null,
  duration = 5000,
  variant = "info",
  align = "top",
  clickToDismiss = true,
  withProgressBar = true,
  onClick = () => {},
}: ToastProps) => {
  const ToastRef = useRef(null);
  const DismissTimer = useRef(null);
  const ProgressRef = useRef(null);
  const StartTime = Date.now();
  const [PauseTime, setPauseTime] = useState(0);

  const DismissSelf = () => {
    const event = new CustomEvent("DRUI_TOAST_REMOVE", {
      detail: {
        id,
      },
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    DismissTimer.current = setTimeout(() => {
      ToastRef.current.classList.add("drui-toast-dismissed");
      setTimeout(() => DismissSelf(), 400);
    }, duration);
    return () => {
      clearTimeout(DismissTimer.current);
    };
  }, []);

  return (
    <div
      className="drui-toast-container"
      ref={ToastRef}
      onClick={() => {
        if (clickToDismiss) {
          DismissSelf();
        }
        onClick();
      }}
      onMouseEnter={() => {
        clearTimeout(DismissTimer.current);
        if (withProgressBar) {
          ProgressRef.current.style.animationPlayState = "paused";
        } else {
          setPauseTime(Date.now());
        }
      }}
      onMouseLeave={() => {
        let remainingTime = 0;
        if (withProgressBar) {
          remainingTime =
            (ProgressRef.current.offsetWidth /
              ProgressRef.current.parentElement.offsetWidth) *
            duration;

          ProgressRef.current.style.animationPlayState = "running";
        } else {
          remainingTime = duration - (PauseTime - StartTime);
        }

        DismissTimer.current = setTimeout(() => {
          DismissSelf();
        }, remainingTime);
      }}
    >
      <div
        className={[
          "drui-toast",
          `drui-toast--${variant}`,
          // `drui-toast--align-${align}`,
        ].join(" ")}
      >
        <div className="drui-toast-icon-container">{icon}</div>
        <div className="drui-toast-content">
          <div className="drui-toast-title">{title}</div>
          <div className="drui-toast-message">{message}</div>
        </div>
        {withProgressBar && (
          <div
            className="drui-toast-progress-bar"
            style={{ animation: `shrinkWidth ${duration}ms linear forwards` }}
            ref={ProgressRef}
          />
        )}
      </div>
    </div>
  );
};

export default Toast;
