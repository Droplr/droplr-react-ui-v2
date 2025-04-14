import { DecoratorFn } from "@storybook/react";
import React from "react";
import DroplrUIProvider from "../src/themes/provider";

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
      <div
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#000",
          padding: "30px",
          color: theme === "light" ? "#000" : "#FFF",
        }}
      >
        <DroplrUIProvider theme={theme}>
          <StoryFn />
        </DroplrUIProvider>
      </div>
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
