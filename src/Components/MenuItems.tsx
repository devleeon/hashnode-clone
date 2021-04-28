import { Box, Button, styled } from "@material-ui/core";
import {
  CreateOutlined,
  ViewHeadlineRounded,
  ExploreOutlined,
  LocalOfferOutlined,
  BookmarkBorderOutlined,
  SearchOutlined,
  ExpandMoreRounded,
} from "@material-ui/icons";
import React, { ReactElement } from "react";
const Icons = styled(Box)(({ theme }) => ({
  marginRight: "10px",
  display: "flex",
  color: theme.palette.secondary.main,
}));

const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: 600,
  width: "95%",
  height: "48px",
  fontSize: "1rem",
  marginBottom: "20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
const PageItems = styled(Button)(({ theme }) => ({
  fontSize: "18px",
  lineHeight: 1.375,
  textTransform: "capitalize",
  height: "44px",
  padding: "8px",
  width: "100%",
  letterSpacing: "-0.025rem",
  justifyContent: "left",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "white",
  },
}));
interface Props {}

function MenuItems({}: Props): ReactElement {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
    >
      <BlueButton variant="contained">
        <CreateOutlined style={{ marginRight: "5px" }} />
        write
      </BlueButton>
      <PageItems>
        <Icons>
          <ViewHeadlineRounded />
        </Icons>
        my feed
      </PageItems>
      <PageItems>
        <Icons>
          <ExploreOutlined />
        </Icons>
        explore
      </PageItems>
      <PageItems>
        <Icons>
          <LocalOfferOutlined />
        </Icons>
        tags
      </PageItems>
      <PageItems>
        <Icons>
          <BookmarkBorderOutlined />
        </Icons>
        bookmarks
      </PageItems>
      <PageItems>
        <Icons>
          <SearchOutlined />
        </Icons>
        search
      </PageItems>
      <PageItems>
        <Icons>
          <ExpandMoreRounded />
        </Icons>
        more
      </PageItems>
    </Box>
  );
}

export default MenuItems;
