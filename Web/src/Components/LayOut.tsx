import { Box, Container, styled } from "@material-ui/core";
import React, { ReactChild, ReactElement } from "react";
import SideBar from "./Sidebar";

const LayOutContainer = styled(Container)(({ theme }) => ({
  paddingRight: "8px",
  paddingLeft: "8px",
}));
const GridContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridGap: "15px",
  },
}));

const GridLeftItem = styled(Box)(({ theme }) => ({
  width: "100%",
  top: 0,
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 3",
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 2",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 1",
  },
}));

interface Props {
  children: ReactChild;
  sticky?: boolean;
}
function LayOut({ children, sticky }: Props): ReactElement {
  return (
    <Box
      bgcolor="secondary.light"
      height="100%"
      minHeight="100vh"
      position="relative"
    >
      <LayOutContainer maxWidth="xl" fixed>
        <GridContainer>
          <GridLeftItem
            {...(sticky && { position: "sticky", top: 0, zIndex: 9 })}
          >
            <SideBar />
          </GridLeftItem>
          {children}
        </GridContainer>
      </LayOutContainer>
    </Box>
  );
}

export default LayOut;
