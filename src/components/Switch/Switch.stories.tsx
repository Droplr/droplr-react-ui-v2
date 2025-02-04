import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Switch, { SwitchProps } from "./Switch";
import Icon from "../Icons/Icons";

const text = (a) => console.log(a);
export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;
const Template: Story<SwitchProps> = (args) => <><Switch {...args} /><Switch {...args} checked={false} /></>;

export const Primary = Template.bind({});
Primary.args = {
  label: "Switch",
  checked: true,
  labelPosition: "top",
  variant: "primary",
  onChange: text,
};