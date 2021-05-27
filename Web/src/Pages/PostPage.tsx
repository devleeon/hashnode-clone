import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  styled,
} from "@material-ui/core";
import { NightsStayOutlined, Search } from "@material-ui/icons";
import React, { ReactElement } from "react";
import { useParams } from "react-router";
import { meVar } from "../Apollo/localState";
import Markdown from "../Components/Markdown";
import { useGetPostQuery } from "../generated/graphql";
import { BoldText, FlexColumnBox, FlexRowBox } from "../styles/Styles";

const useStyles = makeStyles({
  marginRight: {
    "&:not(:last-child)": {
      marginRight: "10px",
    },
  },
});
const IconButton = styled(Button)({
  minWidth: 0,
  borderRadius: "50%",
});

type Params = {
  postId: string;
};
interface Props {}

function PostPage({}: Props): ReactElement {
  const classes = useStyles();
  const { postId } = useParams<Params>();
  const me = meVar();
  const { data } = useGetPostQuery({
    variables: {
      postId,
    },
  });
  if (!data) {
    return <></>;
  } else {
    return (
      <>
        <Container maxWidth="xl" fixed>
          <FlexRowBox
            alignItems="center"
            justifyContent="space-between"
            paddingTop="32px"
          >
            <BoldText fontSize="24px" textColor="black">
              {data.post?.author.blog?.name}
            </BoldText>
            <FlexRowBox>
              <IconButton className={classes.marginRight} variant="text">
                <Search />
              </IconButton>
              <IconButton className={classes.marginRight} variant="text">
                <NightsStayOutlined />
              </IconButton>
              <Button className={classes.marginRight} variant="outlined">
                follow
              </Button>
              <Avatar src={me?.avatar} />
            </FlexRowBox>
          </FlexRowBox>
        </Container>
        <Divider />
        <Container maxWidth="md" fixed>
          <FlexRowBox>
            <FlexColumnBox maxWidth="80%">
              <img src={`${data.post?.photo}`} alt={data.post?.title} />
              <Box paddingY="20px">
                <BoldText fontSize="40px" textColor="black">
                  {data.post?.title}
                </BoldText>
              </Box>
              <Divider />
              <FlexRowBox>
                <Avatar src={`${data.post?.authorAvatar}`} sizes="small" />
                <FlexColumnBox>
                  <BoldText fontSize="24px" textColor="black">
                    {data.post?.authorname}
                  </BoldText>
                </FlexColumnBox>
              </FlexRowBox>
              <Divider />
              <Markdown>{`${data.post?.text}`}</Markdown>
            </FlexColumnBox>
            <FlexColumnBox position="sticky">
              <Button>button</Button>
              <Button>button</Button>
              <Button>button</Button>
            </FlexColumnBox>
          </FlexRowBox>
        </Container>
      </>
    );
  }
}

export default PostPage;
