import { Box, Theme, useTheme } from "@material-ui/core";
import React, { MouseEventHandler, ReactElement } from "react";
import { useHistory } from "react-router";
import { BlueButton, WhiteButton } from "../../styles/Styles";

interface Props {
  medium: boolean;
}

function StickyBox({ medium }: Props): ReactElement {
  const history = useHistory();
  function moveToSignUp() {
    history.push("/auth", { signup: true });
  }
  function moveToLogin() {
    history.push("/auth", { signup: false });
  }
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
        <WhiteButton variant="contained" onClick={moveToLogin}>
          Login
        </WhiteButton>
        <BlueButton variant="contained" onClick={moveToSignUp}>
          Create an account
        </BlueButton>
      </Box>
    </Box>
  );
}
export default StickyBox;
