import {
  Box,
  BoxProps,
  Button,
  styled,
  Typography,
  TypographyVariant,
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

interface BoldTextProps extends BoxProps {
  variant: TypographyVariant;
}

export const BoldText = ({
  fontSize,
  children,
  variant,
  letterSpacing,
  color,
}: BoldTextProps) => {
  const theme = useTheme();
  return (
    <Typography variant={variant}>
      <Box
        fontSize={fontSize}
        color={color ? color : theme.palette.secondary.dark}
        fontWeight={600}
        letterSpacing={letterSpacing}
      >
        {children}
      </Box>
    </Typography>
  );
};
interface LightTextProps extends BoxProps {
  variant?: TypographyVariant;
}

export const LightText = ({
  fontSize,
  children,
  variant,
  letterSpacing,
  color,
}: LightTextProps) => {
  const theme = useTheme();
  return (
    <Typography variant={variant ? variant : "inherit"}>
      <Box
        fontSize={fontSize}
        color={color ? color : theme.palette.secondary.dark}
        letterSpacing={letterSpacing}
      >
        {children}
      </Box>
    </Typography>
  );
};
