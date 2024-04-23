import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./dropdown.css";
import Icon from "../Icons";

/**
 * @interface DropdownProps Component props
 * @member {String} label Dropdown component label
 * @member {Array<DropdownItem} items Dropdown list items
 * @member {number} [defaultIndex] Index of the default selected item in the items array
 * @member {boolean} [fullWidth] Sets the dropdown input field to it's containers full width
 * @member {any} [parentElement] The parent element of the dropdown component, replaces the default input field
 * @member {number} [minWidth] The miniumum width for the input field of the component (in pixels)
 * @member {boolean} [showItemStatus] Show the status of the dropdown list item next to the title
 * @member {String} [className] Appends custom class names
 * @member {boolean} [disabled] Disabled and uninteractive
 * @member {boolean} [closeOnItemClick] Close list on item click, default true
 * @member {Function} [onMouseLeave] Mouse-leave event handler
 */
export interface DropdownProps {
  label: string;
  items: DropdownItemProps[];
  selectedOption: DropdownItemProps;
  align: "left" | "right";
  defaultIndex?: number;
  fullWidth?: boolean;
  parentElement?: ReactElement;
  minWidth?: string;
  showItemStatus?: boolean;
  className?: string;
  disabled?: boolean;
  closeOnItemClick?: boolean;
  closeOnMouseOut?: boolean;
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
  className?: string;
  disabled?: boolean;
  title: string;
  description?: string;
  icon?: ReactElement;
  color?: string;
  onClick?: (item) => void;
}

const Dropdown = ({
  label = "This is my label",
  onClick = (id: any) => {},
  items = [],
  selectedOption = {title: "Nothing"},
  parentElement = null,
  align = "right",
}: DropdownProps) => {
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [isDropdownCutOff, setIsDropdownCutOff] = useState(false);
  const [dropdownCutOffTopOffset, setDropdownCutOffTopOffset] = useState(0);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const WillDropdownBeCutOff = () => {
    if (!dropdownRef.current) return false;
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownBottom = dropdownRect.y + dropdownRect.height;
    return dropdownBottom > viewportHeight - 20;
  };

  const GetDropdownHeightOffset = () => {
    if (dropdownRef.current === null) return 0;
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const inputRect = inputRef.current.getBoundingClientRect();
    setDropdownCutOffTopOffset(dropdownRect.height + inputRect.height - 10);
  };

  useEffect(() => {}, [isDropdownCutOff, dropdownCutOffTopOffset]);

  return (
    <div className="drui-dropdown">
      {parentElement !== null && (
        <div
          className="drui-dropdown-anchor"
          aria-expanded={dropdownExpanded}
          aria-haspopup="menu"
          onClick={() => {
            if (!dropdownExpanded) {
              if (WillDropdownBeCutOff()) {
                setIsDropdownCutOff(true);
                GetDropdownHeightOffset();
              } else {
                setIsDropdownCutOff(false);
              }
            }
            setDropdownExpanded(!dropdownExpanded);
          }}
        >
          {parentElement}
        </div>
      )}
      {parentElement === null && (
        <div
          className="drui-dropdown-input"
          ref={inputRef}
          aria-expanded={dropdownExpanded}
          aria-haspopup="menu"
          onClick={() => {
            if (!dropdownExpanded) {
              if (WillDropdownBeCutOff()) {
                setIsDropdownCutOff(true);
                GetDropdownHeightOffset();
              } else {
                setIsDropdownCutOff(false);
              }
            }
            setDropdownExpanded(!dropdownExpanded);
          }}
        >
          <div className="drui-dropdown-input-text">
            {selectedOption ? selectedOption.title : "Nothing"}
          </div>
          <div
            className={[
              "drui-dropdown-input-arrow",
              dropdownExpanded && "drui-dropdown-input-arrow--rotate",
            ].join(" ")}
          >
            <Icon name="DropdownDown" color="var(--color-black)" size={24} />
          </div>
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
        }}
        ref={dropdownRef}
      >
        {label !== "" && <div className="drui-dropdown-label">{label}</div>}
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={[
                "drui-dropdown-item",
                item.disabled && "drui-dropdown-item--disabled",
                item.className && item.className,
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
                    color: typeof item.color === typeof "" && item.color,
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
        })}
      </ul>
    </div>
  );
};
export default Dropdown;
