import { Box, Divider, styled } from "@material-ui/core";
import React, { ReactElement } from "react";
import { removeToken } from "../../Apollo/localState";

const Item = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

interface Props {}

function ProfileItems({}: Props): ReactElement {
  return (
    <Box>
      <Box paddingBottom="8px">
        <Item> item</Item> <Item> item</Item>
      </Box>
      <Divider orientation="horizontal" />
      <Box paddingTop="8px">
        <Item> item</Item> <Item onClick={removeToken}> Logout</Item>
      </Box>
    </Box>
  );
}

export default ProfileItems;
