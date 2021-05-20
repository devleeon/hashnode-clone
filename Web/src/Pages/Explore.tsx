import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  styled,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import LayOut from "../Components/LayOut";
import {
  BoldText,
  FlexColumnBox,
  FlexRowBox,
  LightText,
  WhiteBox,
  WhiteButton,
} from "../styles/Styles";
import { SubTitle, Title } from "./Tags";
import { SortOrder, useBlogsQuery } from "../generated/graphql";
import { getDate } from "../Utilities/getDate";
import { Add } from "@material-ui/icons";
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

const BlogItem = styled(Box)(({ theme }) => ({
  padding: "20px",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const DateText = styled(LightText)({
  fontStyle: "italic",
  marginRight: "8px",
});

type OrderType = "weekly" | "monthly";

function Explore(): ReactElement {
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const [order, setOrder] = useState<OrderType>("weekly");
  const [skip, setSkip] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const { data, refetch, fetchMore } = useBlogsQuery({
    variables: {
      orderBy:
        order === "weekly"
          ? { weeklyScore: SortOrder.Desc }
          : { monthlyScore: SortOrder.Desc },
      take: 10,
    },
  });
  const fetchMoreBlogs = async () => {
    await fetchMore({ variables: { skip } }).then(({ data }) => {
      setSkip(skip + data.blogs.length);
    });
    if (skip === 40) {
      setHasMore(false);
    }
  };
  useEffect(() => {
    const refetchBlogs = async () => {
      await refetch().then(({ data }) => {
        if (data) {
          setSkip(data.blogs.length);
        }
      });
      if (skip === 40) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    };

    refetchBlogs();
  }, [order, refetch]);
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
          {data?.blogs.map((blog, i) => {
            return (
              <BlogItem>
                <FlexRowBox
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Box paddingX="30px">
                    <BoldText fontSize="30px" textColor="grey">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </BoldText>
                  </Box>
                  <Avatar
                    src={blog.user.avatar}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginRight: "20px",
                    }}
                  />
                  <FlexColumnBox flex="1 1 0%">
                    <BoldText>{blog.name}</BoldText>
                    <LightText>{blog.address}</LightText>
                    <Box paddingY="20px">
                      {blog.user.posts.map((p) => {
                        const date = getDate(p.createdAt);
                        return (
                          <FlexRowBox>
                            <DateText>{`${date.date} ${date.month}, ${date.year}`}</DateText>
                            <Link href={`/p/${p.id}`}>{p.title}</Link>
                          </FlexRowBox>
                        );
                      })}
                    </Box>
                  </FlexColumnBox>
                  <FlexRowBox alignItems="center">
                    <LightText>{blog.user.followerCount} followers</LightText>
                    <Button
                      variant="outlined"
                      style={{ textTransform: "none", padding: "6px 8px" }}
                    >
                      <Add />
                      Follow
                    </Button>
                  </FlexRowBox>
                </FlexRowBox>
              </BlogItem>
            );
          })}
          {hasMore && (
            <FlexRowBox
              padding="20px 40px"
              alignItems="center"
              justifyContent="center"
            >
              <WhiteButton onClick={fetchMoreBlogs}>
                See more trending blogs
              </WhiteButton>
            </FlexRowBox>
          )}
        </WhiteBox>
        <Divider orientation="horizontal" />
        <Footer />
      </Container>
    </LayOut>
  );
}

export default Explore;
