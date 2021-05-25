import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@material-ui/core";
import { Inbox, Mail } from "@material-ui/icons";
import React, { BaseSyntheticEvent, ReactElement } from "react";
import { useHistory } from "react-router";
import { Maybe, useCreatePostMutation } from "../../generated/graphql";
import { BoldText, FlexRowBox } from "../../styles/Styles";

const TextButton = styled(Button)({
  textTransform: "capitalize",
  "&:not(:last-child)": {
    marginRight: "10px",
  },
});

interface Props {
  title: string;
  photo: string;
  text: string;
  userId: string;
}

function CreatePostHeader({ title, photo, text, userId }: Props): ReactElement {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const history = useHistory();
  const [createPostMutation] = useCreatePostMutation();
  const createPost = async (e: BaseSyntheticEvent) => {
    const option = e.currentTarget.name;
    let postId;
    if (option === "draft") {
      const { data } = await createPostMutation({
        variables: {
          title,
          photo,
          content: "blogname",
          userId,
          text,
          published: false,
        },
      });
      postId = data?.createPost.id;
    } else {
      const { data } = await createPostMutation({
        variables: {
          title,
          photo,
          content: "blogname",
          userId,
          text,
          published: true,
        },
      });
      postId = data?.createPost.id;
    }
    console.log(postId);
    history.replace(`/p/${postId}`);
  };
  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <FlexRowBox
      paddingTop="12px"
      alignItems="center"
      justifyContent="space-between"
    >
      <BoldText fontSize="24px">cashnode</BoldText>
      <FlexRowBox>
        <TextButton name="draft" onClick={createPost}>
          save draft
        </TextButton>
        <TextButton>setting</TextButton>
        <TextButton
          name="publish"
          variant="outlined"
          color="primary"
          onClick={createPost}
        >
          publish
        </TextButton>
      </FlexRowBox>
    </FlexRowBox>
  );
}

export default CreatePostHeader;
