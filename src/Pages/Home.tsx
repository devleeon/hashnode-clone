import {
  Box,
  Button,
  styled,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";
import { MenuBookOutlined } from "@material-ui/icons";
import React, { ReactElement } from "react";
import LayOut from "../Components/LayOut";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "white",
  border: `solid 1px ${theme.palette.secondary.main}`,
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 9",
    borderTop: 0,
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 10",
    borderTop: 0,
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 7",
  },
}));
const BlueButton = styled(Button)(({ theme }) => ({
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
const WhiteButton = styled(Button)(({ theme }) => ({
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
const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  letterSpacing: "-0.075rem",
  [theme.breakpoints.up("xs")]: { fontSize: "30px" },
  [theme.breakpoints.up("sm")]: { fontSize: "36px", letterSpacing: "-0.1rem" },
  [theme.breakpoints.up("md")]: {
    fontSize: "48px",
    letterSpacing: "-0.125rem",
  },
  marginBottom: "32px",
}));
const Explain = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "24px",
  letterSpacing: "-0.125rem",
  marginBottom: "40px",
}));
const ItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    "&:not(:last-child)": { marginBottom: "30px" },
  },
}));
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "130px",
  height: "130px",
  marginBottom: "20px",
}));
const ItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "20px",
  letterSpacing: "-0.125rem",
  fontWeight: 600,
}));
const ItemContainer2 = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    "&:not(:last-child)": { marginBottom: "40px" },
  },
}));
const Item2Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "36px",
}));
const Item2Text = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
}));
interface Props {}

function Home({}: Props): ReactElement {
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const theme = useTheme();
  return (
    <LayOut>
      <Container>
        {/* sticky box start */}
        {small && (
          <Box
            position="sticky"
            top={0}
            color="secondary.dark"
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
            >
              Blogging as a developer, done right!
            </Box>
            <Box>
              <WhiteButton variant="contained">Login</WhiteButton>
              <BlueButton variant="contained">Create an account</BlueButton>
            </Box>
          </Box>
        )}
        {/* sticky box end */}
        {/* first box start */}
        <Box>
          <Box
            paddingX="40px"
            paddingY="96px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Title variant="h1">
              Everything you need to start blogging as a developer!
            </Title>
            <Explain variant="h3">
              Own your content, share ideas, and connect with the global dev
              community!
            </Explain>
            <BlueButton>Start your personal blog for FREE</BlueButton>
          </Box>
          <Box
            display="flex"
            flexDirection={medium ? "row" : "column"}
            alignItems="center"
            padding="0px 64px 80px"
            justifyContent="space-between"
            borderBottom={`solid 1px ${theme.palette.secondary.main}`}
          >
            <ItemContainer>
              <Item />
              <ItemText>Start a developer blog</ItemText>
            </ItemContainer>
            <ItemContainer>
              <Item />
              <ItemText>Map your custom domain</ItemText>
            </ItemContainer>
            <ItemContainer>
              <Item />
              <ItemText>Connect with community</ItemText>
            </ItemContainer>
          </Box>
          {/* first box end */}
          {/* second box start */}
          <Box
            paddingY="80px"
            display="flex"
            flexDirection={medium ? "row" : "column"}
            alignItems="center"
          >
            <ItemContainer2>
              <Box paddingX="20px">
                <Item2Title>What? 👀</Item2Title>
                <Item2Text>
                  Cashnode is a free developer blogging platform that allows you
                  to publish articles on your own domain and helps you stay
                  connected with a global developer community.
                </Item2Text>
              </Box>
            </ItemContainer2>
            <ItemContainer2>
              <Box paddingX="20px">
                <Item2Title>Why? 😍</Item2Title>
                <Item2Text>
                  This gives you a huge advantage: Google and other search
                  engines send traffic directly to your domain, and Cashnode
                  community members discover your articles on their feed.
                </Item2Text>
              </Box>
            </ItemContainer2>
            <ItemContainer2>
              <Box paddingX="20px" display="flex">
                <Box
                  {...(medium
                    ? { width: "200px", height: "150px", alignSelf: "center" }
                    : { width: "300px", height: "200px" })}
                  bgcolor={lightGreen[500]}
                />
              </Box>
            </ItemContainer2>
          </Box>
        </Box>
      </Container>
    </LayOut>
  );
}

export default Home;
