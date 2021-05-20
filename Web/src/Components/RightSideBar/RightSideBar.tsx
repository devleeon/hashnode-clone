import { Box, styled } from "@material-ui/core";
import { LineStyleOutlined, SearchOutlined } from "@material-ui/icons";
import React, { ReactElement } from "react";
import { WhiteBox } from "../../styles/Styles";
import RightSideFooter from "./RightSideFooter";
import TopArticles from "./TopArticles";
import TrandingBlog from "./TrandingBlog";

const TextInput = styled("input")(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: "20px 48px",
  border: 0,
  borderRadius: "10px",
  fontSize: "20px",
  "&::placeholder": {
    color: theme.palette.secondary.dark,
    fontWeight: 600,
  },
  "&:focus": {
    outline: "none",
    padding: "20px",
    zIndex: 9,
    "&::placeholder": {
      color: "grey",
    },
  },
}));

interface Props {
  search?: boolean;
}

function RightSideBar({ search }: Props): ReactElement {
  return (
    <>
      {!search && (
        <WhiteBox marginBottom="8px" position="relative">
          <Box
            position="absolute"
            zIndex={8}
            display="flex"
            padding="20px"
            left={0}
            top={0}
          >
            <SearchOutlined />
          </Box>
          <TextInput type="text" placeholder="Search Cashnode" />
          <Box
            position="absolute"
            zIndex={8}
            display="flex"
            padding="20px"
            right={0}
            top={0}
          >
            <LineStyleOutlined />
          </Box>
        </WhiteBox>
      )}

      <WhiteBox>
        <TopArticles />
      </WhiteBox>
      <Box paddingTop="8px" position="sticky" top={0}>
        <TrandingBlog />
        <RightSideFooter />
      </Box>
    </>
  );
}

export default RightSideBar;
