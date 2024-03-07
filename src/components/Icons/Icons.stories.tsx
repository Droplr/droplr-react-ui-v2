import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Icon, { IconProps } from "./Icons";
import "./icons.css";
import * as iconList from "./IconList/IconList";

export default {
  title: "Components/Icons",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const IconRefs = Object.keys(iconList).map((key) => {
  return { k: key, v: iconList[key] };
});

const GetIcons = () => {
  return IconRefs.map((icon, index) => {
    return (
      <div className="drui-icon-container" key={index}>
        {/* Omitt Type error */}
        <Icon name={icon.k} size={32}/>
        <div className="gallery-item-title">{icon.k}</div>
      </div>
    );
  });
};

const Template: Story<IconProps> = (args) => (
  <div className="icon-gallery">{GetIcons()}</div>
);
export const IconList = Template.bind({});
