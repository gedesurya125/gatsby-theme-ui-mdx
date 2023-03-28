import * as React from "react";

// External Components
import { Paragraph, Box } from "theme-ui";

import Example from "../posts/example.mdx";
import ExampleWithCustomProvider from "../posts/exampleWithCustomProvider.mdx";

const IndexPage = () => {
  return (
    <main>
      <Paragraph
        sx={{
          fontSize: "40px",
        }}
      >
        Hello
      </Paragraph>
      <Example />
      <Box
        sx={{
          height: "3px",
          bg: "black",
          width: "100%",
          my: "100px",
        }}
      />
      <ExampleWithCustomProvider />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
