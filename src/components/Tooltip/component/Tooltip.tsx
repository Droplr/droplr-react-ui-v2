"use client";
import React, { useEffect, useRef, useState } from "react";
import reactDOM from "react-dom";
import "./tooltip.css";

/**
 * Tooltip component
 * @member {any} children - The content to be wrapped by the tooltip
 * @member {any} content - The content to be displayed in the tooltip
 * @member {string} position - The position of the tooltip (top or bottom)
 * @member {string} align - The alignment of the tooltip (left or right)
 * @member {number} offsetPosition - The offset position of the tooltip
 * @member {number} offsetAlign - The offset alignment of the tooltip
 * @member {number} hideDelay - The delay before hiding the tooltip
 * @member {string} fontSize - The font size of the tooltip content
 * @member {any} customStyle - Custom styles for the tooltip
 * @member {boolean} animated - Whether the tooltip should be animated
 * @member {boolean} closeOnClick - Whether to close the tooltip on click
 * @member {function} onTooltipShow - Callback function when the tooltip is shown
 * @member {function} onTooltipHide - Callback function when the tooltip is hidden
 */
export interface TooltipProps {
  children?: any;
  content: any;
  position: "top" | "bottom";
  align: "left" | "right";
  offsetPosition?: number;
  offsetAlign?: number;
  hideDelay: number;
  fontSize?: any;
  customStyle?: any;
  animated?: boolean;
  closeOnClick?: boolean;
  className?: string;
  onClick?: () => void;
  onTooltipShow?: () => void;
  onTooltipHide?: () => void;
}
interface OriginProps {
  top: number;
  left: number;
  right: number;
  bottom: number;
}
const Portal = ({ children }: any) => {
  const portal = document.getElementById("drui-tooltip-portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    if (!portal) return;
    portal.appendChild(el);
    return () => {
      if (el) {
        el.remove();
      }
    };
  }, [el, portal]);

  return reactDOM.createPortal(children, el);
};

/**
 * Tooltip component
 * @member {any} children - The content to be wrapped by the tooltip
 * @member {any} content - The content to be displayed in the tooltip
 * @member {string} position - The position of the tooltip (top or bottom)
 * @member {string} align - The alignment of the tooltip (left or right)
 * @member {number} offsetPosition - The offset position of the tooltip
 * @member {number} offsetAlign - The offset alignment of the tooltip
 * @member {number} hideDelay - The delay before hiding the tooltip
 * @member {string} fontSize - The font size of the tooltip content
 * @member {any} customStyle - Custom styles for the tooltip
 * @member {boolean} animated - Whether the tooltip should be animated
 * @member {boolean} closeOnClick - Whether to close the tooltip on click
 * @member {function} onTooltipShow - Callback function when the tooltip is shown
 * @member {function} onTooltipHide - Callback function when the tooltip is hidden
 */
const Tooltip = ({
  children,
  content,
  position = "top",
  align = "left",
  offsetAlign = 0,
  offsetPosition = 0,
  hideDelay = 250,
  fontSize = "var(--font-size-small)",
  customStyle = {},
  animated = true,
  closeOnClick = true,
  className = "",
  onClick = () => {},
  onTooltipShow = () => {},
  onTooltipHide = () => {},
}: TooltipProps) => {
  const animationDuration = 250;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [origin, setOrigin] = useState<OriginProps>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const HandleMouseEnter = (e: any) => {
    if (!!containerRef.current && !!containerRef.current.getBoundingClientRect) {
      const rect = containerRef.current.getBoundingClientRect();
      setOrigin({
        left: align === "left" ? rect.left + offsetAlign : 0,
        right: align === "right" ? window.innerWidth - rect.right - offsetAlign : 0,
        top: position === "top" ? rect.top - rect.height - offsetPosition : 0,
        bottom:
          position === "bottom"
            ? window.innerHeight - rect.bottom - rect.height * 2 - offsetPosition
            : 0,
      });
      setShow(true);
      onTooltipShow();
    };
  };
  
  const HandleMouseLeave = () => {
    setTimeout(() => {
      setShow(false);
    }, hideDelay + (animated ? animationDuration : 0));
    if (animated) {
      setTimeout(() => {
        if (!!tooltipRef.current && !!tooltipRef.current.classList) {
          tooltipRef.current.classList.add("drui-tooltip--animated-exit");
        }
      }, hideDelay);
    }
    onTooltipHide();
  }

  return (
    <div
      className={["drui-tooltip-container", className].join(" ")}
      ref={containerRef}
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
      onClick={onClick}
    >
      {children}
      {show && (
        <Portal>
          <div
            className={[
              "drui-tooltip",
              animated ? "drui-tooltip--animated" : "",
            ].join(" ")}
            ref={tooltipRef}
            style={{
              ...customStyle,
              left: origin.left !== 0 ? origin.left : "auto",
              right: origin.right !== 0 ? origin.right : "auto",
              top: origin.top !== 0 ? origin.top : "auto",
              bottom: origin.bottom !== 0 ? origin.bottom : "auto",
              fontSize,
            }}
            onClick={() => {
              if (closeOnClick) {
                setShow(false);
              }
            }}
          >
            {content}
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Tooltip;
