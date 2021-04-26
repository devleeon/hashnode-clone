import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
} from "@material-ui/core";
import React, { ReactElement } from "react";

const Backgound = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: "100%",
  height: "100%",
}));
const GridContainer = styled(Grid)(({ theme }) => ({ margin: 0 }));
const GridItem = styled(Grid)({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const Nav = styled(Box)({
  height: "100%",
  paddingTop: "1.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  width: "144px",
  top: 0,
});
const Logo = styled(Box)({
  paddingTop: "0.5rem",
  width: "144px",
  fontSize: "2rem",
  fontWeight: 700,
});
const MenuContainer = styled(Box)({
  marginTop: "30px",
  height: "344px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const Menu = styled(Box)({
  marginTop: "40px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const MainPage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderTop: 0,
}));
const TopBar = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "white",
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  position: "sticky",
  top: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));
const TopBarText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: "1.25rem",
  fontWeight: 700,
  top: 0,
}));
interface Props {}
function Home({}: Props): ReactElement {
  return (
    <Backgound>
      <Container fixed maxWidth="lg">
        <GridContainer container spacing={2}>
          <GridItem sm={12} md={3} lg={2}>
            <Nav>
              <Logo>cashnode</Logo>
              <MenuContainer>
                <Button> write</Button>
                <Menu></Menu>
              </MenuContainer>
            </Nav>
          </GridItem>
          <GridItem sm={12} md={9} lg={10}>
            <MainPage>
              <TopBar paddingX="40px" paddingY="20px">
                <TopBarText variant="h3">
                  Blogging as a developer, done right!
                </TopBarText>
                <Box>
                  <Button>create an account</Button>
                </Box>
              </TopBar>
              <Box height="2000px" padding="10px">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham. Where can I get some? There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum,
                you need to be sure there isn't anything embarrassing hidden in
                the middle of text. All the Lorem Ipsum generators on the
                Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </Box>
            </MainPage>
          </GridItem>
        </GridContainer>
      </Container>
    </Backgound>
  );
}

export default Home;
