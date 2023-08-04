import { FaBars } from "react-icons/fa";
import Cart from "../../../components/Navbar/Cart";
import DeliverCountry from "../../../components/Navbar/DeliverCountry";
import Logo from "../../../components/Navbar/Logo";
import Profile from "../../../components/Navbar/Profile";
import SearchInput from "../../../components/Navbar/SearchInput";

const Navbar = () => {
  return (
    <nav className="bg-[#232f3e] mx-auto px-2 md:px-6">
      {/* top nav section starts */}
      <div
        id="nav-top"
        className="flex bg-[#232f3e] py-1 items-center justify-between gap-10 md:gap-0"
      >
        <div className="flex items-center justify-between">
          <label htmlFor="my-drawer" className="text-white font-bold md:hidden">
            <FaBars />
          </label>
          <Logo />
          <DeliverCountry />
        </div>

        {/* login, search and profile section starts */}
        <div className="w-5/6 text-white flex items-start justify-between md:gap-10">
          <div className="hidden md:block md:w-9/12">
            <SearchInput />
          </div>
          <div className="flex items-start justify-between  w-full md:w-3/12">
            <Profile />
            <Cart />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <SearchInput />
      </div>

      {/* bottom nav section starts */}
      <div className="drawer">
        <label htmlFor="my-drawer" className="text-white font-bold md:hidden">
          <FaBars />
        </label>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
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
    </nav>
  );
};
export default Navbar;
