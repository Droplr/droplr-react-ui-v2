import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";
import Icon from "../Icons/Icons";

const text = (e) => console.log(e)
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Primary", size: "large", variant: "primary",
onClick: text};

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", size: "large", variant: "secondary" };

export const Info = Template.bind({});
Info.args = { label: "Info", size: "large", variant: "info" };

export const Success = Template.bind({});
Success.args = { label: "Success", size: "large", variant: "success" };

export const Warning = Template.bind({});
Warning.args = { label: "Warning", size: "large", variant: "warning" };

export const Danger = Template.bind({});
Danger.args = { label: "Danger", size: "large", variant: "danger" };

export const WithIcon = Template.bind({});
WithIcon.args = { label: "With Icon", size: "large", variant: "primary", icon: <Icon name="Audio" color="#fff" size={18} stroke={2}/> };

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { size: "large", variant: "info", icon: <Icon name="Notification" color="#fff" size={24} stroke={2}/> };