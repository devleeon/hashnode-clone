import React, { ReactElement } from "react";
import { useParams } from "react-router";
import LayOut from "../Components/LayOut";
import { WhiteBox } from "../styles/Styles";

interface Props {}
type PramTypes = {
  tagname: string;
};
function TagHome({}: Props): ReactElement {
  const { tagname } = useParams<PramTypes>();
  return (
    <LayOut sticky={true} column={2}>
      <WhiteBox marginTop="8px" padding="32px 20px">
        {" "}
        {`this is taghome for ${tagname}`}
      </WhiteBox>
    </LayOut>
  );
}

export default TagHome;
