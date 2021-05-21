import { Box, Avatar, Button, styled } from "@material-ui/core";
import { LocalOfferOutlined } from "@material-ui/icons";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { isLoggedInVar, meVar } from "../../Apollo/localState";
import {
  WhiteBox,
  BoldText,
  LightText,
  WhiteButton,
} from "../../styles/Styles";
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
const TagsButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  fontWeight: 600,
  height: "48px",
  fontSize: "1rem",
  textTransform: "none",
  padding: "8px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

function FeedHeader(): ReactElement {
  const loggedIn = isLoggedInVar();
  const history = useHistory();

  const sendUserProfile = () => {
    history.push(`/u/${meVar()?.username}`);
  };
  return (
    <>
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
                textColor="black"
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
      <WhiteBox padding="20px" marginBottom="8px">
        {loggedIn && (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              onClick={sendUserProfile}
              style={{ cursor: "pointer" }}
            >
              <Avatar style={{ marginRight: "8px" }} />
              <LightText textColor="black">{meVar()?.username}</LightText>
            </Box>
            <TagsButton>
              My tags
              <LocalOfferOutlined style={{ marginLeft: "4px" }} />
            </TagsButton>
          </Box>
        )}
        <InputButtons>Write an article...</InputButtons>
      </WhiteBox>
    </>
  );
}

export default FeedHeader;
