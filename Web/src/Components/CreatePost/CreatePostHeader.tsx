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
import { Close, Inbox, Mail } from "@material-ui/icons";
import React, { BaseSyntheticEvent, ReactElement, useState } from "react";
import { useHistory } from "react-router";
import { Maybe, useCreatePostMutation } from "../../generated/graphql";
import { BoldText, FlexRowBox, WhiteBox } from "../../styles/Styles";

const TextButton = styled(Button)({
  textTransform: "capitalize",
  "&:not(:last-child)": {
    marginRight: "10px",
  },
});
const DrawerBox = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    padding: "12px 24px 40px",
    maxWidth: "100%",
    backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "430px",
    },
  },
}));
const TagSearch = styled("input")({
  border: 0,
  fontSize: "16px",
  padding: "8px 0",
  width: "100%",
});
interface Props {
  title: string;
  photo: string;
  text: string;
  userId: string;
}

function CreatePostHeader({ title, photo, text, userId }: Props): ReactElement {
  const [drawer, setDrawer] = useState(false);
  const [content, setContent] = useState("");

  const history = useHistory();
  const [createPostMutation] = useCreatePostMutation();
  const createPost = async (e: BaseSyntheticEvent) => {
    const option = e.currentTarget.name;
    let postId;
    const variables = { title, photo, content, userId, text };
    if (option === "draft") {
      const { data } = await createPostMutation({
        variables: {
          ...variables,
          published: false,
        },
      });
      postId = data?.createPost.id;
    } else {
      const { data } = await createPostMutation({
        variables: {
          ...variables,
          published: true,
        },
      });
      postId = data?.createPost.id;
    }
    console.log(postId);
    history.replace(`/p/${postId}`);
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawer(open);
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
          onClick={toggleDrawer(true)}
        >
          publish
        </TextButton>

        {/* drawer menu */}
        <DrawerBox anchor={"right"} open={drawer} onClose={toggleDrawer(false)}>
          <Box onKeyDown={toggleDrawer(false)}>
            {/* buttons */}
            <FlexRowBox
              alignItems="center"
              justifyContent="space-between"
              paddingBottom="12px"
            >
              <TextButton onClick={toggleDrawer(false)}>
                <Close />
                close
              </TextButton>
              <TextButton
                name="publish"
                variant="outlined"
                color="primary"
                onClick={createPost}
              >
                publish
              </TextButton>
            </FlexRowBox>

            <Divider />
            <WhiteBox marginTop="24px" padding="12px">
              <BoldText fontSize="14px">Select your blog</BoldText>
              <TagSearch type="text" placeholder="Start typing to search..." />
            </WhiteBox>
            <WhiteBox marginTop="24px" padding="12px">
              <BoldText fontSize="14px">Select tags</BoldText>
              <TagSearch type="text" placeholder="Start typing to search..." />
            </WhiteBox>
          </Box>
        </DrawerBox>
      </FlexRowBox>
    </FlexRowBox>
  );
}

export default CreatePostHeader;
