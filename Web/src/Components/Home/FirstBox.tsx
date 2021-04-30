import { Box, styled, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { BlueButton } from "../../styles/Styles";

const MainTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  letterSpacing: "-0.075rem",
  [theme.breakpoints.up("xs")]: { fontSize: "30px" },
  [theme.breakpoints.up("sm")]: { fontSize: "36px", letterSpacing: "-0.1rem" },
  [theme.breakpoints.up("md")]: {
    fontSize: "48px",
    letterSpacing: "-0.125rem",
  },
  marginBottom: "32px",
}));
const MainSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "24px",
  letterSpacing: "-0.125rem",
  marginBottom: "40px",
}));
const ItemContainer = styled(Box)(({ theme }) => ({
  padding: "0 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    "&:not(:last-child)": { marginBottom: "30px" },
  },
}));
const Image = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "130px",
  height: "130px",
  marginBottom: "20px",
}));
const ItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "20px",
  letterSpacing: "-0.05rem",
  fontWeight: 600,
}));
interface Props {
  medium: boolean;
}

function FirstBox({ medium }: Props): ReactElement {
  return (
    <>
      <Box
        paddingX="40px"
        paddingY="96px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <MainTitle variant="h1">
          Everything you need to start blogging as a developer!
        </MainTitle>
        <MainSubtitle variant="h3">
          Own your content, share ideas, and connect with the global dev
          community!
        </MainSubtitle>
        <BlueButton>Start your personal blog for FREE</BlueButton>
      </Box>
      <Box
        display="flex"
        flexDirection={medium ? "row" : "column"}
        alignItems="center"
        padding="0px 64px 80px"
        justifyContent="space-between"
      >
        <ItemContainer>
          <Image />
          <ItemText>Start a developer blog</ItemText>
        </ItemContainer>
        <ItemContainer>
          <Image />
          <ItemText>Map your custom domain</ItemText>
        </ItemContainer>
        <ItemContainer>
          <Image />
          <ItemText>Connect with community</ItemText>
        </ItemContainer>
      </Box>
    </>
  );
}

export default FirstBox;
