import React, { ReactElement } from "react";
import LayOut from "../Components/LayOut";
import { WhiteBox } from "../styles/Styles";

interface Props {}

function Profile({}: Props): ReactElement {
  // const { data} = useProfil
  return (
    <LayOut column={1}>
      <WhiteBox>profile</WhiteBox>
    </LayOut>
  );
}

export default Profile;
