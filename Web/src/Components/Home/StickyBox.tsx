import { Box, Theme, useTheme } from "@material-ui/core";
import React, { MouseEventHandler, ReactElement } from "react";
import { BlueButton, WhiteButton } from "../../styles/Styles";

interface Props {
  medium: boolean;
  moveToAuth: MouseEventHandler<HTMLButtonElement>;
}

function StickyBox({ medium, moveToAuth }: Props): ReactElement {
  const theme = useTheme();
  return (
    <Box
      position="sticky"
      top={0}
      borderBottom={`solid 1px ${theme.palette.secondary.main}`}
      width="100%"
      display="flex"
      bgcolor="white"
      flexDirection={medium ? "row" : "column"}
      justifyContent={medium ? "space-between" : "center"}
      alignItems="center"
      paddingX="40px"
      paddingY="20px"
      zIndex={9}
    >
      <Box
        fontSize="18px"
        fontWeight={600}
        letterSpacing="-0.025rem"
        paddingBottom={medium ? "0px" : "20px"}
        color="secondary.dark"
      >
        Blogging as a developer, done right!
      </Box>
      <Box>
        <WhiteButton variant="contained" onClick={moveToAuth}>
          Login
        </WhiteButton>
        <BlueButton variant="contained" onClick={moveToAuth}>
          Create an account
        </BlueButton>
      </Box>
    </Box>
  );
}
export default StickyBox;
