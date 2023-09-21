import queryString from "query-string";
import { IoArrowUndoOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useShopContext } from "../provider/ContextProvider";
import { SubMenuItems } from "../tsInterfaces&types/HambergerMenu";

type SubMenuPropsType = {
  categoryHref: string;
  subcategories: SubMenuItems[];
  index: number;
};

const SubMenu = ({ categoryHref, subcategories, index }: SubMenuPropsType) => {
  const { menuState, menuDispatch } = useShopContext();

  // hambergerMenu handler function.
  const handleMenuToggle = (
    e: React.MouseEvent,
    target: "SUBMENU" | "MENU",
    actionType: "OPEN" | "CLOSE",
    subMenuIndex?: number
  ) => {
    // stop event bubbling
    e.stopPropagation();
    menuDispatch({ target, actionType, subMenuIndex });
  };

  // query string functionality for active style
  const parsedUrl = queryString.parse(location.search);

  return (
    <ul
      data-index="1"
      className={`sidebar-ul duration-300 bg-slate-200 absolute w-full h-full top-[51px] left-0 ${
        menuState.subMenuIndex === index && menuState.isSubMenuOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }`}
    >
      <li>
        <button
          onClick={(event) => handleMenuToggle(event, "SUBMENU", "CLOSE", 0)}
          className="pl-10 w-full text-xl cursor-pointer flex items-center border-b border-slate-300"
        >
          <IoArrowUndoOutline />
          <span className="ml-2 text-lg py-2.5">MAIN MENU</span>
        </button>
      </li>
      {subcategories.map((item, index) => {
        return (
          <li
            className="pl-7 block font-medium duration-150 hover:bg-slate-300"
            onClick={(event) => handleMenuToggle(event, "MENU", "CLOSE")}
            key={index}
          >
            <NavLink
              className={`block py-2.5 pl-3 ${
                parsedUrl.sub_category === item.href ? "activeLink" : ""
              }`}
              to={`/products?category=${categoryHref}&sub_category=${item.href}`}
            >
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
