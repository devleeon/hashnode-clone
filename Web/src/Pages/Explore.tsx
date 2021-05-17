import {
  Box,
  Button,
  Divider,
  styled,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import LayOut from "../Components/LayOut";
import { WhiteBox } from "../styles/Styles";
import { SubTitle, Title } from "./Tags";
import { SortOrder, useExploreQuery } from "../generated/graphql";

const Container = styled(Box)(({ theme }) => ({
  paddingTop: "10px",
  width: "100%",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 9",
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 10",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 7",
  },
}));

const DefaultButton = styled(Button)({
  textTransform: "capitalize",
  letterSpacing: "-0.0075rem",
  fontWeight: 600,
});
type OrderType = "weekly" | "monthly";

function Explore(): ReactElement {
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const [order, setOrder] = useState<OrderType>("weekly");
  const [skip, setSkip] = useState(0);
  const { data, refetch } = useExploreQuery({
    variables: {
      orderBy:
        order === "weekly"
          ? { weeklyScore: SortOrder.Desc }
          : { monthlyScore: SortOrder.Desc },
    },
  });
  console.log(data);
  useEffect(() => {
    const refetchBlogs = async () => {
      await refetch();
    };
    refetchBlogs();
  }, [order]);
  return (
    <LayOut column={1}>
      <Container>
        <WhiteBox padding="40px 24px" marginBottom="8px">
          <Title>Trending Blogs On Hashnode</Title>
          <SubTitle>
            Blogs that are loved by the developer community. Updated every hour.
          </SubTitle>
        </WhiteBox>
        <WhiteBox
          padding="20px"
          marginBottom="8px"
          display="flex"
          flexDirection="row"
        >
          <Box>
            <DefaultButton
              onClick={() => {
                setOrder("weekly");
              }}
              color={order === "weekly" ? "primary" : "inherit"}
            >
              this week
            </DefaultButton>
            <DefaultButton
              onClick={() => {
                setOrder("monthly");
              }}
              color={order === "monthly" ? "primary" : "inherit"}
            >
              this month
            </DefaultButton>
          </Box>
          {small && <Box></Box>}
        </WhiteBox>
        <WhiteBox marginBottom="90px">
          {data?.users.map((user, i) => {
            return (
              <Box padding="10px">
                {i + 1}
                {user.username}
              </Box>
            );
          })}
        </WhiteBox>
        <Divider orientation="horizontal" />
        <Footer />
      </Container>
    </LayOut>
  );
}

export default Explore;
