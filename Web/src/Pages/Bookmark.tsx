import { Theme, useMediaQuery } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { meVar } from "../Apollo/localState";
import LayOut from "../Components/LayOut";
import Posts from "../Components/Post/Posts";
import SkeletonContent from "../Components/Post/SkeletonContent";
import RightSideBar from "../Components/RightSideBar";
import { useBookmarksLazyQuery, useBookmarksQuery } from "../generated/graphql";
import {
  BoldText,
  GridLeftItem,
  GridRightItem,
  LightText,
  WhiteBox,
} from "../styles/Styles";

interface Props {}

function Bookmark({}: Props): ReactElement {
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [me, setMe] = useState(meVar());
  const { data, loading } = useBookmarksQuery({
    variables: {
      userId: me!.id,
    },
  });

  useEffect(() => {}, [me]);
  return (
    <LayOut sticky={true}>
      <>
        <GridLeftItem>
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
            {loading && <SkeletonContent />}
          </WhiteBox>
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

export default Bookmark;
