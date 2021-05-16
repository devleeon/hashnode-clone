import { Box, Divider, styled } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";
import React, { ReactElement } from "react";
import LayOut from "../Components/LayOut";
import { WhiteBox } from "../styles/Styles";

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

function Search(): ReactElement {
  return (
    <LayOut column={2} search>
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
    </LayOut>
  );
}

export default Search;
