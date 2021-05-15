import { Avatar, Button } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router";
import LayOut from "../Components/LayOut";
import Posts from "../Components/Post/Posts";
import SkeletonContent from "../Components/Post/SkeletonContent";
import { useFindUniqueTagQuery, useTagPostsQuery } from "../generated/graphql";
import useScrollEnd from "../Hooks/useScrollEnd";
import {
  BlueButton,
  BoldText,
  FlexColumnBox,
  FlexRowBox,
  LightText,
  WhiteBox,
} from "../styles/Styles";
import { dropThousand } from "../Utilities/dropThousand";

interface Props {}
type PramTypes = {
  tagName: string;
};
function TagHome({}: Props): ReactElement {
  const DEFAULT_NUMBER_OF_POSTS = 5;
  const arr = new Array(DEFAULT_NUMBER_OF_POSTS).fill("");
  const [loaded, setLoaded] = useState(true);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { tagName } = useParams<PramTypes>();
  const { data } = useFindUniqueTagQuery({
    variables: {
      tagName,
    },
  });
  const { data: tagPosts, fetchMore, loading } = useTagPostsQuery({
    variables: { tagName, limit: DEFAULT_NUMBER_OF_POSTS },
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
          }).then(({ data: tagPosts }) => {
            setOffset(offset + tagPosts?.tagPosts.length);
            setLoaded(true);
            if (tagPosts?.tagPosts.length < DEFAULT_NUMBER_OF_POSTS) {
              setHasMore(false);
            }
          });
        }
      }
    };

    fetchMorePosts();
  }, [scrollEnd, loading, loaded]);
  if (data) {
    const followers = dropThousand(data.findUniqueTags!.followCount);
    const posts = dropThousand(data.findUniqueTags!.postsCount);

    return (
      <LayOut sticky={true} column={2}>
        <>
          <WhiteBox marginBottom="8px" padding="32px 20px">
            <FlexColumnBox alignItems="center">
              <Avatar
                variant="square"
                style={{ borderRadius: "5px", width: "94px", height: "94px" }}
                src={data?.findUniqueTags?.image}
              />
              <BoldText fontSize="36px" textColor="black">
                {`#${data?.findUniqueTags?.name}`}
              </BoldText>
              <FlexRowBox>
                <Button>rss</Button>
                <Button>
                  {data!.findUniqueTags!.amIFollowing ? "following" : "follow"}
                </Button>
              </FlexRowBox>
              <FlexRowBox>
                <FlexRowBox marginRight="16px">
                  <BoldText fontSize="16px" marginRight="4px">
                    {followers}
                  </BoldText>
                  <LightText>
                    Follower{data!.findUniqueTags!.followCount > 1 ? "s" : ""}
                  </LightText>
                </FlexRowBox>
                <FlexRowBox>
                  <BoldText fontSize="16px" marginRight="4px">
                    {posts}
                  </BoldText>
                  <LightText>
                    Post{data!.findUniqueTags!.postsCount > 1 ? "s" : ""}
                  </LightText>
                </FlexRowBox>
              </FlexRowBox>
            </FlexColumnBox>
          </WhiteBox>
          {tagPosts && tagPosts?.tagPosts.length > 0 ? (
            <WhiteBox marginBottom="80px">
              {tagPosts?.tagPosts.map((post, i) => {
                return <Posts post={post} key={i} />;
              })}
              {(loading || !loaded) &&
                arr.map((_, i) => <SkeletonContent key={i} />)}
            </WhiteBox>
          ) : (
            <WhiteBox padding="40px">
              <FlexColumnBox
                textAlign="center"
                alignItems="center"
                fontWeight="600"
                color="primary.main"
                fontSize="24px"
              >
                There is no post
                <br />
                Let's create one
                <BlueButton style={{ marginTop: "20px" }}>
                  Create a post
                </BlueButton>
              </FlexColumnBox>
            </WhiteBox>
          )}
        </>
      </LayOut>
    );
  } else {
    return <></>;
  }
}

export default TagHome;
