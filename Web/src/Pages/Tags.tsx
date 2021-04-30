import {
  Box,
  Divider,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import Footer from "../Components/Footer";
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
export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  letterSpacing: "-0.075rem",
  fontSize: "30px",
  marginBottom: "4px",
}));
export const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "16px",
  letterSpacing: "-0.0125rem",
}));
const ItemTitle = styled(Box)(({ theme }) => ({
  padding: "20px",
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "20px",
  strong: {
    fontSize: "36px",
    fontWeight: 600,
  },
}));
interface Props {}

function Tags({}: Props): ReactElement {
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <LayOut>
      <Container>
        <WhiteBox padding="40px 24px" marginBottom="8px">
          <>
            <Title variant="h1">Tags On Hashnode</Title>
            <SubTitle>
              Join communities on Hashnode. Follow tags that interest you.
            </SubTitle>
          </>
        </WhiteBox>
        <Box
          display="grid"
          width="100%"
          gridTemplateColumns="repeat(2, 1fr)"
          gridGap="8px"
          marginBottom="20px"
        >
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            <ItemTitle>
              <strong>Most Popular This Week </strong>Extremely active tags in
              terms of posts in the last 7 days. List updated daily at midnight
              PST.
            </ItemTitle>
            <Divider orientation="horizontal" />
            <Box padding="20px 16px">items</Box>
          </WhiteBox>
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            <ItemTitle>
              <strong>Most Popular This Week </strong>Extremely active tags in
              terms of posts in the last 7 days. List updated daily at midnight
              PST.
            </ItemTitle>
            <Divider orientation="horizontal" />
            <Box padding="20px 16px">items</Box>
          </WhiteBox>
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            <ItemTitle>
              <strong>Most Popular This Week </strong>Extremely active tags in
              terms of posts in the last 7 days. List updated daily at midnight
              PST.
            </ItemTitle>
            <Divider orientation="horizontal" />
            <Box padding="20px 16px">items</Box>
          </WhiteBox>
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            <ItemTitle>
              <strong>Most Popular This Week </strong>Extremely active tags in
              terms of posts in the last 7 days. List updated daily at midnight
              PST.
            </ItemTitle>
            <Divider orientation="horizontal" />
            <Box padding="20px 16px">items</Box>
          </WhiteBox>
        </Box>
        <Divider orientation="horizontal" />
        <Footer />
      </Container>
    </LayOut>
  );
}

export default Tags;
