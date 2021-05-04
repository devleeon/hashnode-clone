import { Box, Button, styled, Theme, useMediaQuery } from "@material-ui/core";
import React, { ReactElement } from "react";
import LayOut from "../Components/LayOut";
import { WhiteBox } from "../styles/Styles";
import { SubTitle, Title } from "./Tags";

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

const DefaultButton = styled(Button)({
  textTransform: "capitalize",
  letterSpacing: "-0.0075rem",
  fontWeight: 600,
});
interface Props {}

function Explore({}: Props): ReactElement {
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <LayOut>
      <Container>
        <WhiteBox padding="40px 24px" marginBottom="8px">
          <Title>Trending Blogs On Hashnode</Title>
          <SubTitle>
            Blogs that are loved by the developer community. Updated every hour.
          </SubTitle>
        </WhiteBox>
        <WhiteBox
          padding="20px"
          marginBottom="8px"
          display="flex"
          flexDirection="row"
        >
          <Box>
            <DefaultButton>this week</DefaultButton>
            <DefaultButton>this month</DefaultButton>
          </Box>
          {small && <Box></Box>}
        </WhiteBox>
      </Container>
    </LayOut>
  );
}

export default Explore;
