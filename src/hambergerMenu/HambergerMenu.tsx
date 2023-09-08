import { FaAngleRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useQuery } from "react-query";
import instance from "../hooks/useAxiosInstance";
import { useShopContext } from "../provider/ContextProvider";
import { Category } from "../tsInterfaces&types/HambergerMenu";
import SubMenu from "./SubMenu";

const HambergerMenu = () => {
  const { menuState, menuDispatch } = useShopContext();

  // hambergerMenu handler function.
  const handleMenuToggle = (
    e: React.MouseEvent,
    target: "SUBMENU" | "MENU",
    actionType: "OPEN" | "CLOSE",
    subMenuIndex: number
  ) => {
    // stop event bubbling
    e.stopPropagation();
    menuDispatch({ target, actionType, subMenuIndex });
  };

  const { data } = useQuery("categories", async () => {
    const response: Category[] = await instance.get("/categories");
    return response;
  });

  const navLinks: Category[] = data || [];
  return (
    <div className="drawer z-50">
      <input
        id="menu-drawer"
        onChange={() => {}}
        type="checkbox"
        checked={menuState.isMenuOpen}
        className="drawer-toggle"
      />
      <div className="drawer-side -left-[1px] overflow-hidden">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <div className="-translate-x-full  w-9/12 md:w-3/6 h-full bg-white relative lg:w-96 text-base-content">
          {/* Navlink list here */}
          <p className="py-2.5 pl-10 text-white font-semibold bg-[#232F3E] block text-2xl">
            Hello, sign in
          </p>
          <p className="pl-10 text-lg font-bold py-2.5 border-b border-b-slate-200">
            Shop By Categories
          </p>

          {/* navLink list starts */}
          <ul className="">
            {navLinks &&
              navLinks.map((link, index) => {
                return (
                  <li
                    onClick={(event) =>
                      handleMenuToggle(event, "SUBMENU", "OPEN", index + 1)
                    }
                    key={index}
                    className="pl-10 block hover:bg-slate-200 font-medium duration-150 py-2.5"
                  >
                    <label className="flex font-thin items-center justify-between pr-5">
                      <span className="font-medium text-base">{link.name}</span>{" "}
                      <FaAngleRight />
                    </label>
                    <SubMenu
                      categoryHref={link.href}
                      subcategories={link.subcategories}
                      index={index + 1}
                    />
                  </li>
                );
              })}
          </ul>

          {/* MENU close button */}
          <label
            onClick={() =>
              menuDispatch({ target: "MENU", actionType: "CLOSE" })
            }
            className={`absolute top-3 -right-10 font-light text-white text-3xl ${
              menuState.isMenuOpen ? "block" : "hidden"
            }`}
          >
            <FaXmark />
          </label>
        </div>
      </div>
    </div>
  );
};

export default HambergerMenu;
