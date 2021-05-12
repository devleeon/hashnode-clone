import React, { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { meVar, setToken } from "../Apollo/localState";
import { useLoginMutation, useSignUpMutation } from "../generated/graphql";

type FormInputs = {
  email: string;
  password: string;
  username: string;
};
type State = {
  signup: boolean;
};
function Auth(): ReactElement {
  const { state } = useLocation<State>();
  const [loginMutation] = useLoginMutation();
  const [signUp] = useSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onLogin: SubmitHandler<FormInputs> = async (data) => {
    await loginMutation({
      variables: { ...data },
      update: (_, { data }) => {
        if (data?.login.token) {
          // set token
          const token = data?.login.token;
          setToken(token);
        }
        if (data?.login.user) {
          meVar(data.login.user);
        }
        if (data?.login.errors) {
          // throw an error
          // setError(data?.login.errors?.field, {
          //   message: data?.login.errors?.message,
          // });
        }
      },
    });
  };
  const onSignUp: SubmitHandler<FormInputs> = async (data) => {
    await signUp({
      variables: { ...data },
      update: (_, { data }) => {
        if (data?.signUp.token) {
          const token = data?.signUp.token;
          setToken(token);
        }
        if (data?.signUp.user) {
          meVar(data.signUp.user);
        }
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(state.signup ? onSignUp : onLogin)}>
        {state.signup && (
          <input {...register("username", { required: true })} />
        )}
        {errors.username && <p>username is required</p>}
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
