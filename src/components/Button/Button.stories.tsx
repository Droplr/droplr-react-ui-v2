import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Primary", size: "large", variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", size: "large", variant: "secondary" };

export const Info = Template.bind({});
Info.args = { label: "Info", size: "large", variant: "info" };

export const Warning = Template.bind({});
Warning.args = { label: "Warning", size: "large", variant: "warning" };

export const Danger = Template.bind({});
Danger.args = { label: "Danger", size: "large", variant: "danger" };