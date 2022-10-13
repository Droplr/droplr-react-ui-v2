import React, { useEffect, useState } from "react";
import "./text-switch.css";
import styled, { css } from 'styled-components'

export interface TextSwitchProps {
    /*
    ** Select options (labels and handlers)
    */
    options?: Array<TextSwitchItem>;
    /*
    ** Index of the default selected option
    */
    defaultIndex?: number;
    /*
    ** Custom className attribute
    */
    className?: string;
    /*
    ** Text switch label
    */
    label: string;
    /*
    ** Disabled and uninteractive
    */
    disabled?: true | false;
    /*
    ** Click event handler
    */
    onChange: (arg: TextSwitchItem) => void;
};

export interface TextSwitchItem {
    /*
    ** The item label
    */
    label?: string;
    /*
    ** The item identifier
    */
    id?: Number;
    /*
    ** The item icon (fn)
    */
    icon?: () => {};
}

const TextSwitch = ({
    className = '',
    disabled = false,
    options = [{ id: 1, label: 'Option 1' }, { id: 2, label: 'Option 2' }],
    label = "Text Switch",
    defaultIndex = 0,
    onChange,
}: TextSwitchProps) => {
    const [selected, setSelected] = useState(options[defaultIndex] && options[defaultIndex] || {});

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
    ({theme}) => css`
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