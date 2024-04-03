import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Badge, { BadgeProps } from "./Badge";


let checked = false;
const text = (e) => {
  checked = !checked;
}

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: "Badge", variant: "primary" };