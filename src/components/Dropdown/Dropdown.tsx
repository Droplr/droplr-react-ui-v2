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
  /**
   * @member {String} label Dropdown component label
   */
  label?: string;

  /**
   * @member {Array<DropdownItemProps>} items Dropdown list items, array of DropdownItemProps objects
   */
  items: Array<DropdownItemProps>;

  /**
   * @member {number} [defaultIndex] The default selected option
   * @defaultValue 0
   */
  defaultIndex?: number;

  /**
   * @member {boolean} [fullWidth] Sets the dropdown input field to it's containers full width, default is 'max-content'
   * @defaultValue false
   */
  fullWidth?: boolean;

  /**
   * @member {number} [minWidth] The miniumum width for the input field of the component (in pixels)
   * @defaultValue 0px
   */
  minWidth?: string;

  /**
   * @member {boolean} [closeOnMouseOut] Close dropdown on mouse-out event
   * @defaultValue true
   */
  closeOnMouseOut?: boolean;

  /**
   * @member {boolean} [showItemStatus] Show the status of the dropdown list item next to the title
   * @defaultValue false
   */
  showItemStatus?: boolean;

  /**
   * @member {String} [className] Appends custom class names
   */
  className?: string;

  /**
   * @member {String} [arrowStyles] Custom arrow shapes - PropTypes.shape
   */
  arrowStyles?: any;

  /**
   * @member {string} [position] Dropdown position alignment
   * ToBeImplemented
   * @defaultValue bottom
   */
  position?: "top" | "right" | "left" | "bottom";

  /**
   * @member {boolean} [disabled] Disables the component
   * @defaultValue false
   */
  disabled?: true | false;


  /**
   * @member {any} [parentElement] The parent element of the dropdown component
   * Overrides the default input field, completely replacing it as the trigger
   * @defaultValue null
   */
  parentElement?: any;

  /**
   * @member {boolean} closeOnItemClick Close list on item click
   * @defaultValue true
   */
  closeOnItemClick?: true | false;

  /**
   * @method onMouseLeave
   * @desc Mouse-leave event handler
   * @param {Function} arg Handler function
   */
  onMouseLeave?: (arg: any) => void;

  /**
   * @method onClick
   * @desc onClick event handler
   * @param {Function} arg Handler function
   */
  onClick?: (arg: any) => void;

  /**
   * @method closeOnClick
   * @desc closes dropdown on next click
   */

  /**
   * @member {boolean} closeOnClick Close list on any click
   * @defaultValue false
   */
  closeOnClick?: true | false;
}

/**
 * @interface DropdownItemProps Component props
 * @member {String} [className] Appends custom class names
 * @member {boolean} [disabled] Disables the item
 * @member {String} title Dropdown item title
 * @member {String} description Dropdown item description
 * @member {Icon} [Icon] Dropdown item icon
 * @member {boolean} [active] Is the item active?
 * @member {String} [href] The link the dropdown item opens
 * @member {String} [target] The target of the dropdown item
 * @method onClick Click event handler
 */

export interface DropdownItemProps {
  /**
   * @member {string|number} [id] Custom ID for the item
   */
  id: string | number;

  /**
   * @member {String} [className] Appends custom class names
   * @defaultValue false
   */
  className?: string | null;

  /**
   * @member {boolean} [disabled] Disables the item
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * @member {String} title Dropdown item title
   */
  title: string;
  TitleIcon?: Function | null;

  /**
   * @member {String} [description] Dropdown item description
   */
  description?: string;

  /**
   * @member {Icon} [Icon] Dropdown item icon
   */
  Icon?: ReactElement | null;

  /**
   * @member {boolean} [active] Is the item active?
   */
  active?: boolean;

  /**
   * @member {String} [href] The link the dropdown item opens
   */
  href?: string;

  /**
   * @member {String} [target] The target of the dropdown item
   */
  target?: string;

  /**
   * @member {boolean} [showItemStatus] Show status checkmark of the item
   * @defaultValue true
   */
  showItemStatus?: boolean;

