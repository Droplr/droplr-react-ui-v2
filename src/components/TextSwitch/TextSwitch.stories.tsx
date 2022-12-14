import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import TextSwitch, { TextSwitchItemProps, TextSwitchProps } from "./TextSwitch";

export default {
  title: "Components/TextSwitch",
  component: TextSwitch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TextSwitchProps> = (args) => <TextSwitch {...args} />;
const TextSwitchHandler = (arg: TextSwitchItemProps) => {
  // Handle the arg (the selected item)
  return;
};

export const SimpleSwitch = Template.bind({});
SimpleSwitch.args = {
  label: "Simple Switch",
  defaultIndex: 0,
  items: [
    {
      id: 0,
      label: "Option One",
    },
    {
      id: 1,
      label: "Option Two",
    },
  ],
  onChange: TextSwitchHandler,
};

export const MutlipleVariables = Template.bind({});
MutlipleVariables.args = {
  label: "Multi-variable Switch",
  defaultIndex: 1,
  items: [
    {
      id: 0,
      label: "Option One",
    },
    {
      id: 1,
      label: "Option Two",
    },
    {
      id: 2,
      label: "Option Three",
    },
  ],
  onChange: TextSwitchHandler,
};

export const StringKeyAsIndex = Template.bind({});
StringKeyAsIndex.args = {
  label: "String used for default index",
  defaultIndex: "KEY_THREE",
  items: [
    {
      id: "KEY_ONE",
      label: "Option One",
    },
    {
      id: "KEY_TWO",
      label: "Option Two",
    },
    {
      id: "KEY_THREE",
      label: "Option Three",
    },
  ],
  onChange: TextSwitchHandler,
};