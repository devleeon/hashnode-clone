import { Box, styled } from "@material-ui/core";
import React, { ReactElement } from "react";
import { RegularPostFragment } from "../../generated/graphql";
import theme from "../../styles/theme";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostItem from "./PostItem";
const Contents = styled(Box)(({ theme }) => ({
  width: "100%",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));

interface Props {
  post: RegularPostFragment;
}

function Posts({ post }: Props): ReactElement {
  return (
    <Contents padding="16px 20px">
      <PostHeader
        createdAt={post.createdAt}
        authorAvatar={post.authorAvatar}
        authorname={post.authorname}
      />
      <PostItem
        postId={post.id}
        photo={post.photo}
        content={post.content}
        shortenedText={post.shortenedText}
        title={post.title}
      />
      <PostFooter
        isLiked={post.isLiked}
        postId={post.id}
        likesCount={post.likesCount}
        commentsCount={post.commentsCount}
        theme={theme}
        isBookmarked={post.isBookmarked}
      />
    </Contents>
  );
}

export default Posts;