  /**
   * @method onClick
   * @desc Click event handler
   * @param {Function} [arg] The handling function
   * @returns {DropdownItemProps} The selected item
   */
  onClick?: (arg: any) => void;
}

/**
 * @desc Dropdown component
 * @param {DropdownProps} Component props
 */
const Dropdown = ({
  className = "",
  disabled = false,
  position = "bottom",
  defaultIndex = 0,
  fullWidth = true,
  minWidth = "0px",
  closeOnMouseOut = false,
  items = [],
  label = "",
  showItemStatus = true,
  closeOnItemClick = true,
  closeOnClick = false,
  arrowStyles = null,
  parentElement = null,
  onMouseLeave = (arg: any) => {},
  onClick = (arg: any) => {},
}: DropdownProps) => {
  const setDefaultIndex = (): DropdownItemProps => {
    if (defaultIndex === null || defaultIndex === undefined) return items[0];
    if (typeof defaultIndex !== typeof "") {
      if (defaultIndex > items.length - 1) {
        return items[0];
      } else {
        return items[defaultIndex];
      }
    } else {
      if (!isNaN(parseInt(defaultIndex.toString()))) {
        if (parseInt(defaultIndex.toString()) > items.length - 1) {
          return items[0];
        } else {
          return items.find((x) => x.id.toString() === defaultIndex.toString());
        }
      } else {
        return items.find((x) => x.id === defaultIndex);
      }
    }
  };

  const [selected, setSelected] = useState<DropdownItemProps>(
    setDefaultIndex()
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isAnchored, setIsAnchored] = useState(false);
  const [inputElementSize, setInputElementSize] = useState({
    height: 24,
    width: 0,
  });
  const [rotateChevron, setRotateChevron] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(120);

  const inputRef = useRef<HTMLDivElement | null>(null);
  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";

  const toggleDropdown = () => {
    if (disabled) return;
    const currentState = isOpen;
    setIsOpen(!isOpen);
    handleRotate();

    document.removeEventListener("click", closeDropdown);
    if (closeOnClick && !currentState) {
      setTimeout(() => {
        document.addEventListener("click", closeDropdown);
      }, 100);
    }
  };

  const closeDropdown = () => {
    document.removeEventListener("click", closeDropdown);
    setIsOpen(false);
    setRotateChevron(false);
  };

  const handleRotate = () => {
    setRotateChevron(!rotateChevron);
  };

  const handleMouseLeave = () => {
    document.getElementsByTagName("body")[0]?.click();
    if (isOpen && closeOnMouseOut) closeDropdown();
    if (onMouseLeave) {
      onMouseLeave(selected);
    }
  };

  const getDropdownPosition = () => {
    let coords = { top: "0px", right: "0px", left: "0px", bottom: "0px" };
    switch (position) {
      case "top":
        coords.top = `${-inputElementSize.height}px`;
        break;
      case "bottom":
        coords.top = `${inputElementSize.height}px`;
        break;
    }
    return coords;
  };

  useEffect(() => {
    setSelected(setDefaultIndex());
  }, [items, defaultIndex]);

  useEffect(() => {
    if (
      parentElement != null &&
      typeof parentElement !== "undefined" &&
      !isAnchored
    ) {
      setIsAnchored(true);
    }
    if (isAnchored) {
      const parentRef = document.getElementsByClassName(
        "drui-dropdown__togglerWrapper"
      );
      if (parentRef.length < 1) return;
      setInputElementSize({
        height: parentRef[0].clientHeight,
        width: parentRef[0].clientWidth,
      });
    }
  }, [parentElement, isAnchored]);

  useEffect(() => {
    if (items.length > defaultIndex) {
      setSelected(setDefaultIndex());
    }
    if (inputRef.current != null) {
      setInputElementSize({
        height: inputRef.current?.clientHeight,
        width: inputRef.current?.clientWidth,
      });
    }
  }, []);

  return (
    <>
      <div
        className={[
          "drui-dropdown-input",
          "drui-dropdown__togglerWrapper",
          disabled && "disabled",
          isAnchored && "dropdown-anchored",
        ].join(" ")}
        ref={inputRef}
        style={
          fullWidth ? { width: "100%" } : minWidth ? { width: minWidth } : {}
        }
        onClick={toggleDropdown}
      >
        {isAnchored ? (
          parentElement
        ) : (
          <>
            <span className="drui-dropdown-input-label">
              {selected !== null && selected !== undefined
                ? selected.title
                : ""}
            </span>
            <Icon
              name={"ChevronDown"}
              color={"rgb(94, 100, 110)"}
              size={14}
              stroke={2}
              style={{
                transform: rotate,
                transition: "all 0.2s linear",
                marginLeft: "12px",
                marginTop: "2px",
              }}
            />
          </>
        )}
        {isOpen ? (
          <div
            className={["drui-dropdown", className && `${className}`].join(" ")}
            onMouseLeave={handleMouseLeave}
            style={getDropdownPosition()}
          >
            <span className="drui-dropdown__arrow" style={arrowStyles} />
            <div
              className="drui-dropdown__inner"
              style={{ maxHeight: `${dropdownHeight}px` }}
              ref={(r) => {
                if (typeof r === typeof undefined || !r) return;
                var spaceFromBottom =
                  window.innerHeight - r.getBoundingClientRect().top - 25;
                setDropdownHeight(spaceFromBottom);
              }}
            >
              {label !== "" && label !== undefined ? (
                <div className="drui-dropdown__header">
                  <span className="drui-dropdown__title">{label}</span>
                </div>
              ) : (
                <></>
              )}

              <ul
                className="drui-dropdown__itemsList"
                tabIndex={-1}
                role="listbox"
              >
                {
                  /**
                   * @desc Dropdown items component
                   * @param {DropdownItemProps} DropdownItemProps The dropdown item props
                   */
                  items.map((item: DropdownItemProps, index: Number) => {
                    const ActionElem = item.href ? "a" : "button";
                    const onItemElemClick = (e: React.ChangeEvent<any>) => {
                      e.stopPropagation();
                      if (onClick) onClick(item);
                      if (closeOnItemClick) {
                        toggleDropdown();
                      }
                      setSelected(item);
                    };

                    return (
                      <li
                        className="drui-dropdown__listItemWrapper"
                        key={`drui-dropdown-item-${index}`}
                      >
                        <div
                          className={[
                            "drui-dropdownItem",
                            (className && `${className}`) || "",
                            (item.description &&
                              "drui-dropdownItem--withDescription") ||
                              "",
                            (item.disabled && "drui-dropdownItem--disabled") ||
                              "",
                            ((item.showItemStatus || showItemStatus) &&
                              "drui-dropdownItem--showItemStatus") ||
                              "",
                            (item.Icon && "drui-dropdownItem--withIcon") || "",
                          ].join(" ")}
                        >
                          <ActionElem
                            href={item.href || undefined}
                            type={!item.href ? "button" : undefined}
                            className="drui-dropdownItem__action"
                            target={item.target}
                            rel={
                              item.target === "_blank"
                                ? "noopener nofollow"
                                : undefined
                            }
                            disabled={item.disabled}
                            onClick={onItemElemClick}
                          >
                            <div className="drui-dropdownItem__iconWrapper">
                              {/* Custom icon for dropdown item */}
                              {item.Icon ? item.Icon : <></>}

                              {/* No custom icon, menu item is active */}
                              {!item.Icon &&
                                (item.showItemStatus || showItemStatus) &&
                                selected !== undefined &&
                                selected !== null &&
                                selected.id === item.id && (
                                  <Icon
                                    name={"Check"}
                                    color={"rgb(94, 100, 110)"}
                                    size={12}
                                  />
                                )}
                            </div>

                            {/* Item title */}
                            <div className="drui-dropdownItem__title">
                              <span className="drui-dropdownItem__titleText">
                                {item.title}
                              </span>

                              {item.TitleIcon && (
                                <item.TitleIcon className="drui-dropdownItem__titleIcon" />
                              )}
                            </div>

                            {/* Item description */}
                            {item.description && (
                              <span className="drui-dropdownItem__description">
                                {item.description}
                              </span>
                            )}
                          </ActionElem>
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Dropdown;
