import React, { ReactElement, useEffect, useState } from "react";
import FeedHeader from "../Components/Feed/FeedHeader";
import LayOut from "../Components/LayOut";
import Posts from "../Components/Post/Posts";
import SkeletonContent from "../Components/Post/SkeletonContent";
import {
  PostOrderByInput,
  SortOrder,
  usePostsQuery,
} from "../generated/graphql";
import useScrollEnd from "../Hooks/useScrollEnd";
import { WhiteBox } from "../styles/Styles";

function Feed(): ReactElement {
  const DEFAULT_NUMBER_OF_POSTS = 5;
  const arr = new Array(DEFAULT_NUMBER_OF_POSTS).fill("");
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
      if (scrollEnd) {
        if (!loading && hasMore && loaded) {
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
  }, [scrollEnd, loading, loaded]);
  return (
    <LayOut column={2} sticky={true}>
      <>
        <FeedHeader />
        <WhiteBox marginBottom="80px">
          {data?.posts.map((post, i) => {
            return <Posts post={post} key={i} />;
          })}
          {(loading || !loaded) &&
            arr.map((_, i) => <SkeletonContent key={i} />)}
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
      </>
    </LayOut>
  );
}

export default Feed;
