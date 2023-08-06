import { FaBars } from "react-icons/fa";
import Cart from "../../components/Navbar/Cart";
import DeliverCountry from "../../components/Navbar/DeliverCountry";
import Logo from "../../components/Navbar/Logo";
import Profile from "../../components/Navbar/Profile";
import ReturnsAndOrders from "../../components/Navbar/ReturnsAndOrders";
import SearchInput from "../../components/Navbar/SearchInput";
import HambergerMenu from "../../hambergerMenu/HambergerMenu";
import { useShopContext } from "../../provider/ContextProvider";

const Navbar = () => {
  const { menuDispatch } = useShopContext();
  return (
    <nav className="bg-[#232f3e] mx-auto px-2 md:px-6">
      {/* top nav section starts */}
      <div
        id="nav-top"
        className="flex bg-[#232f3e] py-1 items-center justify-between  md:gap-0"
      >
        <div className="flex items-center justify-between">
          <label
            onClick={() => menuDispatch({ target: "MENU", actionType: "OPEN" })}
            className="text-white text-2xl mr-1 lg:hidden"
          >
            <FaBars />
          </label>
          <Logo />
          <DeliverCountry />
        </div>

        {/* search Input */}
        <div className="hidden lg:block md:w-7/12">
          <SearchInput />
        </div>

        {/* profile and cart section starts */}
        <div className="flex items-start justify-between lg:gap-3">
          <Profile />
          <ReturnsAndOrders />
          <Cart />
        </div>
      </div>
      <div className="block md:hidden -mt-1">
        <SearchInput />
      </div>

      {/* bottom nav section starts */}
      <div className="w-full bg-[#232f3e] pt-1 pb-2">
        <label
          onClick={() => menuDispatch({ target: "MENU", actionType: "OPEN" })}
          className="text-white text-2xl mr-1 hidden lg:block"
        >
          <FaBars />
        </label>
      </div>
      <HambergerMenu />
    </nav>
  );
};
export default Navbar;
