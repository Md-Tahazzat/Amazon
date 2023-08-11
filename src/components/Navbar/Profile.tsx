import { signOut } from "firebase/auth";
import { FaAngleRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useShopContext } from "../../provider/ContextProvider";
const Profile = () => {
  const { userInfoState } = useShopContext();
  return (
    <>
      {userInfoState.user?.email ? (
        <div>
          <button
            className="text-white mt-3 pr-3"
            onClick={() => signOut(auth)}
          >
            Sign out
          </button>
          <img src="" />
        </div>
      ) : (
        <Link to="/sign-in" className="text-white hover-border md:py-1 lg:mt-1">
          {/* for medium and large device device profile */}
          <span className="hidden lg:flex flex-col items-left justify-center ">
            <span className="text-slate-100 text-[13px] -mb-[6px]">
              Hello, sign in
            </span>
            <span className="font-semibold text-[15px]">Account & Lists </span>
          </span>

          {/* for small device profile */}
          <span className=" flex lg:hidden items-center font-semibold text-xl py-1">
            <span className="text-xs">Sign In</span>
            <FaAngleRight className="text-[10px] mt-1 " />{" "}
            <FaUser className="text-2xl" />
          </span>
        </Link>
      )}
    </>
  );
};

export default Profile;
