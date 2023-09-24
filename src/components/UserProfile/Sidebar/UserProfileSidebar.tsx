import { useShopContext } from "../../../provider/ContextProvider";
import SidebarLinks from "./SidebarLinks";

const UserProfileSidebar = () => {
  const { user } = useShopContext();

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
      <SidebarLinks />
    </ul>
  );
};

export default UserProfileSidebar;
