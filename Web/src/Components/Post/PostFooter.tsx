import { Box, Button, styled, Theme } from "@material-ui/core";
import {
  BookmarkBorderRounded,
  BookmarkRounded,
  ChatOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { Maybe } from "graphql/jsutils/Maybe";
import React from "react";
import { meVar } from "../../Apollo/localState";
import {
  Scalars,
  useCreateBookmarkMutation,
  useToggleLikeMutation,
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
  isLiked?: Maybe<Scalars["Boolean"]>;
}

function PostFooter({
  theme,
  postId,
  likesCount,
  commentsCount,
  isBookmarked,
  isLiked,
}: FooterProps) {
  const me = meVar();

  const [bookmark] = useCreateBookmarkMutation();
  const [unBookmark] = useUnBookmarkMutation();
  const [toggleLikeMutation] = useToggleLikeMutation();
  const bookmarkPost = () => {
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
  const toggleLike = async () => {
    await toggleLikeMutation({
      variables: {
        postId,
      },
      update: (cache, { data }) => {
        if (data?.toggleLike) {
          cache.modify({
            id: `Post:${postId}`,
            fields: {
              isLiked(prev) {
                return !prev;
              },
              likesCount(prev) {
                return isLiked ? prev - 1 : prev + 1;
              },
            },
          });
        }
      },
    });
  };
  return (
    <FlexRowBox alignItems="center" justifyContent="space-between">
      <FlexRowBox alignItems="center">
        <LikeCommentBox marginRight="20px" onClick={toggleLike}>
          {isLiked ? (
            <ThumbUp
              style={{
                marginRight: "8px",
                color: theme.palette.primary.main,
              }}
            />
          ) : (
            <ThumbUpAltOutlined
              style={{
                marginRight: "8px",
                color: theme.palette.secondary.dark,
              }}
            />
          )}
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
      <IconButton onClick={bookmarkPost}>
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
