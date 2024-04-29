import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Dropdown, { DropdownItemProps, DropdownProps } from "./Dropdown";
import Icon from "../Icons/Icons";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
const DropdownChangeHandler = (arg: any) => {
  // Handle the arg (the selected item)
  console.log(arg);
  return;
};

const args: DropdownItemProps = {
  title: "First Item",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  id: 0,
  onClick: function (arg: any): void {},
};

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
  className: "example",
  label: "Simple Dropdown",
  minWidth: "128px",
  position: "bottom",
  placeholder: "Select an item",
  closeOnItemClick: false,
  closeOnMouseOut: true,
  items: [
    args,
    { ...args, disabled: true, title: "Second Item", id: 1 },
    {
      ...args,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Third Item",
      showItemStatus: true,
      id: 2,
    },
  ],
  onClick: DropdownChangeHandler,
};

const dynamicItems = [
  { ...args, title: "First Item", id: "KEY_ONE" },
  { ...args, disabled: true, title: "Second Item", id: "KEY_TWO" },
  {
    ...args,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    title: "Third Item",
    showItemStatus: true,
    id: "KEY_THREE",
    Icon: <Icon name="Embed" color="black"  size={14} />,
  },
];

export const DropdownWithStringAsIndex = Template.bind({});
DropdownWithStringAsIndex.args = {
  className: "example",
  minWidth: "128px",
  defaultIndex: "KEY_ONE",
  position: "bottom",
  closeOnItemClick: false,
  closeOnMouseOut: true,
  items: dynamicItems.map((i) => {
    return i;
  }),
  onClick: DropdownChangeHandler,
};

export const AnchoredDropdown = Template.bind({});
AnchoredDropdown.args = {
  className: "example",
  minWidth: "128px",
  withShadow: true,
  leftOffset: -200,
  topOffset: 0,
  parentElement: <Icon name="Alert" size={32} />,
  defaultIndex: "KEY_ONE",
  position: "bottom",
  closeOnItemClick: false,
  closeOnMouseOut: true,
  items: dynamicItems.map((i) => {
    return i;
  }),
  onClick: DropdownChangeHandler,
};
