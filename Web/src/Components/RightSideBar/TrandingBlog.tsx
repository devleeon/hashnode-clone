import { Avatar, Box, Button, Divider } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { ReactElement } from "react";
import { SortOrder, useBlogsQuery } from "../../generated/graphql";
import {
  BoldText,
  FlexColumnBox,
  FlexRowBox,
  LightText,
  WhiteBox,
} from "../../styles/Styles";

interface Props {}

function TrandingBlog({}: Props): ReactElement {
  const { data } = useBlogsQuery({
    variables: { take: 4, orderBy: { weeklyScore: SortOrder.Desc } },
  });
  return (
    <WhiteBox marginBottom="8px">
      <FlexRowBox
        alignItems="center"
        justifyContent="space-between"
        padding="10px 18px"
      >
        <BoldText fontSize="18px">Tranding Blogs</BoldText>
        <Button color="primary" style={{ textTransform: "none" }}>
          Explore
        </Button>
      </FlexRowBox>
      <Divider orientation="horizontal" />
      <FlexColumnBox paddingX="12px">
        {data?.blogs.map((blog, i) => {
          return (
            <FlexRowBox alignItems="flex-start" paddingY="12px">
              <Box marginRight="12px">
                <BoldText textColor="grey">{`0${i + 1}`}</BoldText>
              </Box>
              <Avatar src={blog.user.avatar} style={{ marginRight: "12px" }} />
              <Box
                display="flex"
                flexDirection="column"
                flex="1 1 0%"
                maxHeight="70px"
                overflow="wrap"
              >
                <BoldText fontSize="16px" textColor="black">
                  {blog.name}
                </BoldText>
                <LightText>{blog.address}</LightText>
              </Box>
              <Button
                variant="outlined"
                style={{ minWidth: 0, padding: "4px" }}
              >
                <Add />
              </Button>
            </FlexRowBox>
          );
        })}
      </FlexColumnBox>
    </WhiteBox>
  );
}

export default TrandingBlog;
