import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useShopContext } from "../../../provider/ContextProvider";
import ToggleButton from "../../Button/ToggleButton";

const UserProfileSidebar = () => {
  const navigate = useNavigate();
  const { user } = useShopContext();
  const [isChecked, setIsChecked] = useState(false);

  // handle logout
  const handleLogOut = () => {
    // signOut(auth);
    navigate("/", { replace: true });
  };

  console.log("component render");
  return (
    <ul className="sidebar-ul w-80 min-h-full py-0 my-0 bg-slate-200 text-base-content">
      {/* Sidebar content here */}
      <li className="py-2 pl-10 text-white font-semibold flex items-center gap-5 bg-[#232F3E] text-2xl">
        <img
          className="w-10 h-10 rounded-full"
          src={
            user.photoURL
              ? user.photoURL
              : "https://i.ibb.co/NLxpRjh/photoUrl.jpg"
          }
        />{" "}
        <span className="font-semibold">{user.displayName}</span>
      </li>
      <ul className="ml-6 mt-5">
        <li className="user-prifile-links">
          <NavLink to="/user-profile/update">Update Profile</NavLink>
        </li>
        <li className="user-prifile-links">
          <NavLink to="/user-profile/order-history">Order History</NavLink>
        </li>
        <li className="user-prifile-links">
          <NavLink to="/user-profile/payment-history">Payment History</NavLink>
        </li>

        {/* set role as a buyer or seller */}
        <li className="mt-10 flex border-t border-t-slate-300 items-center justify-start gap-2 px-2">
          {/* search toggle-btn style in index.css */}
          <span
            onClick={() => isChecked === true && setIsChecked(false)}
            className="font-semibold cursor-pointer"
          >
            Be a Buyer
          </span>{" "}
          <ToggleButton isChecked={isChecked} setIsChecked={setIsChecked} />
          <span
            onClick={() => isChecked === false && setIsChecked(true)}
            className="font-semibold cursor-pointer"
          >
            Be a Seller
          </span>{" "}
        </li>
        <li
          onClick={handleLogOut}
          className="user-prifile-links hover:bg-red-500"
        >
          <button>Log Out</button>
        </li>
      </ul>
    </ul>
  );
};

export default UserProfileSidebar;
