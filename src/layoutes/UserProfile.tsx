import { Outlet } from "react-router-dom";
import LogoBlack from "../components/UserAccount/LogoBlack";

const UserProfile = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="profile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-400">
        <div className="w-9/12">
          <div className="flex w-full mx-auto items-center justify-center  ">
            <LogoBlack />
          </div>
          <Outlet />
        </div>
        <label
          htmlFor="profile-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="profile-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
