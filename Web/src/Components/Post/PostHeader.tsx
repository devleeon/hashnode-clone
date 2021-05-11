import { Box, Avatar } from "@material-ui/core";
import { Maybe } from "graphql/jsutils/Maybe";
import React from "react";
import { Scalars } from "../../generated/graphql";
import { LightText } from "../../styles/Styles";
import { getDate } from "../../Utilities/getDate";

interface HeaderProps {
  createdAt: Scalars["DateTime"];
  authorname?: Maybe<Scalars["String"]>;
  authorAvatar?: Maybe<Scalars["String"]>;
}

function PostHeader({ createdAt, authorAvatar, authorname }: HeaderProps) {
  const date = getDate(createdAt);

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Avatar
        style={{ marginRight: "8px" }}
        {...(authorAvatar && { src: authorAvatar })}
      />
      <Box>
        <LightText fontSize="14px" textColor="black">
          {authorname}
        </LightText>
        <LightText fontSize="14px">{date}</LightText>
      </Box>
    </Box>
  );
}

export default PostHeader;
