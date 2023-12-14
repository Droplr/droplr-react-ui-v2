import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { lightTheme } from "../../themes/themes";

/**
 * @interface TooltipProps Component Props
 * @member {any} content The content within the tooltip - ideally text
 * @member {Function} onTooltipShow The callback triggered when the tooltip is shown
 * @member {Function} onTooltipHide The Callback triggered when the tooltip is hidden
 * @member {"top" | "bottom" | "left" | "right"} position The placement of the tooltip with regards to the item it is wrapping
 * @member {number} hideDelay The delay (in ms) before hiding the tooltip
 * @member {string} title The title text of the tooltip
 * @member {boolean} closeOnClick Enables closing the tooltip on click, defaults to `false`
 */
export interface TooltipProps {
  // Just the children props attr
  children: React.ReactNode;
  /**
   * @member {any} content The content within the tooltip - ideally text
   */
  content: any;
  /**
   * @member {Function} onTooltipShow The callback triggered when the tooltip is shown
   */
  onTooltipShow: () => void;
  /**
   * @member {Function} onTooltipHide The Callback triggered when the tooltip is hidden
   */
  onTooltipHide: () => void;
  /**
   * @member {"top" | "bottom" | "left" | "right"} position The placement of the tooltip with regards to the item it is wrapping
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * @member {number} hideDelay The delay (in ms) before hiding the tooltip
   */
  hideDelay?: number;
  /**
   * @member {string} title The title text of the tooltip
   */
  title?: string;
  /**
   * @member closeOnClick Enables closing the tooltip on click, defaults to `false`
   */
  closeOnClick?: boolean;
}

/**
 * @desc The tooltip component
 * @param {TooltipProps} TooltipProps Component props
 * Is used as a wrapper, examples can be found on the library's page
 */
const Tooltip = ({
  content = <div></div>,
  onTooltipHide = () => {},
  onTooltipShow = () => {},
  hideDelay = 250,
  title = "",
  closeOnClick = false,
  position = "top",
  children,
}: React.PropsWithChildren<TooltipProps>) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const childrenRef = React.useRef(null);
  const ShowTooltip = () => {
    setTooltipVisible(true);
    onTooltipShow();
  };

  useEffect(() => {}, [position, title, content]);

  const HideTooltip = (hasBeenClicked?: boolean): void => {
    /**
     * Closing on click has priority
     */
    if (closeOnClick && hasBeenClicked) {
      document
        .getElementsByClassName("tooltip-bubble")[0]
        .classList.add("fade-out");
      setTimeout(() => {
        document
          .getElementsByClassName("tooltip-bubble")[0]
          .classList.remove("fade-out");
        onTooltipHide();
        setTooltipVisible(false);
      }, 250);
      return;
    }
    /**
     * Check if the timeout is less than the fade out animation duration, to not overcomplicate the timings (250ms)
     */
    if (hideDelay <= 250) {
      document
        .getElementsByClassName("tooltip-bubble")[0]
        .classList.add("fade-out");
      setTimeout(() => {
        document
          .getElementsByClassName("tooltip-bubble")[0]
          .classList.remove("fade-out");
        onTooltipHide();
        setTooltipVisible(false);
      }, hideDelay);
    } else {
      setTimeout(() => {
        document
          .getElementsByClassName("tooltip-bubble")[0]
          .classList.add("fade-out");
      }, hideDelay - 250);
      setTimeout(() => {
        setTooltipVisible(false);
        document
          .getElementsByClassName("tooltip-bubble")[0]
          .classList.remove("fade-out");
        onTooltipHide();
      }, hideDelay);
    }
  };

  /**
   * @returns The maximum height and width properties for the tooltip bubble
   */
  const CalculateBounds = (): Object => {
    const bodyRef = document.getElementsByTagName("body")[0];
    const childrenRef = document.getElementsByClassName(
      "tooltip-children-wrapper"
    )[0];
    switch (position) {
      case "top":
      case "bottom":
        return {
          maxHeight: `min(${bodyRef.clientHeight}px, 70px)`,
          maxWidth: `${bodyRef.clientWidth - 25}px`,
        };
      case "left":
        return {
          maxHeight: `min(${bodyRef.clientHeight}px, 70px)`,
          maxWidth: `min(${bodyRef.clientWidth - 25}px, ${
            bodyRef.clientWidth -
            childrenRef.getBoundingClientRect().left -
            childrenRef.clientWidth -
            38
          }px)`,
        };
      case "right":
        return {
          maxHeight: `min(${bodyRef.clientHeight}px, 70px)`,
          maxWidth: `min(${bodyRef.clientWidth - 25}px, ${
            bodyRef.clientWidth - childrenRef.getBoundingClientRect().right - 30
          }px)`,
        };
    }
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={ShowTooltip}
      onMouseLeave={() => HideTooltip()}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div className="tooltip-children-wrapper" ref={childrenRef}>
        {children}
      </div>
      {tooltipVisible && (
        <StyledTooltip
          className={`tooltip-bubble tooltip-position-${position}`}
          onClick={() => (closeOnClick ? HideTooltip(true) : null)}
          style={CalculateBounds()}
        >
          {title && <div className="tooltip-title">{title}</div>}
          <div className="tooltip-content" style={CalculateBounds()}>
            {content}
          </div>
        </StyledTooltip>
      )}
    </div>
  );
};

const StyledTooltip = styled.div(({ theme }) => {
  if (!theme.fonts) {
    theme = lightTheme;
  }
  return css`
    position: absolute;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px;
    color: ${theme.tooltip.textColor};
    background: ${theme.tooltip.backgroundColor};
    font-size: 14px;
    font-family: sans-serif;
    line-height: 1;
    z-index: 100;
    width: max-content;
    box-shadow: 0px 4px 6px 4px rgba(66, 79, 104, 0.06);
    animation: fadeIn 250ms ease-in-out;
    user-select: none;

    &.fade-out {
      animation: fadeOut 250ms ease-in-out;
    }

    // ::before draws the border triangles
    &::before {
      content: " ";
      left: 50%;
      border: solid transparent;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: 6px;
      margin-left: -5px;
    }

    .tooltip-title {
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      padding: 4px;
    }

    .tooltip-content {
      font-size: 12px;
      padding: 4px;
    }

    &.tooltip-position-top {
      bottom: calc(100% + 10px);
      &::before {
        top: 100%;
        border-top-color: ${theme.tooltip.backgroundColor};
      }
    }

    &.tooltip-position-right {
      left: calc(100% + 10px);
      top: 50%;
      transform: translate(0, -50%);
      &::before {
        left: -6px;
        top: 50%;
        transform: translate(0, -50%);
        border-right-color: ${theme.tooltip.backgroundColor};
      }
    }

    &.tooltip-position-bottom {
      top: calc(100% + 10px);
      &::before {
        bottom: 100%;
        border-bottom-color: ${theme.tooltip.backgroundColor};
      }
    }
    &.tooltip-position-left {
      top: 50%;
      left: calc(-100% + 24px);
      transform: translate(-100%, -50%);
      &::before {
        left: calc(100% + 4px);
        top: calc(50% - 3px);
        transform: translate(-100%, -550%);
        transform: rotate(180deg);
        border-right-color: ${theme.tooltip.backgroundColor};
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;
});
export default Tooltip;
