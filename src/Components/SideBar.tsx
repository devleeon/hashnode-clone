import {
  Avatar,
  Box,
  Button,
  Menu,
  Paper,
  Popover,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import {
  NotificationsNoneOutlined,
  ViewHeadlineRounded,
  WbSunnyOutlined,
} from "@material-ui/icons";
import React, { ReactElement, useState } from "react";
import MenuItems from "./MenuItems";

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 600,
  color: theme.palette.secondary.dark,
  marginBottom: "25px",
}));
const IconMenuButton = styled(Button)(({ theme }) => ({
  fontSize: "24px",
  padding: "8px",
  width: "24px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  marginBottom: "25px",
  position: "relative",
}));

const MenuButtons = styled(Button)(({ theme }) => ({
  fontSize: "24px",
  padding: "8px",
  width: "24px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "white",
  },
}));

interface Props {}

function SideBar({}: Props): ReactElement {
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      {...(small ? { width: "100%" } : { height: "100%", position: "fixed" })}
      display="flex"
      flexDirection={small ? "row" : "column"}
      alignItems="center"
      justifyContent="space-between"
      paddingTop={"1.25rem"}
      paddingX={small ? "10px" : "0px"}
      overflow="auto"
    >
      <Box
        display="flex"
        flexDirection={small ? "row" : "column"}
        alignItems="center"
      >
        {small && (
          <>
            <IconMenuButton aria-haspopup="true" onClick={handleClick}>
              <ViewHeadlineRounded />
            </IconMenuButton>
            {/* {menuVisible && (
                <Box
                  position="absolute"
                  left={0}
                  bgcolor="white"
                  top={"90px"}
                  width="400px"
                  padding="20px"
                  boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
                >
                    <MenuItems />
                </Box>
              )} */}

            <Popover
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Box bgcolor="white" width="400px" padding="20px">
                <MenuItems />
              </Box>
            </Popover>
          </>
        )}
        <LogoText variant="h1">cashnode</LogoText>
        {!small && <MenuItems />}
      </Box>
      <Box
        display="flex"
        flexDirection={small ? "row" : "column"}
        alignItems="center"
        paddingBottom="1.25rem"
      >
        <MenuButtons>
          <WbSunnyOutlined fontSize="inherit" color="secondary" />
        </MenuButtons>
        <MenuButtons>
          <NotificationsNoneOutlined fontSize="inherit" color="secondary" />
        </MenuButtons>
        <MenuButtons>
          <Avatar />
        </MenuButtons>
      </Box>
    </Box>
  );
}

export default SideBar;
