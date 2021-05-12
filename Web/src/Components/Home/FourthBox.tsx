import { Box, styled, Typography, useTheme } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import React, { ReactElement } from "react";
import ButtonAuth from "./ButtonAuth";

const GridContainer = styled(Box)({
  padding: "0 40px",
  marginBottom: "40px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});
const GridItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
  [theme.breakpoints.up("md")]: {
    width: "33%",
    "&:nth-child(odd)": {
      border: `solid 1px ${theme.palette.secondary.main}`,
      borderRadius: ".5rem",
    },
  },
}));
const Icon = styled(Box)({
  backgroundColor: blueGrey.A400,
  width: "64px",
  height: "64px",
  marginBottom: "20px",
});
const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 600,
  fontSize: "36px",
  marginBottom: "20px",
}));

function GridItems(): ReactElement {
  return (
    <GridItem>
      <Icon />
      <ItemTitle style={{ marginBottom: "8px", fontSize: "24px" }}>
        Title
      </ItemTitle>
      Every time you write an article, Hashnode publishes it on your domain and
      shares it with the community members on the homepage. The readers are
      directed to your website to read and interact with your content.
    </GridItem>
  );
}
interface Props {
  medium: boolean;
}
function FourthBox({ medium }: Props): ReactElement {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingY="80px"
      borderBottom={`solid 1px ${theme.palette.secondary.main}`}
    >
      <ItemTitle style={{ marginBottom: "40px", textAlign: "center" }}>
        Features that will make your blogging 10x better
      </ItemTitle>
      <GridContainer>
        {arr.map(() => {
          return <GridItems />;
        })}
      </GridContainer>
      <ButtonAuth>Get Started</ButtonAuth>
    </Box>
  );
}

export default FourthBox;
