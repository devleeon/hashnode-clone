import { ButtonProps } from "@material-ui/core";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { BlueButton } from "../../styles/Styles";

function ButtonAuth({ children }: ButtonProps): ReactElement {
  const history = useHistory();
  const moveToAuth = () => {
    history.push("/auth", { signup: false });
  };
  return <BlueButton onClick={moveToAuth}>{children}</BlueButton>;
}

export default ButtonAuth;
