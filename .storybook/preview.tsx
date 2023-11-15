import { ThemeProvider } from "styled-components";
import { DecoratorFn } from "@storybook/react";
import { darkTheme, lightTheme } from "../src/themes/themes";
import styled, { css } from "styled-components";
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
const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
  ({ theme }) =>
    css`
      background: ${theme.name === "dark"
        ? theme.colors.darkModeBlueBg
        : theme.colors.white};
      border-radius: 5px;
      padding: 24px;
    `
);

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <ThemeBlock fill>
        <StoryFn />
      </ThemeBlock>
    </ThemeProvider>
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

export const decorators = [withTheme];
