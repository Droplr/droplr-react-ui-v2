import React, { useEffect } from "react";
import "./animated-icon.css";
/**
 * AnimatedIcon props
 * @param {string} name - Icon name
 * @param {boolean} toggleState - Animation toggle state
 * @param {number} rotate - Icon rotation
 * @param {string} className - Additional class names
 * @param {string} color - Icon color
 * @param {number} duration - Animation duration
 * @param {number} size - Icon size
 */
export interface AnimatedIconProps {
  name: "ChevronLine" | "ChevronSmall";
  toggleState: boolean;
  rotate?: number;
  className?: string;
  color?: string;
  size?: number;
}
/**
 * AnimatedIcon component
 * @param {AnimatedIconProps} props - Component props
 * @param {string} name - Icon name
 * @param {boolean} toggleState - Animation toggle state
 * @param {number} rotate - Icon rotation
 * @param {string} className - Additional class names
 * @param {string} color - Icon color
 * @param {number} duration - Animation duration
 * @param {number} size - Icon size
 */
const AnimatedIcon = ({
  name = "ChevronLine",
  toggleState = false,
  rotate = 0,
  className = "",
  color = "var(--color-black)",
  size = 24,
}: AnimatedIconProps) => {
  interface SVGProps {
    viewBox: string;
    paths: any;
  }
  const iconRef = React.useRef(null);
  useEffect(() => {
    if (!iconRef.current) return;
    if (toggleState) {
      iconRef.current.classList.add("drui-animated-icon-toggled");
    } else {
      iconRef.current.classList.add("drui-animated-icon-reverse");
      setTimeout(() => {
        iconRef.current.classList.remove("drui-animated-icon-reverse");
        iconRef.current.classList.remove("drui-animated-icon-toggled");
      }, 300);
    }
  }, [toggleState]);

  const SvgWrap = ({ viewBox = "0 0 24 24", paths }: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      fill="none"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        transform: "none",
      }}
    >
      {paths}
    </svg>
  );
  const GetIcon = () => {
    switch (name) {
      case "ChevronLine":
        return (
          <div
            className={["drui-animated-icon drui-animated-chevron-large"].join(
              " "
            )}
            ref={iconRef}
          >
            <SvgWrap
              viewBox="0 0 100 100"
              paths={
                <>
                  <line
                    className="drui-chevron-line-one"
                    x1="50"
                    y1="10"
                    x2="50"
                    y2="50"
                    strokeWidth={10}
                    stroke={color}
                    strokeLinecap="round"
                    style={
                      {
                        // transitionDuration: `${duration}ms`,
                      }
                    }
                  />
                  <line
                    className="drui-chevron-line-two"
                    x1="50"
                    y1="90"
                    x2="50"
                    y2="50"
                    strokeWidth={10}
                    strokeLinecap="round"
                    stroke={color}
                    style={
                      {
                        // transitionDuration: `${duration}ms`,
                      }
                    }
                  />
                </>
              }
            />
          </div>
        );
      case "ChevronSmall":
        return (
          <div
            className={["drui-animated-icon drui-animated-chevron-small"].join(
              " "
            )}
            style={
              {
                // transitionDuration: `${duration}ms`,
              }
            }
            ref={iconRef}
          >
            <SvgWrap
              viewBox="0 0 24 24"
              paths={
                <path
                  d="M8.70615 11.4137L11.2961 14.0037C11.6861 14.3937 12.3161 14.3937 12.7061 14.0037L15.2961 11.4137C15.9261 10.7837 15.4761 9.70374 14.5861 9.70374H9.40615C8.51615 9.70374 8.07615 10.7837 8.70615 11.4137Z"
                  stroke={color}
                  stroke-width="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill={color}
                ></path>
              }
            />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div
      className={["drui-animated-icon-wrapper", className].join(" ")}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {GetIcon()}
    </div>
  );
};

export default AnimatedIcon;
