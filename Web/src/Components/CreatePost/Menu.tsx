import { Box, Button, styled } from "@material-ui/core";
import {
  CameraAltOutlined,
  Code,
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  InsertLink,
} from "@material-ui/icons";
import React, {
  BaseSyntheticEvent,
  ChangeEvent,
  ReactElement,
  TextareaHTMLAttributes,
  useRef,
} from "react";
import { FlexRowBox } from "../../styles/Styles";
import { setCursor } from "../../Utilities/setCursor";
import { useUploadPhotoMutation } from "../../generated/graphql";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "4px",
  margin: "20px 0",
  backgroundColor: theme.palette.secondary.light,
  padding: "10px",
  zIndex: 9,
  top: 0,
  position: "sticky",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
const TextButton = styled(Button)({
  minWidth: 0,
  textTransform: "capitalize",
});
const IconButton = styled(Button)({
  minWidth: 0,
  padding: "4px",
});
interface Props {
  textState: "write" | "preview" | "guide";
  setTextState: Function;
}

function Menu({ textState, setTextState }: Props): ReactElement {
  const fileInput = useRef(null);
  // todo
  // how to upload photo and store it
  // as a state?
  // or as an array?
  const [uploadPhotoMutation, { data }] = useUploadPhotoMutation();
  const uploadPhoto = (e: BaseSyntheticEvent) => {
    console.log(e.target.files[0]);
  };
  const onClickHandler = (e: BaseSyntheticEvent) => {
    setTextState(e.currentTarget.name);
  };
  const onClickIcon = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const txtarea = document.getElementById(
      "post_textarea"
    ) as HTMLInputElement;
    switch (e.currentTarget.name) {
      case "bold":
        setCursor({ txtarea, before: "**", after: "**", startPos: 2 });
        break;
      case "italic":
        setCursor({ txtarea, before: "*", after: "*", startPos: 1 });
        break;
      case "quote":
        setCursor({ txtarea, before: "\n> \n", after: "", startPos: 3 });
        break;
      case "link":
        setCursor({
          txtarea,
          before: "[I'm an inline link](put-link-here)",
          after: "",
          startPos:
            "[I'm an inline link](put-link-here)".length -
            "put-link-here)".length,
          endPos: "[I'm an inline link](put-link-here)".length - 1,
        });
        break;
      case "code":
        setCursor({ txtarea, before: "\n```", after: "\n```", startPos: 4 });
        break;
      case "ul":
        setCursor({ txtarea, before: "\n- \n", after: "", startPos: 3 });
        break;
      case "ol":
        setCursor({ txtarea, before: "\n1. \n", after: "", startPos: 3 });
        break;
      case "photo":
        setCursor({
          txtarea,
          before: "\n![Alt text of image](put-link-to-image-here)\n",
          after: "",
          startPos:
            "\n![Alt text of image](put-link-to-image-here)\n".length -
            "put-link-to-image-here)\n".length,
          endPos: "\n![Alt text of image](put-link-to-image-here)\n".length - 2,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <FlexRowBox>
        <TextButton
          onClick={onClickHandler}
          name="write"
          color={textState === "write" ? "primary" : "default"}
        >
          write
        </TextButton>
        <TextButton
          onClick={onClickHandler}
          name="preview"
          color={textState === "preview" ? "primary" : "default"}
        >
          preview
        </TextButton>
        <TextButton
          onClick={onClickHandler}
          name="guide"
          color={textState === "guide" ? "primary" : "default"}
        >
          Guide
        </TextButton>
      </FlexRowBox>
      {textState === "write" && (
        <FlexRowBox>
          <IconButton
            name={"bold"}
            onClick={onClickIcon}
            children={<FormatBold />}
          />
          <IconButton
            name={"italic"}
            onClick={onClickIcon}
            children={<FormatItalic />}
          />
          <IconButton
            name={"quote"}
            onClick={onClickIcon}
            children={<FormatQuote />}
          />
          <IconButton
            name={"link"}
            onClick={onClickIcon}
            children={<InsertLink />}
          />
          <IconButton name={"code"} onClick={onClickIcon} children={<Code />} />
          <IconButton
            name={"ul"}
            onClick={onClickIcon}
            children={<FormatListBulleted />}
          />
          <IconButton
            name={"ol"}
            onClick={onClickIcon}
            children={<FormatListNumbered />}
          />
          <IconButton name={"photo"} onClick={onClickIcon}>
            <CameraAltOutlined />
            <input
              onChange={uploadPhoto}
              type="file"
              accept="image/*"
              multiple={false}
            />
          </IconButton>
        </FlexRowBox>
      )}
    </Container>
  );
}

export default Menu;
