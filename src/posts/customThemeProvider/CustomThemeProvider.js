import React from "react";
import { ThemeProvider } from "theme-ui";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";
import { useThemedStylesWithMdx } from "@theme-ui/mdx";

const theme = {
  styles: {
    h1: {
      color: "yellow",
    },
    a: {
      color: "blue",
    },
  },
};
const components = {};

const CustomThemeProvider = ({ children }) => {
  const componentWithStyles = useThemedStylesWithMdx(components);

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={componentWithStyles}>{children}</MDXProvider>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;

// NOTE this provider also can behave as layout Components
