import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Tooltip, { TooltipProps } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <div style={{ fontFamily: "sans-serif", fontWeight: "bolder"}}>
      Hover over me!
    </div>
  </Tooltip>
);
export const ExampleTooltip = Template.bind({});

ExampleTooltip.args = {
  title: "Tooltip Title",
  content: (
    <div>
      This is a giant tooltip component This is a giant tooltip component This
      is a giant tooltip component This is a giant tooltip component This is a
      giant tooltip component This is a giant tooltip component This is a giant
      tooltip component This is a giant tooltip component This is a giant
      tooltip component This is a giant tooltip component
      {/* This is a descriptive tooltip */}
    </div>
  ),
  position: "bottom",
  hideDelay: 250,
  closeOnClick: true,
};
