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
  id: 0,
  icon: <Icon name="UsersShared" color="var(--color-black)" size={14} />,
  onClick: function (arg: any): void {},
};


export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
  className: "example",
  label: "Simple Dropdown",
  minWidth: "128px",
  position: "bottom",
  placeholder: "Select an item",
  closeOnItemClick: true,
  closeOnMouseOut: true,
  withInput: true,
  inputLoading: false,
  closeOnClickOutside: true,
  onInputChanged: (event) => { console.log(event.target.value)},
  items: [
    args,
    { ...args, disabled: true, title: "Second Item", id: 1, description: "Small info..."},
    { ...args, disabled: true, title: "First header", id: 1, type: "HEADER"},
    { ...args, disabled: true, title: "Third Item", id: 1, description: "Small info..."},
    { ...args, disabled: true, title: "Fourth Item", id: 1, description: "Small info..."},
    { ...args, disabled: true, title: "Second header", id: 1, type: "HEADER"},
    {
      ...args,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Fifth Item",
      showItemStatus: true,
      id: 2,
      color: "var(--color-danger)",
    },
    { ...args, id: 1, type: "SPLITTER"},
    {
      ...args,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Sixth Item",
      showItemStatus: true,
      id: 2,
      color: "var(--color-danger)",
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
  offsetPosition: 0,
  offsetAlign: 0,
  matchListWidthToInput: false,
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
