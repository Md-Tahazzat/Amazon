import { useShopContext } from "../provider/ContextProvider";

// interfaces for Submenu
interface SubMenuItems {
  label: string;
  href: string;
}
interface SubMenuProps {
  subMenuItems: SubMenuItems[];
  index: number;
}

const SubMenu: React.FC<SubMenuProps> = ({ subMenuItems, index }) => {
  const { menuState, menuDispatch } = useShopContext();
  return (
    <ul
      data-index="1"
      className={`duration-300 bg-slate-500 absolute w-full h-full top-0 left-0 ${
        menuState.subMenuIndex === index && menuState.isSubMenuOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }`}
    >
      <label
        onClick={() =>
          menuDispatch({
            target: "SUBMENU",
            actionType: "CLOSE",
            subMenuIndex: 0,
          })
        }
      >
        menu
      </label>
      {subMenuItems.map((item, index) => {
        return <li key={index}>{item.label}</li>;
      })}
    </ul>
  );
};

export default SubMenu;
