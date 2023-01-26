import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Icon, { IconProps } from "./Icons";
import "./icons.css";
import * as iconList from "./IconList/IconList";
import styled, { css } from "styled-components";

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
      <StyledIconContainer key={index}>
        {/* Omitt Type error */}
        <Icon name={icon.k} size={32} stroke={0}/>
        <div className="gallery-item-title">{icon.k}</div>
      </StyledIconContainer>
    );
  });
};

const Template: Story<IconProps> = (args) => (
  <div className="icon-gallery">{GetIcons()}</div>
);
export const IconList = Template.bind({});

const StyledIconContainer = styled.div(
    ({theme}) => {return css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 12px;

        color: ${theme.button.primary.iconColor};

        .gallery-item-title {
            margin-top: 4px;
            font-size: ${theme.fonts.size.small};
            font-family: ${theme.fonts.family.primary};
            color: ${theme.button.secondary.textColor}
        }
    `}
)
