import React from "react";
import { Box, Button, styled, Theme } from "@material-ui/core";
import {
  BookmarkBorderRounded,
  BookmarkRounded,
  ChatOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { Maybe } from "graphql/jsutils/Maybe";
import { meVar } from "../../Apollo/localState";
import {
  Scalars,
  useCreateBookmarkMutation,
  useUnBookmarkMutation,
} from "../../generated/graphql";
import { FlexRowBox } from "../../styles/Styles";

const LikeCommentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: theme.palette.secondary.dark,
  fontSize: "16px",
  cursor: "pointer",
}));
const IconButton = styled(Button)(({ theme }) => ({
  padding: "6px 8px",
  minWidth: 0,
}));
interface FooterProps {
  theme: Theme;
  postId: Scalars["String"];
  likesCount?: Maybe<Scalars["Float"]>;
  commentsCount?: Maybe<Scalars["Float"]>;
  isBookmarked?: Maybe<Scalars["Boolean"]>;
}

function PostFooter({
  theme,
  postId,
  likesCount,
  commentsCount,
  isBookmarked,
}: FooterProps) {
  const me = meVar();

  const [bookmark] = useCreateBookmarkMutation();
  const [unBookmark] = useUnBookmarkMutation();
  const bookmarkPost = (postId: string, isBookmarked: boolean) => {
    const userId = me?.id as string;
    if (isBookmarked) {
      unBookmark({
        variables: {
          postId,
        },
        update: (cache, { data }) => {
          if (data?.unBookmark) {
            cache.modify({
              id: `Post:${postId}`,
              fields: {
                isBookmarked() {
                  return false;
                },
              },
            });
          }
        },
      });
    } else {
      bookmark({
        variables: {
          userId,
          postId,
        },
        update: (cache, { data }) => {
          if (data?.createBookmark) {
            cache.modify({
              id: `Post:${postId}`,
              fields: {
                isBookmarked() {
                  return true;
                },
              },
            });
          }
        },
      });
    }
  };
  return (
    <FlexRowBox alignItems="center" justifyContent="space-between">
      <FlexRowBox alignItems="center">
        <LikeCommentBox marginRight="20px">
          <ThumbUpAltOutlined
            style={{
              marginRight: "8px",
              color: theme.palette.secondary.dark,
            }}
          />
          {likesCount !== 0 ? likesCount : ""}
        </LikeCommentBox>
        <LikeCommentBox>
          <ChatOutlined
            style={{
              marginRight: "8px",
              color: theme.palette.secondary.dark,
            }}
          />
          {commentsCount !== 0 ? commentsCount : "Comment"}
        </LikeCommentBox>
      </FlexRowBox>
      <IconButton onClick={() => bookmarkPost(postId, isBookmarked as boolean)}>
        {isBookmarked ? (
          <BookmarkRounded
            fontSize="large"
            style={{ color: theme.palette.primary.main }}
          />
        ) : (
          <BookmarkBorderRounded fontSize="large" />
        )}
      </IconButton>
    </FlexRowBox>
  );
}

export default PostFooter;
