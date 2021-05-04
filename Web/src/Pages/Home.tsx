import { Box, styled, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import FirstBox from "../Components/Home/FirstBox";
import FourthBox from "../Components/Home/FourthBox";
import SecondBox from "../Components/Home/SecondBox";
import StickyBox from "../Components/Home/StickyBox";
import ThirdBox from "../Components/Home/ThirdBox";
import LayOut from "../Components/LayOut";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "white",
  border: `solid 1px ${theme.palette.secondary.main}`,
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 9",
    borderTop: 0,
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 10",
    borderTop: 0,
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 7",
  },
}));

interface Props {}

function Home({}: Props): ReactElement {
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const theme = useTheme();
  const history = useHistory();

  function moveToAuth() {
    history.push("/auth");
  }
  return (
    <LayOut sticky>
      <Container>
        {/* sticky box start */}
        {small && <StickyBox medium={medium} moveToAuth={moveToAuth} />}
        {/* sticky box end */}
        <Box>
          {/* first box start */}
          <Box borderBottom={`solid 1px ${theme.palette.secondary.main}`}>
            <FirstBox medium={medium} />
          </Box>
          {/* first box end */}
          {/* second box start */}
          <SecondBox medium={medium} />
          {/* second box end */}
          {/* third box start */}
          <ThirdBox medium={medium} />
          {/* third box end */}
          {/* 4th box start */}
          <FourthBox medium={medium} />
          {/* 4th box end */}
        </Box>
      </Container>
    </LayOut>
  );
}

export default Home;
