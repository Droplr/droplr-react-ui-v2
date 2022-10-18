import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Dropdown, { DropdownItemProps, DropdownProps } from "./Dropdown";

export default {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
const DropdownChangeHandler = (arg: any) => {
    // Handle the arg (the selected item)
    return;
}

const args: DropdownItemProps = {
    title: 'First Item',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    onClick: function (arg: any): void {},
    closeOnItemClick: true,
    closeDropdown: function (): void {}
};

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
    className: 'example',
    label: 'Simple Dropdown',
    minWidth: '128px',
    items: [
        args, 
        {...args, disabled: true, title: 'Second Item'},
        {...args, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         title: 'Third Item'},
    ],
    onMouseLeave: DropdownChangeHandler
};
