import React, { ReactElement } from "react";
import { usePostsQuery } from "../../generated/graphql";
import { BoldText, LightText, WhiteBox } from "../../styles/Styles";
import { Skeleton } from "@material-ui/lab";
import { Avatar, Box, styled, Typography } from "@material-ui/core";
import { getDate } from "../../Utilities/getDate";
import SkeletonContent from "./SkeletonContent";

const Contents = styled(Box)(({ theme }) => ({
  width: "100%",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));

interface Props {}

function Posts({}: Props): ReactElement {
  const { data, loading } = usePostsQuery();
  console.log(data);

  return (
    <WhiteBox>
      {data?.posts.map((post, i) => {
        const date = getDate(post.createdAt);
        return (
          <Contents padding="16px 20px" key={i}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Avatar style={{ marginRight: "8px" }} />
              <BoldText
                variant="h4"
                textColor="black"
                fontSize="20px"
                style={{ textTransform: "initial" }}
              >
                {post.title}
              </BoldText>
            </Box>

            <LightText>{post.content}</LightText>
            <LightText>{date} - ipsum lorem</LightText>
            <Box display="flex" flexDirection="row" alignItems="center">
              <BoldText variant="caption" fontSize="16px">
                {post.authorname}
              </BoldText>
            </Box>
          </Contents>
        );
      })}
      {loading && <SkeletonContent />}
    </WhiteBox>
  );
}

export default Posts;
