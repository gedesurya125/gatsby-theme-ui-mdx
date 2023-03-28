import React from "react";
// external components
import { Heading, Link, Box, Paragraph } from "theme-ui";
import { Themed } from "@theme-ui/mdx";

const HeadingOne = (props) => {
  return (
    <Themed.h1 {...props}>
      <Themed.a href={`#${props.id}`}>{props.children}</Themed.a>
    </Themed.h1>
  );
};

const Banner = ({ mainText, caption }) => {
  return (
    <Box
      className="mdx-banner"
      sx={{
        width: "100%",
        minHeight: "100px",
        p: "30px",
        bg: "teal",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paragraph
        sx={{
          color: "white",
          fontSize: "30px",
          lineHeight: 1,
        }}
      >
        {mainText}
      </Paragraph>
      <Themed.p
        sx={{
          my: 0,
        }}
      >
        {caption}
      </Themed.p>
    </Box>
  );
};

// This is the place where we can put custom components
const components = {
  h1: HeadingOne,
  Banner,
};

export default components;
