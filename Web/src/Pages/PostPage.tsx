import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  styled,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import {
  BookmarkBorderOutlined,
  EmojiEmotionsOutlined,
  Instagram,
  NightsStayOutlined,
  Search,
  Share,
  ShareOutlined,
} from "@material-ui/icons";
import React, { ReactElement } from "react";
import { useParams } from "react-router";
import { meVar } from "../Apollo/localState";
import Markdown from "../Components/Markdown";
import PostPageHeader from "../Components/PostPage/PostPageHeader";
import { useGetPostQuery } from "../generated/graphql";
import {
  BoldText,
  FlexColumnBox,
  FlexRowBox,
  LightText,
  IconButton as Icon,
} from "../styles/Styles";
import { getDate } from "../Utilities/getDate";

const PostContainer = styled(Container)({
  height: "auto",
});

const ImageBox = styled(Box)({
  width: "100%",
  paddingTop: "52.5%",
});
type Params = {
  postId: string;
};
interface Props {}

function PostPage({}: Props): ReactElement {
  const { postId } = useParams<Params>();
  const { data } = useGetPostQuery({
    variables: {
      postId,
    },
  });
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  const { month, year, date } = getDate(data?.post?.createdAt as string);

  if (!data) {
    return <></>;
  } else {
    return (
      <Box>
        <PostPageHeader
          blogname={data.post?.author.blog?.name}
          authorname={data.post?.authorname as string}
        />
        <Divider />
        <PostContainer
          fixed
          {...(lg ? { maxWidth: "md" } : { maxWidth: "sm" })}
        >
          <FlexRowBox position="static" overflow="visible" height="auto">
            <FlexColumnBox
              flex="1 1 100%"
              paddingBottom="2000px"
              width="800px"
              {...(lg && { paddingRight: "48px" })}
            >
              <ImageBox
                style={{
                  backgroundImage: `url(${data.post!.photo})`,
                  backgroundSize: "cover",
                }}
              />
              <Box paddingY="20px">
                <BoldText fontSize="40px" textColor="black">
                  {data.post?.title}
                </BoldText>
              </Box>
              <Divider />
              <FlexRowBox alignItems="center" paddingY="10px">
                <Avatar
                  src={`${data.post?.authorAvatar}`}
                  style={{ width: "64px", height: "64px" }}
                />
                <FlexColumnBox paddingX="20px">
                  <BoldText fontSize="24px" textColor="black">
                    {data.post?.authorname}
                  </BoldText>
                  <LightText>{`Publishied on ${month} ${date}, ${year}`}</LightText>
                </FlexColumnBox>
              </FlexRowBox>
              <Divider />
              <Markdown>{`${data.post?.text}`}</Markdown>
            </FlexColumnBox>
            {lg && (
              <FlexColumnBox
                flex="1 0 160px"
                position="sticky"
                alignItems="center"
                height="335px"
                justifyContent="space-between"
                paddingTop="64px"
                top={0}
              >
                <Icon>
                  <EmojiEmotionsOutlined
                    style={{ marginRight: "10px" }}
                    fontSize="large"
                  />
                  Like
                </Icon>
                <Icon>
                  <BookmarkBorderOutlined fontSize="large" />
                </Icon>
                <Icon>
                  <Instagram fontSize="large" />
                </Icon>
                <Icon>
                  <ShareOutlined fontSize="large" />
                </Icon>
              </FlexColumnBox>
            )}
          </FlexRowBox>
        </PostContainer>
      </Box>
    );
  }
}

export default PostPage;
