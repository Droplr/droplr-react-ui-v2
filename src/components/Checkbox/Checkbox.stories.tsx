import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Checkbox, {CheckboxProps} from "./Checkbox";

const onChange = (a) => console.log(a)
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = { checked: true, disabled: false, variant: 'primary',
onChange: onChange};

export const Secondary = Template.bind({});
Secondary.args = { checked: true, disabled: false, variant: 'secondary',
onChange: onChange};

export const Warning = Template.bind({});
Warning.args = { checked: true, disabled: false, variant: 'warning',
onChange: onChange};

export const Danger = Template.bind({});
Danger.args = { checked: true, disabled: false, variant: 'danger',
onChange: onChange};

export const Disabled = Template.bind({});
Disabled.args = { checked: false, disabled: true, variant: 'primary',
onChange: onChange};