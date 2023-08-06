import { FaXmark } from "react-icons/fa6";
import { useShopContext } from "../provider/ContextProvider";
import SubMenu from "./SubMenu";

const HambergerMenu = () => {
  const { menuState, menuDispatch } = useShopContext();
  // TODO: navLinks have to take from the server side.
  const NavLinks = [
    {
      label: "Electronics",
      subMenu: [
        {
          label: "Camera",
          href: "/camera",
        },
        {
          label: "Desktop",
          href: "/desktop",
        },
        {
          label: "Phone",
          href: "/phone",
        },
      ],
    },
    {
      label: "Kitchen",
      subMenu: [
        {
          label: "Spoons",
          href: "/spoons",
        },
        {
          label: "Mugs",
          href: "/mug",
        },
        {
          label: "Blenders",
          href: "/blengers",
        },
      ],
    },
  ];
  return (
    <div className="drawer">
      <input
        id="menu-drawer"
        type="checkbox"
        checked={menuState.isMenuOpen}
        className="drawer-toggle"
      />
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="-translate-x-full p-4 w-9/12 md:w-3/6 bg-white relative lg:w-96 h-full text-base-content">
          {/* Sidebar content here */}

          {NavLinks.map((link, index) => {
            return (
              <li key={index} className="">
                <label
                  onClick={() =>
                    menuDispatch({
                      target: "SUBMENU",
                      actionType: "OPEN",
                      subMenuIndex: index + 1,
                    })
                  }
                >
                  {link.label}
                </label>
                <SubMenu subMenuItems={link.subMenu} index={index + 1} />
              </li>
            );
          })}

          {/* MENU list 2 starts */}
          <li>
            <a>Sidebar Item 2</a>
          </li>

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
        </ul>
      </div>
    </div>
  );
};

export default HambergerMenu;
