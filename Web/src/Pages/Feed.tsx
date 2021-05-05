import {
  Avatar,
  Box,
  Button,
  styled,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { isLoggedInVar } from "../Apollo/localState";
import LayOut from "../Components/LayOut";
import { BoldText, LightText, WhiteBox, WhiteButton } from "../styles/Styles";

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
const InputButtons = styled(Button)(({ theme }) => ({
  position: "relative",
  fontSize: "18px",
  padding: "20px",
  width: "100%",
  justifyContent: "left",
  marginTop: "8px",
  borderRadius: "15px",
  display: "flex",
  alignItems: "center",
  textTransform: "none",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.dark,
  border: `1px solid ${theme.palette.secondary.main}`,
  "&:hover": {
    backgroundColor: "white",
  },
}));
interface Props {}

function Feed({}: Props): ReactElement {
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const loggedIn = isLoggedInVar();
  return (
    <LayOut>
      <>
        <GridLeftItem>
          {!loggedIn && (
            <>
              <WhiteBox
                padding="20px 24px"
                marginBottom="8px"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" flexDirection="column">
                  <BoldText
                    variant="h1"
                    fontSize="30px"
                    letterSpacing="-0.125rem"
                    color="black"
                  >
                    Community Feed
                  </BoldText>
                  <LightText fontSize="16px">
                    Recent articles from the community
                  </LightText>
                </Box>
                <WhiteButton>Personalize this feed</WhiteButton>
              </WhiteBox>
            </>
          )}
          <WhiteBox padding="20px">
            {loggedIn && (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Avatar /> <LightText>username</LightText>
                </Box>
                <WhiteButton>My tags</WhiteButton>
              </Box>
            )}
            <InputButtons>Write an article...</InputButtons>
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

export default Feed;
