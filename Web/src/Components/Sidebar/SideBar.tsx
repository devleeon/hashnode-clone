import {
  Avatar,
  Box,
  Button,
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
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { meVar } from "../../Apollo/localState";
import { useMeQuery } from "../../generated/graphql";
import NavItems from "./NavItems";
import ProfileItems from "./ProfileItems";

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 600,
  color: theme.palette.secondary.dark,
  marginBottom: "25px",
  cursor: "pointer",
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
  position: "relative",
  fontSize: "24px",
  padding: "8px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  minWidth: 0,
  "&:hover": {
    backgroundColor: "white",
  },
}));

interface Props {}

function SideBar({}: Props): ReactElement {
  const history = useHistory();
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const [navEl, setNavEl] = React.useState<null | HTMLElement>(null);
  const [profileEl, setProfileEl] = React.useState<null | HTMLElement>(null);

  const { data } = useMeQuery();
  meVar(data?.me);
  const handleNavClick = (event: React.MouseEvent<HTMLElement>) => {
    setNavEl(event.currentTarget);
  };
  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    if (data) {
      setProfileEl(event.currentTarget);
    } else {
      history.push("/auth");
    }
  };
  const handleClose = () => {
    setNavEl(null);
    setProfileEl(null);
  };
  const refreshHome = () => {
    history.replace("/");
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
            <IconMenuButton aria-haspopup="true" onClick={handleNavClick}>
              <ViewHeadlineRounded />
            </IconMenuButton>

            <Popover
              anchorEl={navEl}
              open={Boolean(navEl)}
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
                <NavItems />
              </Box>
            </Popover>
          </>
        )}
        <LogoText variant="h1" onClick={refreshHome}>
          cashnode
        </LogoText>
        {!small && <NavItems />}
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
        <MenuButtons aria-haspopup="true" onClick={handleProfileClick}>
          <Avatar
            {...(data?.me?.avatar === "" ? {} : { src: data?.me?.avatar })}
          />
        </MenuButtons>
        <Popover
          anchorEl={profileEl}
          open={Boolean(profileEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: small ? "left" : "right",
          }}
          transformOrigin={{
            vertical: small ? "top" : "bottom",
            horizontal: "left",
          }}
        >
          <Box bgcolor="white" width="258px">
            <ProfileItems />
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}

export default SideBar;
