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
    <nav className=" mx-auto bg-[#131921]">
      {/* top nav section starts */}
      <div
        id="nav-top"
        className="flex py-1 px-2 items-center justify-between md:px-4 lg:px-6 md:gap-0"
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
        <div className="hidden md:block md:w-7/12">
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
      <div className="w-full px-2 md:px-4 lg:px-6 bg-[#232F3E] py-1.5">
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
