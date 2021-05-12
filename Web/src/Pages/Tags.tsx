import {
  Box,
  Divider,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import Footer from "../Components/Footer";
import LayOut from "../Components/LayOut";
import {
  useAllTimePopularQuery,
  usePopularThisWeekQuery,
  useRecentlyAddedQuery,
} from "../generated/graphql";
import { BoldText, FlexRowBox, LightText, WhiteBox } from "../styles/Styles";
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

function Tags(): ReactElement {
  const sixMonthAgo = new Date().setDate(new Date().getDate() - 180);
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { data: allTime } = useAllTimePopularQuery();
  const { data: thisWeek } = usePopularThisWeekQuery();
  const { data: recentlyAdded } = useRecentlyAddedQuery({
    variables: {
      sixMonthAgo: new Date(sixMonthAgo),
    },
  });
  console.log(allTime);
  console.log(recentlyAdded);
  return (
    <LayOut>
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
                  <FlexRowBox justifyContent="space-between" key={tag.id}>
                    <Box>{tag.name}</Box>
                    <Box>{`${postsThisweek}`}</Box>
                  </FlexRowBox>
                );
              })}
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
                  <FlexRowBox justifyContent="space-between" key={tag.id}>
                    <Box>{tag.name}</Box>
                    <Box>{`${date} ${mon}`}</Box>
                  </FlexRowBox>
                );
              })}
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
                  <FlexRowBox justifyContent="space-between" key={tag.id}>
                    <Box>{tag.name}</Box>
                    <Box>{`${followCount} followers`}</Box>
                  </FlexRowBox>
                );
              })}
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
