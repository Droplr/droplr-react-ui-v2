import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;
const onChange = (e) => {
    // Get outputs
    console.log(e.target.value);
}

export const DefaultInput = Template.bind({});
DefaultInput.args = { label: "My Input Component", onChange: onChange };

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = { label: "My Input Component", onChange: onChange, value: 'I`m ready!' };

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = { label: "My Input Component", onChange: onChange, placeholder: 'Start typing here...' };

export const WithSublabel = Template.bind({});
WithSublabel.args = { label: "My Input Component", onChange: onChange, sublabel: 'An example of a sublabel'};

export const PasswordInput = Template.bind({});
PasswordInput.args = { label: "My Input Component", onChange: onChange, type: 'password', value: 'Password'};

export const PasswordWithShowAndHide = Template.bind({});
PasswordWithShowAndHide.args = { label: "My Input Component", onChange: onChange, type: 'password', value: 'Password', useHidePasswordIcon: true};

export const WithError = Template.bind({});
WithError.args = { label: "My Input Component", onChange: onChange, error: 'Oops! Something isn`t right.'};

export const WithAdditionalInfo = Template.bind({});
WithAdditionalInfo.args = { label: "My Input Component", onChange: onChange, info: 'Some helpful information!'};

export const DisabledInput = Template.bind({});
DisabledInput.args = { label: "My Input Component", onChange: onChange, disabled: true, value: 'I`m on vacation.'};

export const ReadOnlyInput = Template.bind({});
ReadOnlyInput.args = { label: "My Input Component", onChange: onChange, readOnly: true, value: 'You can`t touch me!'};

export const AutoFocusInput = Template.bind({});
AutoFocusInput.args = { label: "My Input Component", onChange: onChange, autoFocus: true};