import { FaArrowLeftLong } from "react-icons/fa6";
import { useShopContext } from "../provider/ContextProvider";

// interfaces for Submenu
interface SubMenuItems {
  label: string;
  href: string;
}
interface SubMenuProps {
  subcategories: SubMenuItems[];
  index: number;
}

const SubMenu: React.FC<SubMenuProps> = ({ subcategories, index }) => {
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

  console.log(menuState);
  return (
    <ul
      data-index="1"
      className={`duration-300 bg-white absolute w-full h-full top-[51px] left-0 ${
        menuState.subMenuIndex === index && menuState.isSubMenuOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }`}
    >
      <li
        onClick={(event) => handleMenuToggle(event, "SUBMENU", "CLOSE", 0)}
        className="pl-10 cursor-pointer flex items-center py-[12px] border-b border-slate-300"
      >
        <FaArrowLeftLong /> <span className="ml-2">MAIN MENU</span>
      </li>
      {subcategories.map((item, index) => {
        return (
          <li
            className="pl-10 block hover:bg-slate-200 font-medium duration-150 py-2.5"
            onClick={(event) => handleMenuToggle(event, "MENU", "CLOSE")}
            key={index}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
