import { Box, styled, Typography, useTheme } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";
import React, { ReactElement } from "react";

const ItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: "20px",
  letterSpacing: "-0.05rem",
  fontWeight: 500,
}));
const ItemContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 40px",
  [theme.breakpoints.down("sm")]: {
    "&:not(:last-child)": { marginBottom: "40px" },
  },
}));
const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 600,
  fontSize: "36px",
  marginBottom: "20px",
}));

interface Props {
  medium: boolean;
}

function SecondBox({ medium }: Props): ReactElement {
  const theme = useTheme();
  return (
    <Box
      paddingY="80px"
      display="flex"
      flexDirection={medium ? "row" : "column"}
      alignItems="center"
      borderBottom={`solid 1px ${theme.palette.secondary.main}`}
    >
      <ItemContainer>
        <ItemTitle>What? 👀</ItemTitle>
        <ItemText style={{ textAlign: "left" }}>
          Cashnode is a free developer blogging platform that allows you to
          publish articles on your own domain and helps you stay connected with
          a global developer community.
        </ItemText>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Why? 😍</ItemTitle>
        <ItemText style={{ textAlign: "left" }}>
          This gives you a huge advantage: Google and other search engines send
          traffic directly to your domain, and Cashnode community members
          discover your articles on their feed.
        </ItemText>
      </ItemContainer>

      <ItemContainer>
        <Box
          {...(medium
            ? { width: "200px", height: "150px", alignSelf: "center" }
            : { width: "300px", height: "200px" })}
          bgcolor={lightGreen[500]}
        />
      </ItemContainer>
    </Box>
  );
}

export default SecondBox;
