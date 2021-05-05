import { Box, Divider, styled, Theme, useMediaQuery } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";
import React, { ReactElement } from "react";
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
const SearchInput = styled("input")({
  width: "100%",
  border: 0,
  fontSize: "20px",
  fontWeight: 600,
  letterSpacing: "-0.025rem",
  padding: "35px 25px",
  borderRadius: "10px",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    color: grey[500],
  },
});
const Buttons = styled(Box)({
  padding: "12px 20px",
  textTransform: "uppercase",
  cursor: "pointer",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: blueGrey[50],
  },
});
interface Props {}

function Search({}: Props): ReactElement {
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <LayOut>
      <>
        <GridLeftItem>
          <WhiteBox padding="0px">
            <>
              <SearchInput type="text" placeholder="Search Cashnode" />
              <Divider orientation="horizontal" />
              <Box display="flex" flexDirection="row">
                <Buttons>Top</Buttons>
                <Buttons>latest</Buttons>
                <Buttons>Tags</Buttons>
                <Buttons>people</Buttons>
              </Box>
            </>
          </WhiteBox>
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

export default Search;
