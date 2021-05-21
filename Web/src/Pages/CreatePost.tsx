import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  TextareaAutosize,
} from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { LayOutContainer } from "../Components/LayOut";
import { BoldText, FlexColumnBox, FlexRowBox } from "../styles/Styles";
import ReactMarkdown from "react-markdown";
import { useForm } from "react-hook-form";
import gfm from "remark-gfm";

interface Props {}

type TextState = "write" | "preview" | "guide";

function CreatePost({}: Props): ReactElement {
  const [textState, setTextState] = useState<TextState>("write");

  const { register, watch } = useForm();

  return (
    <LayOutContainer maxWidth="xl" fixed>
      <FlexRowBox
        paddingTop="12px"
        alignItems="center"
        justifyContent="space-between"
      >
        <BoldText fontSize="24px">cashnode</BoldText>
        <FlexRowBox>
          <Button>save draft</Button>
          <Button>setting</Button>
          <Button variant="outlined" color="primary">
            publish
          </Button>
        </FlexRowBox>
      </FlexRowBox>
      <Divider orientation="horizontal" style={{ margin: "12px 0" }} />
      <Container maxWidth="md" fixed>
        <FlexColumnBox>
          <FlexRowBox paddingY="10px">
            <Button>add cover photo</Button>
            <Button>add subtitle</Button>
          </FlexRowBox>
          <input placeholder="Title..." type="text" className="post_title" />
          <Box
            position="sticky"
            top={0}
            padding="10px"
            zIndex={9}
            bgcolor="secondary.light"
            marginY="20px"
            border="1px solid lightGrey"
            borderRadius="4px"
          >
            items
          </Box>
          <TextareaAutosize
            {...register("text")}
            placeholder="Tell your story..."
            rowsMin={40}
            className="post_text post_textarea"
          />
          <ReactMarkdown className="line-break" remarkPlugins={[gfm]}>
            {watch("text")}
          </ReactMarkdown>
        </FlexColumnBox>
      </Container>
    </LayOutContainer>
  );
}

export default CreatePost;
