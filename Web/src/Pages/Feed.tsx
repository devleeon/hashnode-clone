import { Box, styled, Theme, useMediaQuery } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import FeedHeader from "../Components/Feed/FeedHeader";
import Posts from "../Components/Post/Posts";
import LayOut from "../Components/LayOut";
import RightSideBar from "../Components/RightSideBar";
import { GridLeftItem, GridRightItem, WhiteBox } from "../styles/Styles";
import {
  PostOrderByInput,
  SortOrder,
  usePostsQuery,
} from "../generated/graphql";
import SkeletonContent from "../Components/Post/SkeletonContent";
import useScrollEnd from "../Hooks/useScrollEnd";

interface Props {}

function Feed({}: Props): ReactElement {
  const DEFAULT_NUMBER_OF_POSTS = 5;
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [offset, setOffset] = useState(DEFAULT_NUMBER_OF_POSTS);
  const [hasMore, setHasMore] = useState(true);
  const [loaded, setLoaded] = useState(true);
  const [orderBy, setOrderBy] = useState<PostOrderByInput>({
    createdAt: SortOrder["Desc"],
  });
  const { data, loading, fetchMore } = usePostsQuery({
    variables: {
      limit: DEFAULT_NUMBER_OF_POSTS,
      orderBy,
    },
  });

  const scrollEnd = useScrollEnd(!loaded || loading);
  useEffect(() => {
    const fetchMorePosts = async () => {
      if (!loading && hasMore) {
        if (scrollEnd) {
          setLoaded(false);
          await fetchMore({
            variables: {
              limit: DEFAULT_NUMBER_OF_POSTS,
              offset,
            },
          }).then(({ data }) => {
            setOffset(offset + data.posts.length);
            setLoaded(true);
            if (data.posts.length < DEFAULT_NUMBER_OF_POSTS) {
              setHasMore(false);
            }
          });
        }
      }
    };

    fetchMorePosts();
  }, [scrollEnd]);
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
