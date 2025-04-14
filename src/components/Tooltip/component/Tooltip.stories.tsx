import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import  Tooltip, {TooltipProps } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <div style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
      Hover over me!
    </div>
  </Tooltip>
);
export const ExampleTooltip = Template.bind({});

ExampleTooltip.args = {
  content: <div>This is a descriptive tooltip with a medium sized text inside of it, containing some dummy information.</div>,
  position: "bottom",
  align: "left",
  hideDelay: 250,
  closeOnClick: true,
  animated: true,
};
