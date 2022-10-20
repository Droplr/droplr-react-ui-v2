import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./dropdown.css";
import styled, { css } from "styled-components";
import Icon from "../Icons";

/**
 * @interface DropdownProps Component props
 * @member {String} label Dropdown component label
 * @member {Array<DropdownItem} items Dropdown list items
 * @member {number} [defaultIndex] Index of the default selected item in the items array
 * @member {boolean} [fullWidth] Sets the dropdown input field to it's containers full width
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
  label: string;

  /**
   * @member {Array<DropdownItemProps>} items Dropdown list items, array of DropdownItemProps objects
   */
  items: Array<DropdownItemProps>;

  /**
   * @member {number} [defaultIndex] The default selected option
   * @default 0
   */
  defaultIndex?: number;

  /**
   * @member {boolean} [fullWidth] Sets the dropdown input field to it's containers full width, default is 'max-content'
   * @default false
   */
  fullWidth?: boolean;

  /**
   * @member {number} [minWidth] The miniumum width for the input field of the component (in pixels)
   * @default 0px
   */
  minWidth?: string;

  /**
   * @member {boolean} [closeOnMouseOut] Close dropdown on mouse-out event
   * @default true
   */
  closeOnMouseOut?: boolean;

  /**
   * @member {boolean} [showItemStatus] Show the status of the dropdown list item next to the title
   * @default false
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
   * @default bottom
   */
  position?: "top" | "right" | "left" | "bottom";

  /**
   * @member {boolean} [disabled] Disables the component
   * @default false
   */
  disabled?: true | false;

  /**
   * @member {boolean} closeOnItemClick Close list on item click
   * @default true
   */
  closeOnItemClick?: true | false;

  /**
   * @method onMouseLeave
   * @desc Mouse-leave event handler
   * @param {Function} arg Handler function
   */
  onMouseLeave?: (arg: any) => void;
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
   * @member {String} [className] Appends custom class names
   * @default false
   */
  className?: string | null;

  /**
   * @member {boolean} [disabled] Disables the item
   * @default false
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
   * @default true
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
  label = "Text Switch",
  showItemStatus = true,
  closeOnItemClick,
  arrowStyles,
  onMouseLeave,
}: DropdownProps) => {
  const [selected, setSelected] = useState<DropdownItemProps | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [inputElementSize, setInputElementSize] = useState({
    height: 24,
    width: 0,
  });
  const [rotateChevron, setRotateChevron] = useState(false);

  const inputRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";

  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    handleRotate();
  };

  const handleRotate = () => {
    setRotateChevron(!rotateChevron);
  };

  const handleMouseLeave = () => {
    if (isOpen && closeOnMouseOut) toggleDropdown();
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
    if (defaultIndex && items.length > defaultIndex) {
      setSelected(items[defaultIndex]);
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
      <StyledDropdown
        className={[
          "drui-dropdown-input",
          "drui-dropdown__togglerWrapper",
          disabled && "disabled",
        ].join(" ")}
        ref={inputRef}
        style={
          fullWidth
            ? { width: "max-content" }
            : minWidth
            ? { width: minWidth }
            : {}
        }
        onClick={toggleDropdown}
      >
        <span className="drui-dropdown-input-label">{selected?.title}</span>
        <Icon
          name={"ChevronDown"}
          color={"rgb(94, 100, 110)"}
          size={14}
          style={{ transform: rotate, transition: "all 0.2s linear" }}
        />
        {isOpen ? (
          <StyledDropdownList
            className={["drui-dropdown", className && `${className}`].join(" ")}
            onMouseLeave={handleMouseLeave}
            style={getDropdownPosition()}
            ref={dropdownRef}
          >
            <span className="drui-dropdown__arrow" style={arrowStyles} />
            <div className="drui-dropdown__inner">
              {label && (
                <StyledDropdownLabel className="drui-dropdown__header">
                  <span className="drui-dropdown__title">{label}</span>
                </StyledDropdownLabel>
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
                  items.map((item, index) => {
                    const ActionElem = item.href ? "a" : "button";
                    const onItemElemClick = (e: React.ChangeEvent<any>) => {
                      e.stopPropagation();
                      if (item.onClick) item.onClick(item);
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
                        <StyledDropdownItem
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
                                selected === item && (
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
                        </StyledDropdownItem>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </StyledDropdownList>
        ) : (
          <></>
        )}
      </StyledDropdown>
    </>
  );
};

const StyledDropdown = styled.div(
  ({ theme }) => css`
    font-family: ${theme.fonts.family.primary};
    font-size: ${theme.fonts.size.normal};
    color: ${theme.dropdown.titleColor};
    background: ${theme.dropdown.backgroundColor};
    border-radius: 4px;
    padding: 10px;
    border: 1px solid ${theme.dropdown.borderColor};
    display: flex;
    justify-content: space-between;
    box-shadow: none;
    transition-duration: 250ms;
    position: relative;

    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 12px -1px ${theme.dropdown.shadowColor};
      transition-duration: 250ms;
    }

    &.disabled {
      cursor: not-allowed;
      color: ${theme.dropdown.disabledColor};
      &:hover {
        box-shadow: none;
      }
    }
    &.drui_dropdown__wrapper {
      position: relative; // Dropdown is positioned relatively to this wrapper
      display: inline-block;
      width: auto;
    }
  `
);

const StyledDropdownLabel = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding: 8px 0;
    margin: 0 20px 10px;
    border-bottom: 1px solid ${theme.dropdown.headerBorderColor};
    white-space: nowrap;
  `
);

const StyledDropdownList = styled.div(
  ({ theme }) => css`
    display: table;
    position: absolute;
    z-index: 9;
    font-family: ${theme.fonts.family.primary};
    padding: 12px 0;
    width: auto;
    max-width: 320px;
    width: max-content;
    box-sizing: border-box;
    border-radius: 4px;
    background: ${theme.dropdown.backgroundColor};
    box-shadow: 0 2px 12px -1px ${theme.dropdown.shadowColor};

    .drui-dropdown--top {
      top: auto;
      bottom: 100%;
      margin: {
        top: auto;
        bottom: 4px;
      }

      .drui-dropdown__arrow {
        top: auto;
        bottom: -4px;
        transform: translate(-50%, -20%) rotate(45deg);
        box-shadow: 2px 2px 1px -2px ${theme.dropdown.shadowColor};
      }

      &.drui-dropdown--right {
        .drui-dropdown__arrow {
          transform: translate(50%, -20%) rotate(45deg);
        }
      }
    }

    .drui-dropdown--bottom {
      top: 100%;
      bottom: auto;
      margin: {
        top: 4px;
        bottom: auto;
      }

      &.drui-dropdown--right {
        .drui-dropdown__arrow {
          transform: translate(50%, 20%) rotate(45deg);
        }
      }
    }

    .drui-dropdown--right {
      right: 0;
      left: auto;
      transform: translate(0, 0);
    }

    .drui-dropdown--left {
      right: auto;
      left: 0;
      transform: translate(0, 0);
    }

    .drui-dropdown--center {
      right: auto;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .drui-dropdown__inner {
      display: block;
      position: relative;
      z-index: 1;
      flex-direction: column;
      width: auto;
      height: auto;
      max-height: 420px;
      overflow-y: auto;
      padding: 0;
    }

    .drui-dropdown__arrow {
      display: block;
      position: absolute;
      z-index: 0;
      top: -4px;
      left: 50%;
      transform: translate(-50%, 20%) rotate(45deg);
      width: 10px;
      height: 10px;
      background: ${theme.dropdown.backgroundColor};
      box-shadow: -2px -2px 1px -2px ${theme.dropdown.shadowColor};
    }

    .drui-dropdown__title {
      font-size: ${theme.fonts.size.small};
      text-transform: uppercase;
      color: ${theme.dropdown.headerTextColor};
      font-weight: ${theme.fonts.weight.bold};
    }

    .drui-dropdown__itemsList {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      height: 100%;
      overflow-y: auto;
    }

    .drui-dropdown__listItemWrapper {
      display: flex;
      padding: 0px;
      margin: 0;
    }
  `
);

const StyledDropdownItem = styled.div(
  ({ theme }) => css`
    flex: 1 0 auto;
    max-width: 100%;
    min-width: 0;
    height: 34px;
    font-family: ${theme.fonts.family.primary};
    box-sizing: border-box;
    background-color: ${theme.dropdownItem.backgroundColor};

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      font-family: ${theme.fonts.family.primary};
    }

    &.drui-dropdownItem--withDescription {
      height: auto;

      .drui-dropdownItem__action {
        flex-wrap: wrap;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .drui-dropdownItem__iconWrapper {
        align-items: flex-start;
        padding-top: 10px;
      }
    }
  }

  &.drui-dropdownItem.drui-dropdownItem--disabled {
    .drui-dropdownItem__action {
      &:hover {
        cursor: not-allowed;
        background-color: transparent;
      }
    }

    .drui-dropdownItem__icon,
    .drui-dropdownItem__title,
    .drui-dropdownItem__titleIcon,
    .drui-dropdownItem__description {
      opacity: 0.6;
      color: ${theme.dropdownItem.disabledColor};
      fill: ${theme.dropdownItem.disabledColor};
    }

    &:hover {
      .drui-dropdownItem__icon,
      .drui-dropdownItem__title,
      .drui-dropdownItem__titleIcon,
      .drui-dropdownItem__description {
        opacity: 0.6;
        color: ${theme.dropdownItem.disabledColor};
        fill: ${theme.dropdownItem.disabledColor};
      }
    }
  }

  &.drui-dropdownItem--showItemStatus,
  &.drui-dropdownItem--withIcon {
    .drui-dropdownItem__action {
      padding: 5px 46px 5px 46px;
    }
  }

  .drui-dropdownItem__action {
    display: flex;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    transition: background-color ${theme.dropdown.transitionSettings};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: ${theme.dropdownItem.backgroundColorHover};
      cursor: pointer;

      .drui-dropdownItem__title {
        color: ${theme.dropdownItem.textColorHover};
      }

      .drui-dropdownItem__icon {
        fill: ${theme.dropdownItem.iconColorHover};
      }

      .drui-dropdownItem__titleIcon {
        fill: ${theme.dropdownItem.titleIconColorHover};

        * {
          fill: inherit;
        }
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      background-color: ${theme.dropdownItem.backgroundColorActive};
    }
  }

  .drui-dropdownItem__iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 20px;
    width: 20px;
    height: 100%;
  }

  .drui-dropdownItem__icon {
    fill: ${theme.dropdownItem.iconColor};
    transition: fill ${theme.dropdown.transitionSettings};

    * {
      fill: inherit;
    }
  }

  &.drui-dropdownItem__title {
    flex: 0 1 auto;
    min-width: 0;
    display: flex;
    align-items: center;
    font-size: ${theme.fonts.size.normal};
    font-weight: ${theme.fonts.weight.normal};
    color: ${theme.dropdownItem.textColor};
    transition: color ${theme.dropdown.transitionSettings};

    &.drui-dropdownItem__titleIcon {
      margin-left: 6px;
    }
  }

  .drui-dropdownItem__titleText {
    color: ${theme.dropdownItem.textColor};
    display: flex; // needed to elliminate browser paddings
    flex: 0 0 auto;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .drui-dropdownItem__titleIcon {
    flex: 0 1 24px;
    display: block;
    fill: ${theme.dropdownItem.titleIconColor};
    transition: fill 75ms linear;

    * {
      fill: inherit;
      transition: fill 75ms linear;
    }
  }

  .drui-dropdownItem__description {
    flex: 0 0 100%;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    color: ${theme.dropdownItem.description.textColor};
  }
`
);

export default Dropdown;
