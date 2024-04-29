import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import AnimatedIcon, { AnimatedIconProps } from "./AnimatedIcon";

export default {
  title: "Components/Animated Icons",
  component: AnimatedIcon,
} as Meta;
const Template: Story<AnimatedIconProps> = (args) => <AnimatedIcon {...args} />;

export const ChevronSmall = Template.bind({});
ChevronSmall.args = { 
    name: "ChevronLine",
    toggleState: false,
    color: "var(--color-primary)",
    size: 99,
 };