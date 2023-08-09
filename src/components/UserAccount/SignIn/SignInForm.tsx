import { useReducer } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {
  SignInFormData,
  SignInFormState,
} from "../../../tsInterfaces&types/UserAccount";
import { signInFormReducer } from "../../../utilitesFn/UserAccount";

const signInFormInitialState: SignInFormState = {
  emailError: "",
  passwordError: "",
  showPassword: false,
};

const SignInForm = () => {
  // reducer hook to manage error & showPasswordStage
  const [signInFormState, signInFormDispatch] = useReducer(
    signInFormReducer,
    signInFormInitialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
    signInFormDispatch({
      actionType: { target: "EMAIL_ERROR", value: "some error" },
    });
  };
  console.log(new Date().getTime());
  console.log(signInFormState);
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          className={`input-field ${errors?.email ? "border-red-500" : ""}`}
          id="email"
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
          required
        />
      </div>

      {/* password input field */}
      <div className="input-box">
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          className={`input-field ${errors?.password ? "border-red-500" : ""}`}
          id="password"
          type={signInFormState.showPassword ? "text" : "password"}
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Enter your password"
          required
        />
        <label
          onClick={() =>
            signInFormDispatch({
              actionType: {
                target: "SHOW_PASSWORD",
                value: !signInFormState.showPassword,
              },
            })
          }
          className="show-password-icon"
          htmlFor=""
        >
          {signInFormState.showPassword ? <FaEye /> : <FaEyeSlash />}
        </label>
      </div>

      <label className="text-sm block -mt-1 mb-3 text-blue-500">
        Forgot password?
      </label>
      <button
        className="input-btn bg-orange-500 hover:bg-orange-600 duration-200"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
