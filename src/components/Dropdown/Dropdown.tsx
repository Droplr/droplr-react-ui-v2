import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./dropdown.css";
import Icon from "../Icons";
import Loader from "../Loader/Loader";

/**
 * @interface DropdownProps Component props
 * @member {String} label Dropdown component label
 * @member {Array<DropdownItem} items Dropdown list items
 * @member {any} [parentElement] The parent element of the dropdown component, replaces the default input field
 * @member {string} [minWidth] The miniumum width for the input field of the component (in pixels)
 * @member {string} [maxHeight] Sets the max height for the dropdown list, default is 300px
 * @member {String} [maxWidth] Sets the max width for the dropdown list, default is auto
 * @member {string} [inputWidth] Sets the width of the dropdown input field
 * @member {boolean} [showItemStatus] Show the status of the dropdown list item next to the title
 * @member {String} [className] Appends custom class names
 * @member {boolean} [disabled] Disabled and uninteractive
 * @member {boolean} [closeOnMouseOut] Close list on mouse out, default true
 * @member {boolean} [closeOnClickOutside] Close list on click outside, default true
 * @member {Function} onClick Click event handler
 * @member {boolean} [loading] Show loading spinner
 * @member {String} [align] Dropdown list alignment
 */
export interface DropdownProps {
  label: string;
  items: DropdownItemProps[];
  selectedOption: DropdownItemProps;
  align: "left" | "right";
  inputWidth?: string;
  parentElement?: any;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  showItemStatus?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  closeOnMouseOut?: boolean;
  closeOnClickOutside?: boolean;
  onClick: (item: any) => void;
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
 * @member {String} label Dropdown component label
 * @member {Array<DropdownItem} items Dropdown list items
 * @member {any} [parentElement] The parent element of the dropdown component, replaces the default input field
 * @member {string} [minWidth] The miniumum width for the input field of the component (in pixels)
 * @member {string} [maxHeight] Sets the max height for the dropdown list, default is 300px
 * @member {String} [maxWidth] Sets the max width for the dropdown list, default is auto
 * @member {string} [inputWidth] Sets the width of the dropdown input field
 * @member {boolean} [showItemStatus] Show the status of the dropdown list item next to the title
 * @member {String} [className] Appends custom class names
 * @member {boolean} [disabled] Disabled and uninteractive
 * @member {boolean} [closeOnMouseOut] Close list on mouse out, default true
 * @member {boolean} [closeOnClickOutside] Close list on click outside, default true
 * @member {Function} onClick Click event handler
 * @member {boolean} [loading] Show loading spinner
 * @member {String} [align] Dropdown list alignment
 */
const Dropdown = ({
  label = "",
  items = [],
  selectedOption = { title: "Nothing", id: 0 },
  parentElement = null,
  align = "left",
  closeOnMouseOut = true,
  closeOnClickOutside = true,
  minWidth = "auto",
  maxHeight = "300px",
  maxWidth = "auto",
  inputWidth = "auto",
  disabled = false,
  loading = false,
  showItemStatus = false,
  onClick = (id: any) => {},
}: DropdownProps) => {
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [isDropdownCutOff, setIsDropdownCutOff] = useState(false);
  const [dropdownCutOffTopOffset, setDropdownCutOffTopOffset] = useState(0);
  const [hasMouseEnteredDropdown, setHasMouseEnteredDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!dropdownExpanded) return;
    if (closeOnClickOutside) {
      /**
       * Buffer timeout to let the open click event pass
       */
      setTimeout(() => {
        document.addEventListener("click", ClickOutsideHandler);
      }, 25);
    }
    return () => {
      if (closeOnClickOutside) {
        document.removeEventListener("click", ClickOutsideHandler);
      }
    };
  }, [dropdownExpanded]);

  const WillDropdownBeCutOff = () => {
    if (!dropdownRef.current) return false;
    const dropdownRect = (dropdownRef.current as Element).getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownBottom = dropdownRect.y + dropdownRect.height;
    return dropdownBottom > viewportHeight - 20;
  };

  const GetDropdownHeightOffset = () => {
    if (dropdownRef.current === null) return 0;
    const dropdownRect = (dropdownRef.current as Element).getBoundingClientRect();
    const inputRect = (inputRef.current! as Element).getBoundingClientRect();
    setDropdownCutOffTopOffset(dropdownRect.height + inputRect.height - 10);
  };

  const ClickOutsideHandler = (event: any) => {
    if (dropdownExpanded) {
      setIsDropdownCutOff(false);
      setDropdownExpanded(false);
    }
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
              item.id === selectedOption.id &&
                showItemStatus &&
                "drui-dropdown-item--selected",
            ].join(" ")}
            onClick={() => {
              setDropdownExpanded(false);
              onClick(item);
            }}
          >
            <div className="drui-dropdown-item-title-container">
              {item.icon !== null && (
                <div className="drui-dropdown-item-icon">{item.icon}</div>
              )}
              <div
                className="drui-dropdown-item-title"
                style={{
                  color: typeof item.color === typeof "" && item.color || "#000",
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

  return (
    <div className="drui-dropdown">
      {parentElement !== null && (
        <div
          className="drui-dropdown-anchor"
          aria-expanded={dropdownExpanded}
          aria-haspopup="menu"
          ref={inputRef}
          onClick={() => {
            if (!dropdownExpanded) {
              if (WillDropdownBeCutOff()) {
                setIsDropdownCutOff(true);
                GetDropdownHeightOffset();
                setTimeout(() => {
                  setDropdownExpanded(!dropdownExpanded);
                }, 25);
              } else {
                setIsDropdownCutOff(false);
                setDropdownExpanded(!dropdownExpanded);
              }
            } else {
              setDropdownExpanded(false);
              setIsDropdownCutOff(false);
            }
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
          aria-expanded={dropdownExpanded}
          aria-haspopup="menu"
          style={{
            minWidth: minWidth,
            width: inputWidth,
          }}
          onClick={() => {
            if (!dropdownExpanded) {
              if (WillDropdownBeCutOff()) {
                setIsDropdownCutOff(true);
                GetDropdownHeightOffset();
                setTimeout(() => {
                  setDropdownExpanded(!dropdownExpanded);
                }, 25);
              } else {
                setIsDropdownCutOff(false);
                setDropdownExpanded(!dropdownExpanded);
              }
            } else {
              setDropdownExpanded(false);
              setIsDropdownCutOff(false);
            }
          }}
        >
          {!loading && (
            <>
              <div className="drui-dropdown-input-text">
                {selectedOption ? selectedOption.title : "Nothing"}
              </div>
              <div
                className={[
                  "drui-dropdown-input-arrow",
                  dropdownExpanded && "drui-dropdown-input-arrow--rotate",
                ].join(" ")}
              >
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
      <ul
        className={[
          "drui-dropdown-content",
          dropdownExpanded && "drui-dropdown-content-visible",
          `drui-dropdown-content--align-${align}`,
          isDropdownCutOff && "drui-dropdown-content--align-top",
        ].join(" ")}
        style={{
          top: isDropdownCutOff ? `-${dropdownCutOffTopOffset}px` : "1em",
          maxHeight: maxHeight,
          maxWidth: maxWidth,
        }}
        ref={dropdownRef}
        onMouseEnter={() => {
          setHasMouseEnteredDropdown(true);
        }}
        onMouseLeave={() => {
          /**
           * Only close if the mouse has entered the dropdown before.
           * Take care of the opening animation, it may overflow and cause the trigger for some parentElement heights
           */
          if (closeOnMouseOut && hasMouseEnteredDropdown) {
            setDropdownExpanded(false);
            setIsDropdownCutOff(false);
            setHasMouseEnteredDropdown(false);
          }
        }}
      >
        {label !== "" && <div className="drui-dropdown-label">{label}</div>}
        {items.map((item, index) => {
          return FetchDropdownItemContent(item, index);
        })}
      </ul>
    </div>
  );
};
export default Dropdown;
