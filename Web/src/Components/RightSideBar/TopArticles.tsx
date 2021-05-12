import { Box, Button, Divider, styled } from "@material-ui/core";
import { ForumOutlined, ThumbUpOutlined } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import React, { ReactElement, useEffect, useState } from "react";
import { useTopArticlesQuery } from "../../generated/graphql";
import {
  BoldText,
  FlexColumnBox,
  FlexRowBox,
  LightText,
} from "../../styles/Styles";

const PeriodButton = styled(Button)({
  minWidth: 0,
  padding: "4px",
  textTransform: "none",
  "&:not(:last-child)": {
    marginRight: "4px",
  },
});

function TopArticles(): ReactElement {
  const [period, setPeriod] = useState(7);
  const createdDate = new Date().setDate(new Date().getDate() - period);
  const [loaded, setLoaded] = useState(true);
  const { data, refetch, loading } = useTopArticlesQuery({
    variables: {
      createdDate: new Date(createdDate),
    },
  });
  useEffect(() => {
    const refetchPosts = async () => {
      setLoaded(false);
      await refetch({ createdDate: new Date(createdDate) }).then(({ data }) => {
        if (data) {
          setLoaded(true);
        }
      });
    };
    refetchPosts();
  }, [period]);
  return (
    <>
      <FlexRowBox
        padding="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <BoldText variant="h4" fontSize="20px">
          Top Articles
        </BoldText>
        <FlexRowBox>
          <PeriodButton
            onClick={() => {
              setPeriod(7);
            }}
            color={period === 7 ? "primary" : "default"}
          >
            1w
          </PeriodButton>
          <PeriodButton
            onClick={() => {
              setPeriod(30);
            }}
            color={period === 30 ? "primary" : "default"}
          >
            1m
          </PeriodButton>
          <PeriodButton
            onClick={() => {
              setPeriod(90);
            }}
            color={period === 90 ? "primary" : "default"}
          >
            3m
          </PeriodButton>
          <PeriodButton
            onClick={() => {
              setPeriod(180);
            }}
            color={period === 180 ? "primary" : "default"}
          >
            6m
          </PeriodButton>
        </FlexRowBox>
      </FlexRowBox>
      <Divider orientation="horizontal" />
      <Box padding="20px">
        {!loading &&
          loaded &&
          data?.posts.map((p, i) => {
            return (
              <FlexColumnBox key={i} marginBottom="16px">
                <BoldText variant="caption" fontSize="16px">
                  {p.title}
                </BoldText>
                <FlexRowBox fontSize="14px" alignItems="center">
                  <LightText fontSize="14px" margin="0 20px 0 0">
                    {p.authorname}
                  </LightText>
                  <FlexRowBox
                    fontSize="14px"
                    alignItems="center"
                    marginRight="20px"
                  >
                    {/* like button and count */}
                    <ThumbUpOutlined fontSize="small" />
                    <LightText fontSize="14px">{p.likesCount}</LightText>
                  </FlexRowBox>
                  <FlexRowBox fontSize="14px" alignItems="center">
                    {/* comment button and count */}
                    <ForumOutlined fontSize="small" />
                    <LightText fontSize="14px">{p.commentsCount}</LightText>
                  </FlexRowBox>
                </FlexRowBox>
              </FlexColumnBox>
            );
          })}
        {(loading || !loaded) && (
          <>
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
          </>
        )}
      </Box>
    </>
  );
}

function SkeletonComponent(): ReactElement {
  return (
    <Box marginBottom="16px">
      <Skeleton variant="text" width="95%" height="40px" />
      <Skeleton variant="text" width="80%" height="40px" />
      <Skeleton variant="text" width="85%" height="20px" />
    </Box>
  );
}
export default TopArticles;
