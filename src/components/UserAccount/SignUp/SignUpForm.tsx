import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SignUpFormData } from "../../../tsInterfaces&types/UserAccount";

const SignUpForm = () => {
  const [showPassord, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFormData>();
  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message:
          "Confirm password didn't match. Please make sure you enter the same password",
      });
    }
  };
  console.log(errors);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box">
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          className={`input-field ${errors?.name ? "border-red-500" : ""}`}
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
          type={showPassord ? "text" : "password"}
          {...register("password", { required: true, minLength: 6 })}
          placeholder="At least 6 character"
          required
        />
        <label
          onClick={() => setShowPassword(!showPassord)}
          className="show-password-icon"
          htmlFor=""
        >
          {showPassord ? <FaEye /> : <FaEyeSlash />}
        </label>
      </div>

      {/* confirm password */}
      <div className="input-box">
        <label className="input-label" htmlFor="confirmPassword">
          Re-enter password
        </label>
        <input
          className={`input-field ${
            errors?.confirmPassword ? "border-red-500" : ""
          }`}
          id="confirmPassword"
          type={showPassord ? "text" : "password"}
          {...register("confirmPassword", { required: true, minLength: 6 })}
          placeholder="Re-enter your password"
          required
        />
        <label
          onClick={() => setShowPassword(!showPassord)}
          className="show-password-icon"
          htmlFor=""
        >
          {showPassord ? <FaEye /> : <FaEyeSlash />}
        </label>
      </div>

      {/* error message */}
      {errors?.confirmPassword || errors?.password ? (
        <p className="text-red-500 -mt-2 block">
          {errors.confirmPassword?.message || errors.password?.message}
        </p>
      ) : null}

      {/* checkbox input for tearms & conditions  */}
      <div className="flex items-center gap-2 mb-2 mt-3">
        <input
          onChange={() => setAgree(!agree)}
          type="checkbox"
          id="checkbox-input-1"
          name="checkbox"
          checked={agree}
        />{" "}
        <label htmlFor="checkbox-input-1">
          I accept the{" "}
          <Link to="/terms-and-conditions" className="text-blue-500">
            terms & conditions
          </Link>
        </label>
      </div>

      <input
        disabled={agree}
        className={`input-btn ${
          !agree
            ? "cursor-not-allowed bg-slate-300 focus:outline-none"
            : "bg-orange-500 hover:bg-orange-600 duration-200"
        }`}
        type={agree ? "submit" : ""}
        value={agree ? "Sign up" : ""}
      />
    </form>
  );
};

export default SignUpForm;
