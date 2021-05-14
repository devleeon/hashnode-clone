import React, { ReactElement, useEffect, useState } from "react";
import { meVar } from "../Apollo/localState";
import LayOut from "../Components/LayOut";
import Posts from "../Components/Post/Posts";
import SkeletonContent from "../Components/Post/SkeletonContent";
import { useBookmarksQuery, useMeQuery } from "../generated/graphql";
import useScrollEnd from "../Hooks/useScrollEnd";
import { BoldText, LightText, WhiteBox } from "../styles/Styles";

function Bookmark(): ReactElement {
  const DEFAULT_NUMBER_OF_POSTS = 5;
  const arr = new Array(DEFAULT_NUMBER_OF_POSTS).fill("");
  const { data: meData } = useMeQuery();
  const [me] = useState(meVar());
  const [hasMore, setHasMore] = useState(true);
  const [loaded, setLoaded] = useState(true);
  const [limit, setLimit] = useState(DEFAULT_NUMBER_OF_POSTS);

  const { data, loading, fetchMore } = useBookmarksQuery({
    variables: {
      userId: meData?.me!.id,
      limit,
    },
    fetchPolicy: "cache-and-network",
  });

  const scrollEnd = useScrollEnd(loading || !loaded);

  useEffect(() => {
    const fetchMorePosts = async () => {
      if (!loading && hasMore) {
        if (scrollEnd) {
          setLoaded(false);
          await fetchMore({
            variables: {
              limit: DEFAULT_NUMBER_OF_POSTS,
              offset: limit,
            },
          }).then(({ data }) => {
            setLimit(limit + data.bookmarks.length);
            setLoaded(true);
            if (data.bookmarks.length < DEFAULT_NUMBER_OF_POSTS) {
              setHasMore(false);
            }
          });
        }
      }
    };

    fetchMorePosts();
    return () => {};
  }, [me, scrollEnd, loading, loaded]);
  return (
    <LayOut sticky={true} column={2}>
      <>
        <WhiteBox
          padding="40px 24px"
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginBottom="8px"
        >
          <BoldText variant="h1" fontSize="28px">
            Bookmarks
          </BoldText>
          <LightText>
            All the discussions, stories and comments you have bookmarked on
            Hashnode.
          </LightText>
        </WhiteBox>
        <WhiteBox marginBottom="16px">
          {data?.bookmarks.map((p, i) => {
            const post = p.post;
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

export default Bookmark;
