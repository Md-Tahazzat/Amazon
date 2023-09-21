import { Outlet } from "react-router-dom";
import LogoBlack from "../components/UserAccount/LogoBlack";
import UserProfileSidebar from "../components/UserProfile/Sidebar/UserProfileSidebar";
import { useShopContext } from "../provider/ContextProvider";

const UserProfile = () => {
  const { user } = useShopContext();
  return (
    // <div className="drawer lg:drawer-open">
    //   <input id="profile-drawer" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content">
    //     <div className="w-9/12">
    //       <div className="flex w-full mx-auto items-center justify-center  ">
    //         <LogoBlack />
    //         <h1>
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
    //           molestias.
    //         </h1>
    //       </div>
    //       <Outlet />
    //     </div>
    //     <label
    //       htmlFor="profile-drawer"
    //       className="btn btn-primary drawer-button lg:hidden"
    //     >
    //       Open drawer
    //     </label>
    //   </div>
    //   <div className="drawer-side bg-slate-100 border-r-2 border-slate-200">
    //     <label htmlFor="profile-drawer" className="drawer-overlay"></label>
    //     <div className="py-2.5 pl-10 text-white font-semibold flex items-center gap-5 bg-[#232F3E] text-2xl">
    //       <img
    //         title="click to view your profile"
    //         className="w-10 h-10 rounded-full mr-5"
    //         src={
    //           user.photoURL
    //             ? user.photoURL
    //             : "https://i.ibb.co/NLxpRjh/photoUrl.jpg"
    //         }
    //       />
    //       <span className="tex">Welcome</span>
    //     </div>

    //     <ul className="menu w-80 min-h-full text-base-content">
    //       <li>
    //         <a>Sidebar Item 1</a>
    //       </li>
    //       <li>
    //         <a>Sidebar Item 2</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className=" flex items-center justify-center">
          <LogoBlack />
        </div>

        <div className=" p-4 md:p-6 lg:px-10">
          {/* route outlet */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <UserProfileSidebar />
      </div>
    </div>
  );
};

export default UserProfile;
