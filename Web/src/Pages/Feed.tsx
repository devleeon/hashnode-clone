import { Box, styled, Theme, useMediaQuery } from "@material-ui/core";
import React, { ReactElement } from "react";
import FeedHeader from "../Components/Feed/FeedHeader";
import Posts from "../Components/Feed/Posts";
import LayOut from "../Components/LayOut";
import { WhiteBox } from "../styles/Styles";

const GridLeftItem = styled(Box)(({ theme }) => ({
  paddingTop: "10px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 9",
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 6",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 5",
  },
}));
const GridRightItem = styled(Box)(({ theme }) => ({
  paddingTop: "10px",

  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 4",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 2",
  },
}));

interface Props {}

function Feed({}: Props): ReactElement {
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <LayOut sticky={true}>
      <>
        <GridLeftItem>
          <FeedHeader />
          <Posts />
        </GridLeftItem>
        {medium && (
          <GridRightItem>
            <WhiteBox marginBottom="8px">search box</WhiteBox>
            <WhiteBox>top articles</WhiteBox>
            <Box paddingTop="8px" position="sticky" top={0}>
              <WhiteBox marginBottom="8px">tranding blogs</WhiteBox>
              <WhiteBox marginBottom="8px">footer</WhiteBox>
            </Box>
          </GridRightItem>
        )}
      </>
    </LayOut>
  );
}

export default Feed;
