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
 * @member {boolean} [withInput] Toggles the input field
 * @member {boolean} [inputLoading] Triggers the input loading state
 * @member {Function} [onInputChanged] Callback to the on input changed event
 */
export interface DropdownProps {
  label?: string;
  items: DropdownItemProps[];
  selectedOption?: DropdownItemProps | undefined;
  align: "left" | "right";
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
 * @member {Array<DropdownItem} items Dropdown list items
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
 * @member {boolean} [withInput] Toggles the input field
 * @member {boolean} [inputLoading] Triggers the input loading state
 * @member {Function} [onInputChanged] Callback to the on input changed event
 */
const Dropdown = ({
  label = "",
  items = [],
  selectedOption = undefined,
  className = "",
  parentElement = null,
  align = "left",
  closeOnMouseOut = true,
  closeOnClickOutside = true,
  minWidth = "auto",
  maxListHeight = "300px",
  maxListWidth = "auto",
  inputWidth = "auto",
  textAlign = "start",
  dropdownTopOffset = 0,
  matchListWidthToInput = false,
  disabled = false,
  loading = false,
  showItemStatus = false,
  withInput = false,
  inputLoading = false,
  resetInputOnClose = true,
  onInputChanged = (event) => {},
  onClick = (id: any) => {},
  onClose = () => {},
}: DropdownProps) => {
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [isDropdownCutOff, setIsDropdownCutOff] = useState(false);
  const [dropdownCutOffTopOffset, setDropdownCutOffTopOffset] = useState(0);
  const [hasMouseEnteredDropdown, setHasMouseEnteredDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef(null);
  const [customInputFieldQuery, setCustomInputFieldQuery] = useState("");
  const customInputFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!dropdownExpanded) {
      if (resetInputOnClose) {
        setCustomInputFieldQuery("");
      }
      if (!!onClose) {
        onClose();
      }
      return;
    }
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
    const dropdownRect = (
      dropdownRef.current as Element
    ).getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownBottom = dropdownRect.y + dropdownRect.height;
    return dropdownBottom > viewportHeight - 20;
  };

  const GetDropdownHeightOffset = () => {
    if (dropdownRef.current === null) return 0;
    const dropdownRect = (
      dropdownRef.current as Element
    ).getBoundingClientRect();
    const inputRect = (inputRef.current! as Element).getBoundingClientRect();
    setDropdownCutOffTopOffset(
      dropdownRect.height +
        inputRect.height -
        10 +
        (WillDropdownBeCutOff() ? -dropdownTopOffset : dropdownTopOffset)
    );
  };

  const IsContentOverflowing = () => {
    if (!!dropdownRef.current) {
      const { scrollHeight, clientHeight } = dropdownRef.current;
      return scrollHeight > clientHeight;
    } else {
      return false;
    }
  };

  const ClickOutsideHandler = (_event: any) => {
    setIsDropdownCutOff(false);
    setDropdownExpanded(false);
  };

  const GetDropdownInputFieldWidth = (): string => {
    if (inputRef.current === null) return "max-content";
    const inputRect = (inputRef.current as Element).getBoundingClientRect();
    return `${inputRect.width}px`;
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
            onClick={() => {
              setDropdownExpanded(false);
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

  return (
    <div className={["drui-dropdown", className && className].join(" ")}>
      {parentElement !== null && (
        <div
          className="drui-dropdown-anchor"
          aria-expanded={dropdownExpanded}
          aria-haspopup="menu"
          ref={inputRef}
          onClick={(e) => {
            e.preventDefault();
            if (!dropdownExpanded) {
              if (WillDropdownBeCutOff()) {
                setIsDropdownCutOff(true);
                GetDropdownHeightOffset();
                setTimeout(() => {
                  setDropdownExpanded(!dropdownExpanded);
                }, 500);
              } else {
                setIsDropdownCutOff(false);
                setDropdownExpanded(!dropdownExpanded);
              }
            } else {
              setDropdownExpanded(false);
              setIsDropdownCutOff(false);
              if (!!dropdownRef.current) {
                dropdownRef.current.scrollTop = 0;
              }
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
                }, 500);
              } else {
                setIsDropdownCutOff(false);
                setDropdownExpanded(!dropdownExpanded);
              }
            } else {
              setDropdownExpanded(false);
              setIsDropdownCutOff(false);
              if (!!dropdownRef.current) {
                dropdownRef.current.scrollTop = 0;
              }
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
          IsContentOverflowing() && "drui-dropdown-content--with-scrollbars",
          isDropdownCutOff && "drui-dropdown-content--align-top",
        ].join(" ")}
        style={{
          top: isDropdownCutOff
            ? `-${dropdownCutOffTopOffset}px`
            : `calc(1em + ${dropdownTopOffset}px)`,
          maxHeight: maxListHeight,
          maxWidth: maxListWidth,
          width: matchListWidthToInput
            ? GetDropdownInputFieldWidth()
            : "max-content",
        }}
        ref={dropdownRef}
        onMouseEnter={() => {
          setHasMouseEnteredDropdown(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            /**
             * Only close if the mouse has entered the dropdown before.
             * Take care of the opening animation, it may overflow and cause the trigger for some parentElement heights
             */
            if (closeOnMouseOut && hasMouseEnteredDropdown) {
              setDropdownExpanded(false);
              setIsDropdownCutOff(false);
              setHasMouseEnteredDropdown(false);
              if (!!dropdownRef.current) {
                dropdownRef.current.scrollTop = 0;
              }
            }
          }, 500);
        }}
      >
        {label !== "" && <div className="drui-dropdown-label">{label}</div>}
        {withInput && <CustomDRUIInput></CustomDRUIInput>}
        {items.map((item, index) => {
          return FetchDropdownItemContent(item, index);
        })}
      </ul>
    </div>
  );
};
export default Dropdown;
