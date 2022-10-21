import React, { useEffect, useState } from "react";
import "./text-switch.css";
import styled, { css } from 'styled-components'

/**
 * @interface TextSwitchProps Component props
 * @member {Array<TextSwitchItem} options - Select options (labels and handlers)
 * @member {number} defaultIndex - Index of the default selected option
 * @member {String} className - Appends custom class names
 * @member {String} label - Text switch label
 * @member {boolean} disabled - Disabled and uninteractive
 * @member {Function} onChange - Click event handler, calls handler with selected item as the parameter
*/
export interface TextSwitchProps {

    /**
    * @member {Array<TextSwitchItem} options - Select options (labels and handlers)
    */
    options?: Array<TextSwitchItem>;

    /**
    * @member {number} defaultIndex - Index of the default selected option
    */
    defaultIndex?: number;

    /**
    * @member {String} className - Appends custom class names
    */
    className?: string;

    /**
    * @member {String} label - Text switch label
    */
    label: string;

    /**
    * @member {boolean} disabled - Disabled and uninteractive
    */
    disabled?: true | false;

    /**
     * @method onChange
    * @desc - Click event handler, calls handler with selected item as the parameter
    * @param {Function} arg - Handler function
    * @returns {TextSwitchItem} - Selected item
    */
    onChange: (arg: TextSwitchItem) => void;
};

/**
 * @interface TextSwitchItem - Instance of switch component item
 * @member {number} id - Numerical ID of the item
 * @member {String} label - Text label for the item
 * @member {Icon} icon - DroplrUI icon component
*/
export interface TextSwitchItem {
    /**
    * @desc - The item label
    * @default 'Option 1'
    */
    label: string;

    /**
    * @desc - The item identifier
    * @default 0
    */
    id: Number;

    /**
    * @desc - The item icon (DroplrUI)
    * @default null
    */
    icon?: () => {};
}

/**
 * @desc TextSwitch component
 * @param {TextSwitchProps} - Component props
 * @param {Array<TextSwitchItem>} - Component item list
 */
const TextSwitch = ({
    className = '',
    disabled = false,
    options = [{ id: 0, label: 'Option 1' }, { id: 1, label: 'Option 2' }],
    label = "Text Switch",
    defaultIndex = 0,
    onChange,
}: TextSwitchProps) => {
    const [selected, setSelected] = useState(options[defaultIndex] && options[defaultIndex] || {label: "Label", id: 0});

    const handleChange = (ID: Number) => {
        const selectedOption = options.find(x => x.id === ID);
        setSelected(selectedOption || options[0]);
    };

    useEffect(
        () => {
            if (selected) {
                onChange(selected);
            }
        }, [selected]
    );
    return (
        <>
            {
                label &&
                <StyledTextSwitchLabel>
                    {label}
                </StyledTextSwitchLabel>
            }
            <StyledTextSwitch className={[
                disabled && 'text-switch--disabled'
            ].join(" ")}>
                {
                    options.map(
                        (item, i) => {
                            return (
                                <div key={i}
                                    id={`text-switch-${i}${className && '-' + className}`}
                                    className={[
                                        'text-switch-item',
                                        selected.id == item.id && 'active'
                                    ].join(" ")}
                                    onClick={() => { handleChange(item.id || 0); }}>
                                    <label>
                                        {item.label}
                                    </label>
                                </div>
                            );
                        }
                    )
                }
            </StyledTextSwitch>
        </>
    );
};

const StyledTextSwitchLabel = styled.div(
    ({ theme }) => css`
    color: ${theme.textSwitch.textColorLabel};
    font-family: ${theme.fonts.family.primary};
    font-size: ${theme.fonts.size.normal};
    font-weight: ${theme.fonts.weight.bold};
    padding-bottom: 8px;`
);

const StyledTextSwitch = styled.div(
    ({ theme }) => css`
        padding: 4px;
        border: 1px solid ${theme.textSwitch.borderColor};
        border-radius: 5px;
        width: max-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    .text-switch-item { 
        min-width: 64px;
        width: max-content;
        background-color: transparent;
        color: ${theme.textSwitch.textColorDisabled};
        font-family: ${theme.fonts.family.primary};
        font-size: ${theme.fonts.size.normal};
        font-weight: ${theme.fonts.weight.bold};
        text-align: center;
        text-shadow: none;
        padding: 8px 18px;
        border-radius: 5px;
        transition: all 250ms ease-in-out;

        path {
          fill: ${theme.textSwitch.iconColorDisabled};
        }
    }
    label {
        display: flex;
        align-items: center;
    }
    label:hover {
        cursor: pointer;
    }
    
    .drui-button__icon {
        width: 18px;
        height: 18px;
        margin-right: 6px;
      }

    .active {
        background-color: ${theme.textSwitch.backgroundColor};
        color: ${theme.textSwitch.textColorActive};

        path {
          fill: ${theme.textSwitch.iconColorActive};
        }
    }
  `
);

export default TextSwitch;