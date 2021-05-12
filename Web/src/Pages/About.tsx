import { Box, styled } from "@material-ui/core";
import React, { ReactElement } from "react";
import LayOut from "../Components/LayOut";
import { WhiteBox } from "../styles/Styles";

const Container = styled(Box)(({ theme }) => ({
  paddingTop: "10px",
  width: "100%",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 9",
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 10",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 7",
  },
}));

function About(): ReactElement {
  return (
    <LayOut>
      <Container>
        <WhiteBox>About</WhiteBox>
      </Container>
    </LayOut>
  );
}

export default About;
