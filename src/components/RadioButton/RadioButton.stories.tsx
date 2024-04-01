import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import RadioButton, { RadioButtonProps } from "./RadioButton";


let checked = false;
const text = (e) => {
  checked = !checked;
}

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { checked: checked, variant: "primary", onChange: text };