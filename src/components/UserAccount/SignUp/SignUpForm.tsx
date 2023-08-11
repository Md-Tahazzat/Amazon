import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useReducer } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.config";
import {
  SignUpFormData,
  SignUpFormState,
} from "../../../tsInterfaces&types/UserAccount";
import {
  signUpFormReducer,
  uploadImageInImgbb,
} from "../../../utilitesFn/UserAccount";

// initial value of signUpFormReducer
const signUpFormInitialValue: SignUpFormState = {
  agreeToTermsAndConditions: false,
  loading: false,
  firebaseError: "",
  showPassword: false,
};

const SignUpForm: React.FC<{ state: string }> = ({ state }) => {
  const navigate = useNavigate();
  // useReducer hook for SignUpForm
  const [
    { agreeToTermsAndConditions, firebaseError, loading, showPassword },
    signUpFormDispatch,
  ] = useReducer(signUpFormReducer, signUpFormInitialValue);

  // signUp form data info using React hook forms.
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFormData>();

  // onsubmit handler for signUp form.
  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    // set the loading state true to show loading.
    signUpFormDispatch({
      loading: true,
    });

    // check the equality of password & confirm password.
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message:
          "Confirm password didn't match. Please make sure you enter the same password",
      });
      return;
    }

    // create user in firebase.
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        if (userCredential?.user) {
          // upload image through imgbb api
          uploadImageInImgbb(data.image[0]).then((result) => {
            if (result !== "error" && auth.currentUser !== null) {
              // update profile in firebase.
              updateProfile(auth.currentUser, {
                displayName: data.name,
                photoURL: result,
              })
                .then((res) => {
                  console.log(res);
                  signUpFormDispatch({
                    loading: false,
                  });
                  navigate(state, { replace: true });
                })
                .catch((err) => {
                  console.log(err);
                  signUpFormDispatch({
                    loading: false,
                    firebaseError: err.message,
                  });
                });
            }
          });
        }
      })
      .catch((err) => {
        // set loading and firbase error message.
        signUpFormDispatch({
          loading: false,
          firebaseError: err.message,
        });
      });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box">
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          className={`input-field ${
            errors.name ? "border-red-500" : "border-slate-400"
          }`}
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          placeholder="Enter your name"
          required
        />
      </div>

      {/* email input */}
      <div className="input-box">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          className={`input-field ${
            errors?.email ? "border-red-500" : "border-slate-400"
          }`}
          id="email"
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Image file input */}
      <div className="input-box">
        <label className="input-label" htmlFor="image">
          Image
        </label>
        <input
          className="mb-2"
          id="image"
          type="file"
          {...register("image", { required: true })}
          accept="image/*"
          required
        />
      </div>

      {/* password input field */}
      <div className="input-box">
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          className={`input-field ${
            errors?.password ? "border-red-500" : "border-slate-400"
          }`}
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password", { required: true, minLength: 6 })}
          placeholder="At least 6 character"
          required
        />
        <label
          onClick={() =>
            signUpFormDispatch({
              showPassword: !showPassword,
            })
          }
          className="show-password-icon"
          htmlFor=""
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </label>
      </div>

      {/* confirm password */}
      <div className="input-box">
        <label className="input-label" htmlFor="confirmPassword">
          Re-enter password
        </label>
        <input
          className={`input-field ${
            errors?.confirmPassword ? "border-red-500" : "border-slate-400"
          }`}
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword", { required: true, minLength: 6 })}
          placeholder="Re-enter your password"
          required
        />
        <label
          onClick={() =>
            signUpFormDispatch({
              showPassword: !showPassword,
            })
          }
          className="show-password-icon"
          htmlFor=""
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </label>
      </div>

      {/* error message */}
      {errors?.confirmPassword || errors?.password || firebaseError ? (
        <p className="text-red-500 -mt-2 block">
          {errors.confirmPassword?.message ||
            errors.password?.message ||
            firebaseError}
        </p>
      ) : null}

      {/* checkbox input for tearms & conditions  */}
      <div className="flex items-center gap-2 mb-2 mt-3">
        <input
          onChange={() =>
            signUpFormDispatch({
              agreeToTermsAndConditions: !agreeToTermsAndConditions,
            })
          }
          type="checkbox"
          id="checkbox-input-1"
          name="checkbox"
          checked={agreeToTermsAndConditions}
        />{" "}
        <label htmlFor="checkbox-input-1">
          I accept the{" "}
          <Link to="/terms-and-conditions" className="text-blue-500">
            terms & conditions
          </Link>
        </label>
      </div>

      <button
        title={
          !agreeToTermsAndConditions
            ? "please agree to the terms & conditions"
            : ""
        }
        disabled={!agreeToTermsAndConditions || loading}
        className={`input-btn ${
          loading || !agreeToTermsAndConditions
            ? "cursor-not-allowed"
            : "hover:bg-orange-600 duration-200"
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
  );
};

export default SignUpForm;
