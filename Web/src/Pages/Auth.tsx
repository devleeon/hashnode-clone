import axios from "axios";
import React, { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router";
import { useLoggedIn } from "../Components/App";

interface Props {}

type FormInputs = {
  email: string;
  password: string;
};
type ResponseReturn = {
  error: boolean;
  message: string;
};
function Auth({}: Props): ReactElement {
  const { setLoggedIn } = useLoggedIn();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onLogin: SubmitHandler<FormInputs> = async (data) => {
    const response = await axios.post("login", {
      ...data,
    });
    if (!response.data.error) {
      const token = response.data.message;
      localStorage.setItem("token", token);
      setLoggedIn(true);
      history.push("/");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onLogin)}>
        <input {...register("email", { required: true })} />
        {errors.email && <p>email is required</p>}
        <input {...register("password", { required: true })} />
        {errors.password && <p>password is required</p>}
        <button>submit</button>
      </form>
    </div>
  );
}

export default Auth;
