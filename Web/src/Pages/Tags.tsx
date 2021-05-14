import {
  Avatar,
  Box,
  Divider,
  styled,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { Skeleton } from "@material-ui/lab";
import React, { ReactElement } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../Components/Footer";
import LayOut from "../Components/LayOut";
import {
  useAllTimePopularQuery,
  usePopularThisWeekQuery,
  useRecentlyAddedQuery,
} from "../generated/graphql";
import {
  BoldText,
  FlexColumnBox,
  FlexRowBox,
  LightText,
  WhiteBox,
} from "../styles/Styles";
import { dropThousand } from "../Utilities/dropThousand";
import { getDate } from "../Utilities/getDate";

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
export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  letterSpacing: "-0.075rem",
  fontSize: "30px",
  marginBottom: "4px",
}));
export const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "16px",
  letterSpacing: "-0.0125rem",
}));
const ItemTitle = styled(Box)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
});
const TextItalic = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontStyle: "italic",
  color: theme.palette.secondary.main,
}));

type TagBoxProps = {
  title: string;
  explain: string;
};

function TagBox({ title, explain }: TagBoxProps): ReactElement {
  return (
    <ItemTitle>
      <BoldText textColor="black" fontSize="18px">
        {title}
      </BoldText>
      <LightText fontSize="14px">{explain}</LightText>
      <TextItalic>List updated daily at midnight PST.</TextItalic>
    </ItemTitle>
  );
}

const TagListContainer = styled(FlexRowBox)(({ theme }) => ({
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

type TagListProps = {
  name: string;
  numbers: string;
  image: string;
  explain: string;
};
function TagList({
  name,
  numbers,
  image,
  explain,
}: TagListProps): ReactElement {
  const history = useHistory();
  const theme = useTheme();
  const expl = explain.length > 40 ? explain.slice(0, 40) + "..." : explain;
  const handleOnClick = () => {
    history.push(`/t/${name}`);
  };
  return (
    <TagListContainer
      padding="8px 4px"
      alignItems="center"
      onClick={handleOnClick}
    >
      <Avatar
        src={image}
        variant="square"
        style={{
          borderRadius: "4px",
          border: `1px solid ${theme.palette.secondary.main}`,
          width: "46px",
          height: "46px",
          marginRight: "20px",
        }}
      />
      <FlexColumnBox marginRight="16px" flex="1 1 0%">
        <BoldText
          variant="body1"
          textColor="black"
          fontSize="16px"
          textTransform="capitalize"
        >
          {name}
        </BoldText>
        <LightText fontSize="14px">{expl}</LightText>
      </FlexColumnBox>
      <Box
        padding="4px 8px"
        bgcolor={blue[50]}
        borderRadius="5px"
        display="flex"
      >
        {numbers}
      </Box>
    </TagListContainer>
  );
}
function TagListSkeleton(): ReactElement {
  const arr = new Array(10).fill("");

  return (
    <>
      {arr.map((a, i) => {
        return (
          <FlexRowBox padding="8px 4px" alignItems="center" key={i}>
            <Skeleton
              variant="rect"
              width="46px"
              height="46px"
              style={{ marginRight: "20px", display: "flex" }}
            />
            <FlexColumnBox marginRight="16px" flex="1 1 0%">
              <Skeleton variant="text" width="10%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="97%" />
            </FlexColumnBox>
            <Skeleton
              variant="rect"
              width="80px"
              height="30px"
              style={{ display: "flex" }}
            />
          </FlexRowBox>
        );
      })}
    </>
  );
}
function Tags(): ReactElement {
  const sixMonthAgo = new Date().setDate(new Date().getDate() - 180);
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { data: allTime, loading: loadingAllTime } = useAllTimePopularQuery();
  const {
    data: thisWeek,
    loading: loadingThisWeek,
  } = usePopularThisWeekQuery();
  const {
    data: recentlyAdded,
    loading: loadingRecentlyAdded,
  } = useRecentlyAddedQuery({
    variables: {
      sixMonthAgo: new Date(sixMonthAgo),
    },
  });

  return (
    <LayOut column={1}>
      <Container>
        <WhiteBox padding="40px 24px" marginBottom="8px">
          <>
            <Title variant="h1">Tags On Hashnode</Title>
            <SubTitle>
              Join communities on Hashnode. Follow tags that interest you.
            </SubTitle>
          </>
        </WhiteBox>
        <Box
          display="grid"
          width="100%"
          gridTemplateColumns="repeat(2, 1fr)"
          gridGap="8px"
          marginBottom="20px"
        >
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            {/* this week */}
            <TagBox
              title="Most Popular This Week"
              explain="Extremely active tags in terms of posts in the last 7 days."
            />

            <Divider orientation="horizontal" />
            <Box padding="20px 16px">
              {thisWeek?.findManyTags.map((tag) => {
                // var to shorten its look
                const postsThisweek = dropThousand(tag.postsThisweek);
                return (
                  <TagList
                    explain={tag.explain}
                    image={tag.image}
                    name={tag.name}
                    key={tag.id}
                    numbers={`${postsThisweek} posts`}
                  />
                );
              })}
              {loadingThisWeek && <TagListSkeleton />}
            </Box>
          </WhiteBox>
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            {/* recently added */}
            <TagBox
              title="Recently Added"
              explain="Tags that are recently added, sorted from newest to oldest."
            />

            <Divider orientation="horizontal" />
            <Box padding="20px 16px">
              {recentlyAdded?.findManyTags.map((tag) => {
                const { date, month } = getDate(tag.createdAt);
                const mon = month.slice(0, 3);
                return (
                  <TagList
                    explain={tag.explain}
                    image={tag.image}
                    name={tag.name}
                    key={tag.id}
                    numbers={`${date} ${mon}`}
                  />
                );
              })}
              {loadingRecentlyAdded && <TagListSkeleton />}
            </Box>
          </WhiteBox>
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            {/* all time popular */}
            <TagBox
              title="All-time Popular"
              explain="Tags with the maximum number of followers and posts all time."
            />

            <Divider orientation="horizontal" />
            <Box padding="20px 16px">
              {allTime?.findManyTags.map((tag) => {
                // var to shorten its look
                const followCount = dropThousand(tag.followCount);
                return (
                  <TagList
                    explain={tag.explain}
                    image={tag.image}
                    name={tag.name}
                    key={tag.id}
                    numbers={`${followCount} followers`}
                  />
                );
              })}
              {loadingAllTime && <TagListSkeleton />}
            </Box>
          </WhiteBox>
          <WhiteBox gridColumn={small ? "span 2" : "span 1"}>
            <TagBox
              title="New Proposals"
              explain="Follow these tags to cast your vote. We periodically approve tags based on community interest."
            />
            <Divider orientation="horizontal" />
            <Box padding="20px 16px">items</Box>
          </WhiteBox>
        </Box>
        <Divider orientation="horizontal" />
        <Footer />
      </Container>
    </LayOut>
  );
}

export default Tags;
