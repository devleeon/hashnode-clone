import { Box, styled } from "@material-ui/core";
import React, { ReactChild, ReactElement } from "react";

const WB = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  border: `solid 1px ${theme.palette.secondary.main}`,
  borderRadius: ".5rem",
  padding: "1.25rem 1.5rem",
}));
interface Props {
  children: ReactChild;
}

function WhiteBox({ children }: Props): ReactElement {
  return <WB>{children}</WB>;
}

export default WhiteBox;
