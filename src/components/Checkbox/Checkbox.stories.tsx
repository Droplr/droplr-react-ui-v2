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
Primary.args = { checked: false, disabled: false, variant: 'primary',
onChange: onChange};
