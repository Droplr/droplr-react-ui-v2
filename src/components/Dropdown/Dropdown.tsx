import React, { ReactElement, useEffect, useRef, useState } from "react";
import reactDOM from "react-dom";
import "./dropdown.css";
import Icon from "../Icons";
import Loader from "../Loader/Loader";

const Portal = ({ children }: any) => {
  const portal = document.getElementById("drui-dropdown-portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    if (!portal) return;
    if (portal.children.length > 0) {
      for (let c of portal.children) {
        if (c) {
          portal.removeChild(c);
        }
      }
    }
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
 * @interface DropdownProps Component props
 * @member {String} label Dropdown component label
 * @member {Array<DropdownItem>} items Dropdown list items
 * @member {any} [parentElement] The parent element of the dropdown component, replaces the default input field
 * @member {string} [minWidth] The miniumum width for the input field of the component (in pixels)
 * @member {string} [maxListHeight] Sets the max height for the dropdown list, default is 300px
 * @member {String} [maxListWidth] Sets the max width for the dropdown list, default is auto
 * @member {boolean} [matchListWidthToInput] Match the width of the dropdown list to the input field
 * @member {string} [dropdownTopOffset] Sets the top offset of the dropdown list
 * @member {string} [inputWidth] Sets the width of the dropdown input field
 * @member {string} [textAlign] Sets the text alignment of the dropdown list items
 * @member {boolean} [showItemStatus] Show the status of the dropdown list item next to the title
 * @member {String} [className] Appends custom class names
 * @member {boolean} [disabled] Disabled and uninteractive
 * @member {boolean} [closeOnMouseOut] Close list on mouse out, default true
 * @member {boolean} [closeOnClickOutside] Close list on click outside, default true
 * @member {Function} onClick Click event handler
 * @member {boolean} [loading] Show loading spinner
 * @member {String} [align] Dropdown list alignment
 * @member {number} [offsetPosition] Sets the vertical offset of the dropdown list
 * @member {number} [offsetAlign] Sets the horizontal offset of the dropdown list
 * @member {boolean} [withInput] Toggles the input field
 * @member {boolean} [inputLoading] Triggers the input loading state
 * @member {Function} [onInputChanged] Callback to the on input changed event
 */
export interface DropdownProps {
  label?: string;
  items: DropdownItemProps[];
  selectedOption?: DropdownItemProps | undefined;
  align: "left" | "right";
  position: "top" | "bottom";
  offsetPosition?: number;
  offsetAlign?: number;
  inputWidth?: string;
  parentElement?: any;
  minWidth?: string;
  maxListHeight?: string;
  maxListWidth?: string;
  matchListWidthToInput?: boolean;
  textAlign?: "start" | "center" | "end";
  dropdownTopOffset?: number;
  showItemStatus?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  closeOnMouseOut?: boolean;
  closeOnClickOutside?: boolean;
  withInput?: boolean;
  inputLoading?: boolean;
  resetInputOnClose?: boolean;
  onInputChanged?: (event) => void;
  onClick?: (item: any) => void;
  onClose?: () => void;
}
/**
 * @interface DropdownItemProps Component props
 * @member {String} [className] Appends custom class names
 * @member {boolean} [disabled] Disables the item
 * @member {String} title Dropdown item title
 * @member {String} description Dropdown item description
 * @member {Icon} [Icon] Dropdown item icon
 * @method onClick Click event handler
 */
export interface DropdownItemProps {
  type?: "SPLITTER" | "HEADER" | "ITEM";
  className?: string;
  disabled?: boolean;
  title?: string;
  id?: any;
  description?: string;
  icon?: ReactElement;
  color?: string;
  onClick?: (item) => void;
}

/**
 * @interface DropdownProps Component props
 * @member {String} label Dropdown component label
 * @member {Array<DropdownItem>} items Dropdown list items
 * @member {any} [parentElement] The parent element of the dropdown component, replaces the default input field
 * @member {string} [minWidth] The miniumum width for the input field of the component (in pixels)
 * @member {string} [maxListHeight] Sets the max height for the dropdown list, default is 300px
 * @member {String} [maxListWidth] Sets the max width for the dropdown list, default is auto
 * @member {boolean} [matchListWidthToInput] Match the width of the dropdown list to the input field
 * @member {string} [dropdownTopOffset] Sets the top offset of the dropdown list
 * @member {string} [inputWidth] Sets the width of the dropdown input field
 * @member {number} [offsetPosition] Sets the vertical offset of the dropdown list
 * @member {number} [offsetAlign] Sets the horizontal offset of the dropdown list
 * @member {string} [textAlign] Sets the text alignment of the dropdown list items
 * @member {boolean} [showItemStatus] Show the status of the dropdown list item next to the title
 * @member {String} [className] Appends custom class names
 * @member {boolean} [disabled] Disabled and uninteractive
 * @member {boolean} [closeOnMouseOut] Close list on mouse out, default true
 * @member {boolean} [closeOnClickOutside] Close list on click outside, default true
 * @member {Function} onClick Click event handler
 * @member {boolean} [loading] Show loading spinner
 * @member {String} [align] Dropdown list alignment
 * @member {boolean} [withInput] Toggles the input field
 * @member {boolean} [inputLoading] Triggers the input loading state
 * @member {Function} [onInputChanged] Callback to the on input changed event
 * @member {Function} [onClose] Callback to the on close event
 *
 */
const Dropdown = ({
  label = "",
  items = [],
  selectedOption = undefined,
  className = "",
  parentElement = null,
  closeOnMouseOut = true,
  closeOnClickOutside = true,
  minWidth = "auto",
  maxListHeight = "300px",
  maxListWidth = "auto",
  inputWidth = "auto",
  textAlign = "start",
  matchListWidthToInput = false,
  disabled = false,
  loading = false,
  showItemStatus = false,
  withInput = false,
  inputLoading = false,
  resetInputOnClose = true,
  //
  offsetPosition = 0,
  offsetAlign = 0,
  align = "left",
  onInputChanged = (event) => {},
  onClick = (id: any) => {},
  onClose = () => {},
}: DropdownProps) => {
  interface OriginProps {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }

  const [hasMouseEnteredDropdown, setHasMouseEnteredDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef(null);
  const [customInputFieldQuery, setCustomInputFieldQuery] = useState("");
  const customInputFieldRef = useRef<HTMLInputElement>(null);

  const [show, setShow] = useState<boolean>(false);
  const [origin, setOrigin] = useState<OriginProps>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (closeOnClickOutside && show) {
      /**
       * Buffer timeout to let the open click event pass
       */
      setTimeout(() => {
        document.addEventListener("click", ClickOutsideHandler);
      }, 25);
    }
    return () => {
      if (onClose) {
        onClose();
      }
      if (closeOnClickOutside) {
        document.removeEventListener("click", ClickOutsideHandler);
      }
    };
  }, [show]);

  const ShouldShiftDropdownToTop = () => {
    if (!inputRef.current) return false;
    if (
      window.innerHeight - inputRef.current.getBoundingClientRect().bottom <
      200
    ) {
      return true;
    }
    return false;
  };

  const ClickOutsideHandler = (_event: any) => {
    setShow(false);
  };

  const FetchDropdownItemContent = (item: DropdownItemProps, index) => {
    switch (item.type) {
      case "SPLITTER":
        return (
          <li
            key={index}
            className={[
              "drui-dropdown-item",
              "drui-dropdown-item--section-splitter",
              item.className && item.className,
            ].join(" ")}
          ></li>
        );
      case "HEADER":
        return (
          <li
            key={index}
            className={[
              "drui-dropdown-item",
              "drui-dropdown-item--section-header",
              item.className && item.className,
            ].join(" ")}
          >
            {item.title}
          </li>
        );
      case "ITEM":
      default:
        return (
          <li
            key={index}
            className={[
              "drui-dropdown-item",
              item.disabled && "drui-dropdown-item--disabled",
              item.className && item.className,
              selectedOption &&
                item.id === selectedOption!.id &&
                showItemStatus &&
                "drui-dropdown-item--selected",
            ].join(" ")}
            onClick={(e) => {
              e.stopPropagation();
              onClick(item);
            }}
          >
            <div
              className={[
                "drui-dropdown-item-title-container",
                `drui-dropdown-item-title--align-${textAlign}`,
              ].join(" ")}
            >
              {item.icon !== null && (
                <div className="drui-dropdown-item-icon">{item.icon}</div>
              )}
              <div
                className={["drui-dropdown-item-title"].join(" ")}
                style={{
                  color:
                    (typeof item.color === typeof "" && item.color) || "#000",
                }}
              >
                {item.title}
              </div>
            </div>
            {item.description && (
              <div className="drui-dropdown-item-description">
                {item.description}
              </div>
            )}
          </li>
        );
    }
  };

  const CustomDRUIInput = () => {
    const onChangeHandler = (e: any) => {
      setCustomInputFieldQuery(e.target.value);

      if (onInputChanged) {
        onInputChanged(e);
      }
    };
    return (
      <div
        className="custom-drui-dropdown-input"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          ref={customInputFieldRef}
          type="text"
          value={customInputFieldQuery}
          className={[
            "custom-dropdown-input-field",
            inputLoading && "custom-dropdown-input-field--loading",
          ].join(" ")}
          autoFocus
          onChange={onChangeHandler}
        />
        {inputLoading && <Loader></Loader>}
      </div>
    );
  };

  const DistanceToBottomOfPage = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      return window.innerHeight - rect.bottom;
    }
    return 0;
  };

  const GetAnchorElementWidth = () => {
    if (inputRef.current && inputRef.current.getBoundingClientRect) {
      const rect = inputRef.current.getBoundingClientRect();
      return `${rect.width}px`;
    }
    return "auto";
  };

  return (
    <div className={["drui-dropdown", className && className].join(" ")}>
      {parentElement !== null && (
        <div
          className="drui-dropdown-anchor"
          ref={inputRef}
          onClick={(e) => {
            e.stopPropagation();
            /**
             * Fires a fake event due to stop propagation
             * -
             * There is an interaction when you can open multiple dropdowns by only clicking on the parent element
             */
            if (show) {
              setShow(false);
              return;
            }
            if (
              !!inputRef.current &&
              !!inputRef.current.getBoundingClientRect
            ) {
              const rect = inputRef.current.getBoundingClientRect();
              setOrigin({
                left: align === "left" ? rect.left + offsetAlign : 0,
                right:
                  align === "right"
                    ? window.innerWidth - rect.right - offsetAlign
                    : 0,
                top: rect.bottom + offsetPosition,
                bottom: window.innerHeight - rect.top - offsetPosition,
              });
              setShow(true);
            }
            return;
          }}
        >
          {parentElement}
        </div>
      )}
      {parentElement === null && (
        <div
          className={[
            "drui-dropdown-input",
            disabled && "drui-dropdown-input--disabled",
          ].join(" ")}
          ref={inputRef}
          style={{
            minWidth: minWidth,
            width: inputWidth,
          }}
          onClick={() => {
            if (show) {
              setShow(false);
              return;
            }
            if (
              !!inputRef.current &&
              !!inputRef.current.getBoundingClientRect
            ) {
              const rect = inputRef.current.getBoundingClientRect();
              setOrigin({
                left: align === "left" ? rect.left + offsetAlign : 0,
                right:
                  align === "right"
                    ? window.innerWidth - rect.right - offsetAlign
                    : 0,
                top: rect.bottom,
                bottom: window.innerHeight - rect.top,
              });
              setShow(true);
            }
          }}
        >
          {!loading && (
            <>
              <div
                className={[
                  "drui-dropdown-input-text",
                  !selectedOption && "drui-dropdown-input-text--empty",
                ].join(" ")}
              >
                {selectedOption ? selectedOption.title : "Nothing"}
              </div>
              <div className={["drui-dropdown-input-arrow"].join(" ")}>
                <Icon
                  name="DropdownDown"
                  color="var(--color-black)"
                  size={24}
                />
              </div>
            </>
          )}
          {loading && (
            <div className="drui-dropdown-input-loading">
              <Loader></Loader>
            </div>
          )}
        </div>
      )}
      {show && (
        <Portal>
          <ul
            className={[
              "drui-dropdown-content",
              "drui-dropdown-content-visible",
              "drui-dropdown-content--with-scrollbars",
            ].join(" ")}
            ref={dropdownRef}
            style={{
              left: origin.left !== 0 ? origin.left : "auto",
              right: origin.right !== 0 ? origin.right : "auto",
              top: !ShouldShiftDropdownToTop() ? origin.top : "auto",
              bottom: ShouldShiftDropdownToTop() ? origin.bottom : "auto",
              width: matchListWidthToInput ? GetAnchorElementWidth() : "auto",
              maxHeight:
                Math.min(
                  parseInt(maxListHeight.replace("px", "")),
                  DistanceToBottomOfPage()
                ) + "px",
              maxWidth: maxListWidth,
            }}
            onMouseEnter={(_e) => {
              setHasMouseEnteredDropdown(true);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                /**
                 * Only close if the mouse has entered the dropdown before.
                 * Take care of the opening animation, it may overflow and cause the trigger for some parentElement heights
                 */
                if (closeOnMouseOut && hasMouseEnteredDropdown) {
                  setShow(false);
                  setHasMouseEnteredDropdown(false);
                }
              }, 250);
            }}
          >
            {label !== "" && <div className="drui-dropdown-label">{label}</div>}
            {withInput && <CustomDRUIInput></CustomDRUIInput>}
            {items.map((item, index) => {
              return FetchDropdownItemContent(item, index);
            })}
          </ul>
        </Portal>
      )}
    </div>
  );
};
export default Dropdown;
