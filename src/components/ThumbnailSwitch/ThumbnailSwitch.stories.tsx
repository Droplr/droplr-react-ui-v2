import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import ThumbnailSwitch, {
  ThumbnailSwitchItemProps,
  ThumbnailSwitchProps,
} from "./ThumbnailSwitch";
import Icons from "../Icons";
import Icon from "../Icons";

export default {
  title: "Components/ThumbnailSwitch",
  component: ThumbnailSwitch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ThumbnailSwitchProps> = (args) => (
  <ThumbnailSwitch {...args} />
);
const ThumbnailSwitchHandler = (arg: ThumbnailSwitchItemProps) => {
  // Handle the arg (the selected item)
  console.log(arg);
  return;
};

export const ThreeItemSwitch = Template.bind({});
ThreeItemSwitch.args = {
  label: "Three Item Switch",
  defaultIndex: 1,
  items: [
    {
      id: 0,
      label: "Option One",
      icon: <Icon name={"Screen"} size={32} color={"#A1AAB7"} stroke={1.5} />,
    },
    {
      id: 1,
      label: "Option Two",
      icon: <Icon name={"Webcam"} size={32} color={"#A1AAB7"} stroke={1.5} />,
    },
    {
      id: 2,
      label: "Option Three",
      icon: (
        <Icon name={"WebcamScreen"} size={32} color={"#A1AAB7"} stroke={1.5} />
      ),
    },
  ],
  onChange: ThumbnailSwitchHandler,
};

export const TwoItemSwitch = Template.bind({});
TwoItemSwitch.args = {
  label: "Two Item Switch",
  defaultIndex: 1,
  items: [
    {
      id: 0,
      label: "Option One",
      icon: <Icon name={"BrowserTab"} size={32} color={"#A1AAB7"} stroke={1} />,
    },
    {
      id: 1,
      label: "Option Two",
      icon: <Icon name={"Dashboard"} size={32} color={"#A1AAB7"} stroke={1} />,
    },
  ],
  onChange: ThumbnailSwitchHandler,
};

export const StringAsDefaultIndex = Template.bind({});
StringAsDefaultIndex.args = {
  label: "Label as default index",
  defaultIndex: "ONE",
  items: [
    {
      id: "ONE",
      label: "Option One",
      icon: <Icon name={"Screen"} size={32} color={"#A1AAB7"} stroke={1.5} />,
    },
    {
      id: "TWO",
      label: "Option Two",
      icon: <Icon name={"Webcam"} size={32} color={"#A1AAB7"} stroke={1.5} />,
    },
    {
      id: "THREE",
      label: "Option Three",
      icon: (
        <Icon name={"WebcamScreen"} size={32} color={"#A1AAB7"} stroke={1.5} />
      ),
    },
  ],
  onChange: ThumbnailSwitchHandler,
};
