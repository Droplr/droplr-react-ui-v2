import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Input, { InputProps } from "./Input";
import Icon from "../Icons/Icons";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Input component with support for various types including text, number, and password.
For password type inputs, it includes a visibility toggle feature:
- Shows Eye/EyeOff icons to toggle password visibility
- Clicking the icon switches between showing and hiding the password
- Initial visibility can be controlled via the passwordVisible prop
        `,
      },
    },
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
PasswordInput.args = { 
  label: "Password Input", 
  onChange: onChange, 
  type: 'password', 
  value: 'MySecretPassword123',
  placeholder: 'Enter your password'
};
PasswordInput.parameters = {
  docs: {
    description: {
      story: 'Password input with visibility toggle. Click the eye icon to show/hide the password.',
    },
  },
};

export const PasswordInputInitiallyVisible = Template.bind({});
PasswordInputInitiallyVisible.args = { 
  label: "Password Input (Initially Visible)", 
  onChange: onChange, 
  type: 'password', 
  value: 'MySecretPassword123',
  passwordVisible: true,
  placeholder: 'Enter your password'
};
PasswordInputInitiallyVisible.parameters = {
  docs: {
    description: {
      story: 'Password input that starts with the password visible. The passwordVisible prop controls the initial visibility state.',
    },
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = { label: "My Input Component", onChange: onChange, icon: <Icon name="Alert" size={20} color="var(--color-danger)" />};

export const WithError = Template.bind({});
WithError.args = { label: "My Input Component", onChange: onChange, error: 'Oops! Something isn`t right.'};

export const WithAdditionalInfo = Template.bind({});
WithAdditionalInfo.args = { label: "My Input Component", onChange: onChange, info: 'Some helpful information!'};

export const DisabledInput = Template.bind({});
DisabledInput.args = { label: "My Input Component", onChange: onChange, disabled: true, value: 'I`m on vacation.'};

export const ReadOnlyInput = Template.bind({});
ReadOnlyInput.args = { label: "My Input Component", onChange: onChange, readOnly: true, value: 'You can`t touch me!'};
