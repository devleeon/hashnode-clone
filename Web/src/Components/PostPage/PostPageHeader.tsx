import classes from "*.module.css";
import {
  Container,
  Button,
  Avatar,
  makeStyles,
  styled,
} from "@material-ui/core";
import {
  Search,
  NightsStayOutlined,
  MonetizationOnOutlined,
  RssFeedOutlined,
} from "@material-ui/icons";
import React, { ReactElement } from "react";
import { meVar } from "../../Apollo/localState";
import { RegularPostFragment } from "../../generated/graphql";
import { FlexRowBox, BoldText } from "../../styles/Styles";
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

const TapButton = styled(Button)({
  borderBottomRightRadius: "0px",
  borderBottomLeftRadius: "0px",
  minWidth: 0,
  padding: "8px",
});

interface Props {
  authorname: string;
  blogname?: string;
}

function PostPageHeader({ authorname, blogname }: Props): ReactElement {
  const classes = useStyles();
  const me = meVar();

  return (
    <Container maxWidth="xl" fixed>
      <FlexRowBox
        alignItems="center"
        justifyContent="space-between"
        paddingY="32px"
      >
        <BoldText fontSize="24px" textColor="black">
          {blogname ? blogname : authorname}
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
      <FlexRowBox justifyContent="space-between">
        <FlexRowBox>
          <TapButton>Home</TapButton>
          <TapButton>Badges</TapButton>
        </FlexRowBox>
        <FlexRowBox>
          <TapButton>
            <MonetizationOnOutlined />
          </TapButton>
          <TapButton>
            <RssFeedOutlined />
          </TapButton>
        </FlexRowBox>
      </FlexRowBox>
    </Container>
  );
}

export default PostPageHeader;
