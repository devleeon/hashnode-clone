import {
  Box,
  Button,
  Container,
  Divider,
  styled,
  TextareaAutosize,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { BaseSyntheticEvent, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { meVar } from "../Apollo/localState";
import CreatePostHeader from "../Components/CreatePost/CreatePostHeader";
import Menu from "../Components/CreatePost/Menu";
import { LayOutContainer } from "../Components/LayOut";
import Markdown from "../Components/Markdown";
import { useUploadPhotoMutation } from "../generated/graphql";
import {
  FlexColumnBox,
  FlexRowBox,
  UploadButton,
  UploadLabel,
} from "../styles/Styles";

const TextButton = styled(Button)({
  textTransform: "capitalize",
  "&:not(:last-child)": {
    marginRight: "4px",
  },
});
const Subtitle = styled("input")({
  border: 0,
  backgroundColor: "transparent",
  fontSize: "24px",
  fontWeight: 500,
  display: "flex",
});
const SubtitleClose = styled(Button)({
  minWidth: 0,
  padding: "4px",
  display: "flex",
});
interface Props {}

type TextState = "write" | "preview" | "guide";

function CreatePost({}: Props): ReactElement {
  const [textState, setTextState] = useState<TextState>("write");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [subtitle, setSubtitle] = useState(false);
  const { register, watch } = useForm();
  const [uploadPhotoMutation] = useUploadPhotoMutation();

  const uploadPhoto = async (e: BaseSyntheticEvent) => {
    const { data } = await uploadPhotoMutation({
      variables: { upload: e.target.files[0] },
    });
    if (data?.upload) {
      setCoverPhoto(data.upload);
    }
  };
  const toggleSubtitle = () => {
    setSubtitle(!subtitle);
  };
  return (
    <LayOutContainer maxWidth="xl" fixed>
      <CreatePostHeader
        title={
          subtitle ? `${watch("title")}|${watch("subtitle")}` : watch("title")
        }
        photo={coverPhoto}
        text={watch("text")}
        userId={meVar()?.id as string}
      />
      <Divider orientation="horizontal" style={{ margin: "12px 0" }} />
      <Container maxWidth="md" fixed>
        <FlexColumnBox>
          <FlexRowBox paddingY="10px">
            {!coverPhoto && (
              <UploadButton className="filebox">
                <UploadLabel htmlFor="input_file">Add Cover Photo</UploadLabel>
                <input type="file" id="input_file" onChange={uploadPhoto} />
              </UploadButton>
            )}
            {!subtitle && (
              <TextButton onClick={toggleSubtitle}>add subtitle</TextButton>
            )}
          </FlexRowBox>
          {coverPhoto.length > 1 && (
            <Box
              position="relative"
              style={{
                backgroundImage: `url("${coverPhoto}")`,
                backgroundSize: "cover",
              }}
              borderRadius=".5rem"
              display="block"
              width="100%"
              paddingTop="52.5%"
            />
          )}
          {/* title */}
          <input
            {...register("title")}
            placeholder="Title..."
            type="text"
            className="post_title"
          />
          {subtitle && (
            <FlexRowBox
              paddingX="30px"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Subtitle
                {...register("subtitle")}
                placeholder="Subtitle..."
                type="text"
              />
              <SubtitleClose onClick={toggleSubtitle}>
                <Close />
              </SubtitleClose>
            </FlexRowBox>
          )}
          {/* sticky menu */}
          <Menu textState={textState} setTextState={setTextState} />

          {/* text area */}
          {textState === "write" && (
            <TextareaAutosize
              {...register("text")}
              placeholder="Tell your story..."
              rowsMin={40}
              className="post_text post_textarea"
              id="post_textarea"
            />
          )}
          {/* markdown */}
          {textState === "preview" && <Markdown>{watch("text")}</Markdown>}
        </FlexColumnBox>
      </Container>
    </LayOutContainer>
  );
}

export default CreatePost;
