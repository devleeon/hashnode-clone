import { Box, Button, styled } from "@material-ui/core";

export const WhiteBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  border: `solid 1px ${theme.palette.secondary.main}`,
  borderRadius: ".5rem",
}));

export const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: 600,
  height: "48px",
  fontSize: "1rem",
  textTransform: "none",
  padding: "12px 20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
export const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  fontWeight: 600,
  height: "48px",
  fontSize: "1rem",
  textTransform: "none",
  marginRight: "15px",
  padding: "12px 20px",
  "&:hover": {
    backgroundColor: "white",
  },
}));
