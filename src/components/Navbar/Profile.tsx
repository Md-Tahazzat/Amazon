import { signOut } from "firebase/auth";
import { FaAngleRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useShopContext } from "../../provider/ContextProvider";
import ProfileImage from "../ProfileImage";
const Profile = () => {
  const { user, loading, setUser } = useShopContext();
  console.log(user, loading);
  const handleSignOut = (): void => {
    // set user details null
    setUser({
      email: null,
      displayName: null,
      photoURL: null,
      role: null,
    });
    // signOut user
    signOut(auth);
    localStorage.removeItem("access-token");
  };

  return (
    <>
      {loading ? (
        <p className="text-red-500 text-2xl">loading</p>
      ) : user?.email ? (
        <ProfileImage className="hidden lg:flex" />
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
            <FaUser className="" />
          </span>
        </Link>
      )}
    </>
  );
};

export default Profile;
