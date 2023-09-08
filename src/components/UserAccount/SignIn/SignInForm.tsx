import { signInWithEmailAndPassword } from "firebase/auth";
import { useReducer } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.config";
import {
  SignInFormData,
  SignInFormState,
} from "../../../tsInterfaces&types/UserAccount";
import { signInFormReducer } from "../../../utilitesFn/UserAccount";
import ForgotPasswordModal from "./ForgotPasswordModal";

const signInFormInitialState: SignInFormState = {
  firebaseError: "",
  showPassword: false,
  loading: false,
};

const SignInForm = ({ state }: { state: string }) => {
  const navigate = useNavigate();

  // reducer hook to manage error & showPasswordStage
  const [{ showPassword, loading, firebaseError }, signInFormDispatch] =
    useReducer(signInFormReducer, signInFormInitialState);

  // signUp form data info using React hook forms.
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<SignInFormData>();

  // onSubmit form handler.
  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    signInFormDispatch({ loading: true });

    // firebase signIn functionality
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((result) => {
        // extract the previous location pathname
        if (result.user) {
          toast.success("Sign in successfull");
          signInFormDispatch({ loading: false });
          reset();

          navigate(state, { replace: true });
        }
      })
      .catch((err) => {
        const errorMessage = err.message?.split("/")[1].slice(0, -2);
        console.log(errorMessage);
        if (errorMessage === "wrong-password") {
          setError("password", {
            type: "manual",
            message: "Wrong password. Please try again",
          });
          signInFormDispatch({
            loading: false,
          });
        } else if (errorMessage === "user-not-found") {
          setError("email", {
            type: "manual",
            message: "Email not found. Please provide valid email",
          });
          signInFormDispatch({
            loading: false,
          });
        } else if (errorMessage === "too-many-request") {
          setError("password", {
            type: "manual",
            message: "Too many attempts. Please try later",
          });
          signInFormDispatch({
            loading: false,
          });
        }
      });
  };
  return (
    <>
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
        {/* email error message */}
        {errors.email && (
          <p className="text-red-500 -mt-2">{errors.email.message}</p>
        )}

        {/* password input field */}
        <div className="input-box">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className={`input-field ${errors.password ? "border-red-500" : ""}`}
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Enter your password"
            required
          />

          {/* password visibility icon and functionality */}
          <label
            onClick={() =>
              signInFormDispatch({
                showPassword: !showPassword,
              })
            }
            className="show-password-icon"
            htmlFor=""
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </label>
        </div>

        {/* password error message */}
        {errors.password || firebaseError ? (
          <p className="text-red-500 -mt-2 mb-3">
            {errors.password?.message || firebaseError}
          </p>
        ) : null}

        {/*forgot password modal handler label */}
        {errors?.password && (
          <label
            htmlFor="forgot_password_modal"
            className="text-sm block -mt-1 mb-3 text-blue-500"
          >
            Forgot password?
          </label>
        )}

        {/* submit button */}
        <button
          disabled={loading}
          className={`input-btn ${
            loading ? "cursor-not-allowed" : "hover:bg-orange-600 duration-200"
          }`}
          type="submit"
        >
          {loading ? (
            <ImSpinner9 className="animate-spin block mx-auto text-2xl my-0.5" />
          ) : (
            "Sign Up"
          )}
        </button>
      </form>

      {/* forgot password modal */}
      <ForgotPasswordModal />
    </>
  );
};

export default SignInForm;
