import {
  Box,
  Container,
  Grid,
  Paper,
  styled,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import LayOut from "../Components/LayOut";
import RightSideBar from "../Components/RightSideBar";
import { WhiteBox } from "../styles/Styles";
const GridContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gridGap: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridGap: "15px",
  },
}));
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
    <LayOut>
      <>
        <GridLeftItem>
          <WhiteBox>Community Feed Recent articles from the community</WhiteBox>
        </GridLeftItem>
        {medium && (
          <GridRightItem>
            <WhiteBox>dhifs</WhiteBox>
          </GridRightItem>
        )}
      </>
    </LayOut>
  );
}

export default Feed;
