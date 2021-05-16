import { Box, Button, Divider, styled } from "@material-ui/core";
import { Copyright, GitHub, Instagram } from "@material-ui/icons";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import {
  FlexColumnBox,
  FlexRowBox,
  LightText,
  WhiteBox,
} from "../../styles/Styles";

const Icons = styled(Button)(({ theme }) => ({
  padding: "8px",
  borderRadius: "8px",
  minWidth: 0,
}));
const FooterText = styled(Button)(({ theme }) => ({
  padding: "4px 8px",
  borderRadius: "8px",
  width: "100%",
  textTransform: "none",
  display: "flex",
  justifyContent: "left",
  fontSize: "14px",
}));
interface Props {}

function RightSideFooter({}: Props): ReactElement {
  const thisYear = new Date().getFullYear();
  const history = useHistory();
  return (
    <WhiteBox padding="20px">
      <FlexRowBox>
        <Icons>
          <Instagram />
        </Icons>
        <Icons>
          <GitHub />
        </Icons>
      </FlexRowBox>
      <FlexRowBox>
        <FlexColumnBox flex="1 1 0%">
          <FooterText
            onClick={() => {
              history.push("/about");
            }}
          >
            About
          </FooterText>
          <FooterText>Ambassador</FooterText>
          <FooterText>Site Status</FooterText>
          <FooterText>Careers</FooterText>
          <FooterText>Support</FooterText>
        </FlexColumnBox>
        <FlexColumnBox flex="1 1 0%">
          <FooterText>Official Blog</FooterText>
          <FooterText>Must-read</FooterText>
          <FooterText>Cashnode APIs</FooterText>
          <FooterText>Media</FooterText>
        </FlexColumnBox>
      </FlexRowBox>
      <Divider orientation="horizontal" style={{ margin: "4px 0" }} />
      <FlexRowBox marginBottom="8px">
        <FooterText>Privacy</FooterText>
        <FooterText>Terms</FooterText>
      </FlexRowBox>
      <Box paddingX="8px">
        <LightText>© {thisYear} · Cashnode</LightText>
      </Box>
    </WhiteBox>
  );
}

export default RightSideFooter;
