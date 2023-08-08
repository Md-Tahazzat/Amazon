import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SignInFormData } from "../../../tsInterfaces&types/UserAccount";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInFormData>();
  const onSubmit: SubmitHandler<SignInFormData> = (data) => console.log(data);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box">
        <label htmlFor="email">Email:</label>
        <input
          className="input"
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* password input field */}
      <div className="input-box">
        <label htmlFor="password">Password :</label>
        <input
          className="input"
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <label className="text-sm block -mt-1 mb-3 text-blue-500">
        Forgot password?
      </label>

      {/* checkbox input for tearms & conditions  */}
      <div className="flex items-center gap-2 mb-2 mt-3">
        <input type="checkbox" id="checkbox-input-1" name="checkbox" />{" "}
        <label htmlFor="checkbox-input-1">
          I accept the{" "}
          <Link to="/terms-and-conditions" className="text-blue-500">
            terms & conditions
          </Link>
        </label>
      </div>

      <button className="input-btn" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default SignUpForm;
