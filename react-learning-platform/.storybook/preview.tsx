import React from "react";
import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { createGlobalStyle } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  `;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
