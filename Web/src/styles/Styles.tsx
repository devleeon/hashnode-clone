import {
  Box,
  Button,
  styled,
  Typography,
  TypographyProps,
  useTheme,
} from "@material-ui/core";

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
export const FlexRowBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
});
export const FlexColumnBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
interface BoldTextProps extends TypographyProps {
  fontSize: string | number;
  textColor?: string;
  letterSpacing?: string;
}

export const BoldText = ({
  fontSize = "24px",
  textColor,
  letterSpacing,
  ...props
}: BoldTextProps) => {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      style={{
        color: textColor ? textColor : theme.palette.secondary.dark,
        fontWeight: 600,
        fontSize: fontSize,
        letterSpacing: letterSpacing ? letterSpacing : "0",
      }}
    >
      {props.children}
    </Typography>
  );
};
interface LightTextProps extends TypographyProps {
  fontSize?: string | number;
  textColor?: string;
  letterSpacing?: string;
  fontWeight?: number;
  margin?: string;
}

export const LightText = ({
  fontSize = "16px",
  children,
  letterSpacing,
  textColor,
  fontWeight,
  margin,
  ...props
}: LightTextProps) => {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      style={{
        color: textColor ? textColor : theme.palette.secondary.dark,
        fontWeight: fontWeight ? fontWeight : 500,
        fontSize: fontSize,
        letterSpacing: letterSpacing ? letterSpacing : "0",
        margin: margin,
      }}
    >
      {children}
    </Typography>
  );
};
export const GridLeftItem = styled(Box)(({ theme }) => ({
  paddingTop: "10px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 9",
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 6",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 5",
  },
}));
export const GridRightItem = styled(Box)(({ theme }) => ({
  paddingTop: "10px",

  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 4",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 2",
  },
}));
