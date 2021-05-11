import { Box, styled, Theme, useMediaQuery } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import FeedHeader from "../Components/Feed/FeedHeader";
import Posts from "../Components/Post/Posts";
import LayOut from "../Components/LayOut";
import RightSideBar from "../Components/RightSideBar";
import { GridLeftItem, GridRightItem, WhiteBox } from "../styles/Styles";
import { usePostsQuery } from "../generated/graphql";
import SkeletonContent from "../Components/Post/SkeletonContent";
import useScrollEnd from "../Hooks/useScrollEnd";

interface Props {}

function Feed({}: Props): ReactElement {
  const DEFAULT_NUMBER_OF_POSTS = 3;
  const SKELETONS = new Array(DEFAULT_NUMBER_OF_POSTS);
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const scrollEnd = useScrollEnd();
  const [limit, setLimit] = useState(DEFAULT_NUMBER_OF_POSTS);
  const [hasMore, setHasMore] = useState(true);
  const [loaded, setLoaded] = useState(true);

  const { data, loading, fetchMore } = usePostsQuery({
    variables: {
      take: DEFAULT_NUMBER_OF_POSTS,
    },
  });
  useEffect(() => {
    const fetchMorePosts = async () => {
      if (!loading) {
        if (scrollEnd) {
          setLoaded(false);
          await fetchMore({
            variables: {
              take: DEFAULT_NUMBER_OF_POSTS,
              skip: limit,
            },
          }).then(({ data }) => {
            setLimit(limit + data.posts.length);
            setLoaded(true);
          });
        }
      }
    };
    if (limit % DEFAULT_NUMBER_OF_POSTS === 0) {
      // if previously fetched less posts than it's supposed to have fetched
      // then don't fetch any more
      fetchMorePosts();
    } else {
      setHasMore(false);
    }
  }, [scrollEnd, setHasMore, hasMore]);
  return (
    <LayOut sticky={true}>
      <>
        <GridLeftItem>
          <FeedHeader />
          <WhiteBox>
            {data?.posts.map((post, i) => {
              return <Posts post={post} key={i} />;
            })}
            {(loading || !loaded) && (
              <>
                <SkeletonContent />
                <SkeletonContent />
                <SkeletonContent />
              </>
            )}
          </WhiteBox>
          {!hasMore && (
            <WhiteBox
              marginTop="24px"
              padding="20px"
              marginBottom="80px"
              textAlign="center"
            >
              You've reached the end
            </WhiteBox>
          )}
        </GridLeftItem>
        {medium && (
          <GridRightItem>
            <RightSideBar />
          </GridRightItem>
        )}
      </>
    </LayOut>
  );
}

export default Feed;
