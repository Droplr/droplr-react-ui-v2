import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import TextSwitch, { TextSwitchItem, TextSwitchProps } from "./TextSwitch";

export default {
    title: "Components/TextSwitch",
    component: TextSwitch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TextSwitchProps> = (args) => <TextSwitch {...args} />;
const TextSwitchHandler = (arg: TextSwitchItem) => {
    // Handle the arg (the selected item)
    return;
}

export const SimpleSwitch = Template.bind({});
SimpleSwitch.args = {
    label: "Simple Switch",
    options: [
        {
            id: 0, label: 'Option One'
        }, {
            id: 1,
            label: 'Option Two'
        }],
    onChange: TextSwitchHandler
};

export const MutlipleVariables = Template.bind({});
MutlipleVariables.args = {
    label: "Multi-variable Switch",
    options: [
        {
            id: 0, label: 'Option One'
        }, {
            id: 1,
            label: 'Option Two'
        }, {
            id: 2,
            label: 'Option Three'
        }],
    onChange: TextSwitchHandler
};
