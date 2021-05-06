import { Box, Button, styled, useTheme } from "@material-ui/core";
import {
  BookmarkBorderOutlined,
  CreateOutlined,
  ExpandLessRounded,
  ExpandMoreRounded,
  ExploreOutlined,
  LocalOfferOutlined,
  SearchOutlined,
  UnfoldMoreRounded,
  ViewHeadlineRounded,
} from "@material-ui/icons";
import React, { ReactElement, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { isLoggedInVar } from "../../Apollo/localState";
const Icons = styled(Box)({
  marginRight: "10px",
  display: "flex",
});

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
  borderRadius: "0.5rem",
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

function NavItems({}: Props): ReactElement {
  const loggedIn = isLoggedInVar();
  const theme = useTheme();
  const { pathname } = useLocation();
  const history = useHistory();
  const [openMore, setOpenMore] = useState<Boolean>(false);

  const onClickWrite = () => {
    if (loggedIn) {
      history.push("/p/create");
    } else {
      history.push("/auth", { signup: false });
    }
  };

  const handleClick = () => {
    setOpenMore(!openMore);
  };
  const moveToFeed = () => {
    if (loggedIn) {
      history.push("/");
    } else {
      history.push("/community");
    }
  };
  const moveToExplore = () => {
    history.push("/explore");
  };
  const moveToTags = () => {
    history.push("/tags");
  };
  const moveToSearch = () => {
    history.push("/search");
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
    >
      <BlueButton variant="contained" onClick={onClickWrite}>
        <CreateOutlined style={{ marginRight: "5px" }} />
        write
      </BlueButton>
      <PageItems
        onClick={moveToFeed}
        style={
          pathname.startsWith("/community") || (pathname === "/" && loggedIn)
            ? { color: theme.palette.primary.main }
            : { color: "black" }
        }
      >
        <Icons
          color={
            pathname.startsWith("/community") || (pathname === "/" && loggedIn)
              ? "primary.main"
              : "secondary.main"
          }
        >
          <ViewHeadlineRounded />
        </Icons>
        my feed
      </PageItems>
      <PageItems
        onClick={moveToExplore}
        style={
          pathname.startsWith("/explore")
            ? { color: theme.palette.primary.main }
            : { color: "black" }
        }
      >
        <Icons
          color={
            pathname.startsWith("/explore") ? "primary.main" : "secondary.main"
          }
        >
          <ExploreOutlined />
        </Icons>
        explore
      </PageItems>
      <PageItems
        onClick={moveToTags}
        style={
          pathname.startsWith("/tags")
            ? { color: theme.palette.primary.main }
            : { color: "black" }
        }
      >
        <Icons
          color={
            pathname.startsWith("/tags") ? "primary.main" : "secondary.main"
          }
        >
          <LocalOfferOutlined />
        </Icons>
        tags
      </PageItems>
      <PageItems>
        <Icons
          color={
            pathname.startsWith("/bookmarks")
              ? "primary.main"
              : "secondary.main"
          }
        >
          <BookmarkBorderOutlined />
        </Icons>
        bookmarks
      </PageItems>
      <PageItems
        onClick={moveToSearch}
        style={
          pathname.startsWith("/search")
            ? { color: theme.palette.primary.main }
            : { color: "black" }
        }
      >
        <Icons
          color={
            pathname.startsWith("/search") ? "primary.main" : "secondary.main"
          }
        >
          <SearchOutlined />
        </Icons>
        search
      </PageItems>
      <PageItems onClick={handleClick}>
        <Icons>
          {openMore ? <ExpandLessRounded /> : <ExpandMoreRounded />}
        </Icons>
        more
      </PageItems>
      <Box
        marginTop="4px"
        borderLeft="1px solid"
        borderColor="secondary.main"
        paddingLeft="8px"
        width="100%"
        display={openMore ? {} : "none"}
      >
        <PageItems>RFAs</PageItems>
        <PageItems>About</PageItems>
        <PageItems>Careers</PageItems>
        <PageItems>Official Blog</PageItems>
      </Box>
    </Box>
  );
}

export default NavItems;
