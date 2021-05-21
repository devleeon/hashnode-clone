import {
  Box,
  Container,
  styled,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React, { ReactChild, ReactElement } from "react";
import RightSideBar from "./RightSideBar";
import SideBar from "./Sidebar";

export const LayOutContainer = styled(Container)(({ theme }) => ({
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
export const GridMidItem = styled(Box)(({ theme }) => ({
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
export const GridRightItem = styled(Box)(({ theme }) => ({
  paddingTop: "10px",

  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 4",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 2",
  },
}));

interface Props {
  children: ReactChild;
  sticky?: boolean;
  column: 1 | 2;
  search?: boolean;
}
function LayOut({ children, sticky, column, search }: Props): ReactElement {
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  if (column === 1) {
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
  } else {
    // if(column === 2)
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
            <GridMidItem>{children}</GridMidItem>
            {medium && (
              <GridRightItem>
                <RightSideBar search={search} />
              </GridRightItem>
            )}
          </GridContainer>
        </LayOutContainer>
      </Box>
    );
  }
}

export default LayOut;
