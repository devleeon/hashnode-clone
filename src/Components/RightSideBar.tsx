import { Box } from "@material-ui/core";
import React, { ReactElement } from "react";
import WhiteBox from "./WhiteBox";

interface Props {}

function RightSideBar({}: Props): ReactElement {
  return (
    <Box width="400px">
      <WhiteBox>whitebox</WhiteBox>
    </Box>
  );
}

export default RightSideBar;
