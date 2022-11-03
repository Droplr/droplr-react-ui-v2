import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Dropdown, { DropdownItemProps, DropdownProps } from "./Dropdown";
import Icon from "../Icons";

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
    console.log(arg);
    return;
}

const args: DropdownItemProps = {
    title: 'First Item',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: 0,
    onClick: function (arg: any): void {},
};

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
    className: 'example',
    label: 'Simple Dropdown',
    minWidth: '128px',
    defaultIndex: 2,
    position: 'bottom',
    closeOnItemClick : false,
    closeOnMouseOut: true,
    items: [
        args, 
        {...args, disabled: true, title: 'Second Item', id: 1},
        {...args, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
         title: 'Third Item', showItemStatus: true, id: 2},
    ],
    onClick: DropdownChangeHandler
};
