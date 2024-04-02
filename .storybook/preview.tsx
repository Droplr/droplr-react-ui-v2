import { DecoratorFn } from "@storybook/react";
import { WithToasts } from "../src/components/Toast/handler";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeAndToast: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  return (
    <>
      <WithToasts offsetTop={0}>
        <div
          className={`theme-${theme}`}
          style={{
            backgroundColor: theme === "dark" ? "#101d38" : "#FFF",
            padding: "32px",
          }}
        >
          <StoryFn />
        </div>
      </WithToasts>
    </>
  );
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "Light" },
        { value: "dark", icon: "circle", title: "Dark" },
      ],
      showName: true,
    },
  },
};

export const decorators = [withThemeAndToast];
