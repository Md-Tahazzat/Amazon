import { Link } from "react-router-dom";
import paperCorner from "../../assets/lottieAnimation/corner fold (1).png";
import LogoBlack from "../../components/UserAccount/LogoBlack";
import SignUpForm from "../../components/UserAccount/SignUp/SignUpForm";
import UserAccountFooter from "../../components/UserAccount/UserAccountFooter";

const SignIn = () => {
  return (
    <div className="min-h-screen flex relative flex-col px-4 md:px-0 items-center justify-start w-full bg-white">
      <div className="max-w-[400px] w-full">
        {/* amazon logo and Home link */}
        <LogoBlack />

        {/* error details section */}
        {/* <ErrorMessage /> */}

        {/* form section */}
        <section className="border  p-3 md:p-4 rounded-lg border-slate-300">
          <h1 className="text-2xl text-center mb-2 md:mb-3 md:text-3xl font-semibold">
            Sign in
          </h1>
          <SignUpForm />
        </section>

        <div className="divider my-5">New to Amazon?</div>
        <Link
          to="/sign-up"
          className="text-center block hover:bg-blue-50 rounded-md duration-200 py-2 border"
        >
          Create your Amazon account
        </Link>

        {/* user Account footer */}
        <UserAccountFooter />
      </div>

      <img
        src={paperCorner}
        className="absolute bottom-0 w-20 md:w-[150px] lg:w-[250px] right-0"
        alt=""
      />
    </div>
  );
};

export default SignIn;
