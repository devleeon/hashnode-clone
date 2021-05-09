import {
  Avatar,
  Box,
  Button,
  styled,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  BookmarkBorderRounded,
  BookmarkRounded,
  ChatOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { ReactElement } from "react";
import { cache, meVar } from "../../Apollo/localState";
import {
  usePostsQuery,
  useCreateBookmarkMutation,
  useUnBookmarkMutation,
} from "../../generated/graphql";
import { BoldText, LightText, WhiteBox } from "../../styles/Styles";
import { getDate } from "../../Utilities/getDate";
import SkeletonContent from "./SkeletonContent";

const Contents = styled(Box)(({ theme }) => ({
  width: "100%",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));
const IconButton = styled(Button)(({ theme }) => ({
  padding: "6px 8px",
  minWidth: 0,
}));
const TextImage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));
interface Props {}

function Posts({}: Props): ReactElement {
  const { data, loading } = usePostsQuery();
  const theme = useTheme();

  const [bookmark] = useCreateBookmarkMutation();
  const [unBookmark] = useUnBookmarkMutation();
  const me = meVar();
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

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
    <WhiteBox>
      {data?.posts.map((post, i) => {
        const date = getDate(post.createdAt);
        return (
          <Contents padding="16px 20px" key={i}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Avatar
                style={{ marginRight: "8px" }}
                {...(post.authorAvatar && { src: post.authorAvatar })}
              />
              <Box>
                <LightText textColor="black">{post.authorname}</LightText>
                <LightText>{date}</LightText>
              </Box>
            </Box>
            <TextImage
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              paddingY="20px"
            >
              {/* <Box
                paddingY="20px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              > */}
              <Box
                display="flex"
                flexDirection="column"
                {...(!small && post.photo && { maxWidth: "65%" })}
              >
                <BoldText variant="h4" textColor="black" fontSize="24px">
                  {post.title}
                </BoldText>
                <Box paddingY="6px">
                  <LightText
                    textColor={theme.palette.secondary.dark}
                    fontWeight={600}
                  >
                    {post.content}
                  </LightText>
                </Box>
                <LightText textColor="black">
                  {post.text
                    ? post.text
                    : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                </LightText>
              </Box>
              {post.photo && (
                <Box
                  width={small ? "100%" : "30%"}
                  height="auto"
                  marginTop={small && "14px"}
                >
                  <img src={post.photo} width="100%" />
                </Box>
              )}
              {/* </Box> */}
            </TextImage>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  marginRight="20px"
                  color="secondary.dark"
                >
                  <ThumbUpAltOutlined
                    style={{
                      marginRight: "8px",
                      color: theme.palette.secondary.dark,
                    }}
                  />
                  {post.likesCount}
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  color="secondary.dark"
                >
                  <ChatOutlined
                    style={{
                      marginRight: "8px",
                      color: theme.palette.secondary.dark,
                    }}
                  />
                  {post.commentsCount}
                </Box>
              </Box>
              <IconButton
                onClick={() =>
                  bookmarkPost(post.id, post.isBookmarked as boolean)
                }
              >
                {post.isBookmarked ? (
                  <BookmarkRounded
                    fontSize="large"
                    style={{ color: theme.palette.primary.main }}
                  />
                ) : (
                  <BookmarkBorderRounded fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Contents>
        );
      })}
      {loading && <SkeletonContent />}
    </WhiteBox>
  );
}

export default Posts;
