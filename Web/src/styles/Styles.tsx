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
  fontSize?: string | number;
  textColor?: string;
  letterSpacing?: string;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana";
  marginRight?: string;
}

export const BoldText = ({
  fontSize = "24px",
  textColor,
  letterSpacing,
  textTransform,
  marginRight,
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
        textTransform: textTransform ? textTransform : "none",
        marginRight: marginRight ? marginRight : "0px",
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
