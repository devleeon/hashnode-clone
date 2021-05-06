import { Box, styled, Typography, useTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React, { ReactElement } from "react";
import ButtonAuth from "./ButtonAuth";

const ItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: "20px",
  letterSpacing: "-0.05rem",
  fontWeight: 500,
}));
const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 600,
  fontSize: "36px",
  marginBottom: "20px",
}));
const ThirdBoxItems = styled(Box)(({ theme }) => ({
  padding: "40px",
  [theme.breakpoints.up("md")]: {
    "&:nth-child(even)": {
      border: `solid 1px ${theme.palette.secondary.main}`,
      borderRadius: ".5rem",
    },
  },
}));
interface Props {
  medium: boolean;
}

function ThirdBox({ medium }: Props): ReactElement {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingY="80px"
      borderBottom={`solid 1px ${theme.palette.secondary.main}`}
    >
      <ItemTitle style={{ textAlign: "center", marginBottom: "40px" }}>
        Content Ownership. <br />
        No Ads. No Paywall. No kidding.
      </ItemTitle>
      <Box
        display="flex"
        flexDirection={medium ? "row" : "column"}
        justifyContent="space-between"
        alignItems="center"
        marginBottom="40px"
      >
        <ThirdBoxItems>
          <Box
            height="96px"
            width="100%"
            bgcolor={green[500]}
            marginBottom="40px"
          />
          <ItemTitle
            style={{
              marginBottom: "8px",
              fontSize: "24px",
            }}
          >
            Blog on your personal domain
          </ItemTitle>
          <ItemText style={{ fontSize: "16px" }}>
            Every time you write an article, Hashnode publishes it on your
            domain and shares it with the community members on the homepage. The
            readers are directed to your website to read and interact with your
            content.
          </ItemText>
        </ThirdBoxItems>
        <ThirdBoxItems>
          <Box
            height="96px"
            width="100%"
            bgcolor={green[500]}
            marginBottom="40px"
          />
          <ItemTitle style={{ marginBottom: "8px", fontSize: "24px" }}>
            Instantly find your audience
          </ItemTitle>
          <ItemText style={{ fontSize: "16px" }}>
            Every time you write an article, Hashnode publishes it on your
            domain and shares it with the community members on the homepage. The
            readers are directed to your website to read and interact with your
            content.
          </ItemText>
        </ThirdBoxItems>
        <ThirdBoxItems>
          <Box
            height="96px"
            width="100%"
            bgcolor={green[500]}
            marginBottom="40px"
          />
          <ItemTitle style={{ marginBottom: "8px", fontSize: "24px" }}>
            No annoying pop-ups/ads
          </ItemTitle>
          <ItemText style={{ fontSize: "16px" }}>
            Every time you write an article, Hashnode publishes it on your
            domain and shares it with the community members on the homepage. The
            readers are directed to your website to read and interact with your
            content.
          </ItemText>
        </ThirdBoxItems>
      </Box>
      <ButtonAuth>Get Started</ButtonAuth>
    </Box>
  );
}

export default ThirdBox;
