import { Link, useLocation } from "react-router-dom";
import LogoBlack from "../../components/UserAccount/LogoBlack";
import SignUpForm from "../../components/UserAccount/SignUp/SignUpForm";
import UserAccountFooter from "../../components/UserAccount/UserAccountFooter";

const SignUp = () => {
  // get the redirect location
  const location = useLocation();
  const state = location.state || "/";
  return (
    <div className="min-h-screen flex flex-col px-4 md:px-0 items-center justify-start w-full bg-white">
      <div className="max-w-[400px] w-full">
        {/* amazon logo and Home link */}
        <LogoBlack />

        {/* form section */}
        <section className="border  p-3 md:p-4 rounded-lg border-slate-300">
          <h1 className="text-2xl text-center mb-2 md:mb-3 md:text-3xl font-semibold">
            Sign up
          </h1>
          <SignUpForm state={state} />
        </section>

        <div className="divider my-5">Already have an account?</div>
        <Link
          state={state}
          to="/sign-in"
          className="text-center block hover:bg-blue-50 rounded-md duration-200 py-2 border"
        >
          Sign in your acount
        </Link>

        {/* user Account footer */}
        <UserAccountFooter />
      </div>
    </div>
  );
};

export default SignUp;
