import { Box, Theme, Typography, useMediaQuery } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props {}

function Footer({}: Props): ReactElement {
  const xSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const thisYear = new Date().getFullYear();
  return (
    <footer>
      <Box
        padding="96px 32px"
        display="flex"
        flexDirection={xSmall ? "column" : "row"}
        justifyContent={xSmall ? "center" : "space-between"}
        alignItems={xSmall ? "left" : "center"}
      >
        <Box>
          <Typography variant="h5" component="h3">
            Cashnode
          </Typography>
          <Typography>© {thisYear} Onechang Lee</Typography>
        </Box>
        <Box>lists</Box>
      </Box>
    </footer>
  );
}

export default Footer;
