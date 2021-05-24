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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import Menu from "../Components/CreatePost/Menu";
interface Props {}

type TextState = "write" | "preview" | "guide";

function CreatePost({}: Props): ReactElement {
  const [textState, setTextState] = useState<TextState>("write");

  const { register, watch, setValue, getValues } = useForm();
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
          <Menu textState={textState} setTextState={setTextState} />
          {textState === "write" && (
            <TextareaAutosize
              {...register("text")}
              placeholder="Tell your story..."
              rowsMin={40}
              className="post_text post_textarea"
              id="post_textarea"
            />
          )}
          {textState === "preview" && (
            <ReactMarkdown
              className="line-break"
              remarkPlugins={[gfm]}
              components={{
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline ? (
                    <SyntaxHighlighter
                      style={materialOceanic}
                      PreTag="div"
                      children={String(children).replace(/\n$/, "")}
                      {...props}
                      {...(match
                        ? { language: match[1] }
                        : { className: className })}
                    />
                  ) : (
                    <code
                      className={className}
                      {...props}
                      children={String(children).replace(/\n$/, "")}
                    />
                  );
                },
              }}
            >
              {watch("text")}
            </ReactMarkdown>
          )}
        </FlexColumnBox>
      </Container>
    </LayOutContainer>
  );
}

export default CreatePost;
