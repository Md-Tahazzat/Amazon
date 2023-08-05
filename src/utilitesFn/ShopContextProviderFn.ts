import { MenuState, menuAction } from "../tsInterfaces&types/ContextProvider";

// menuReducer function for useReducer hook to controll hamberger menu state.
export const menuReducer = (
  menuState: MenuState,
  action: menuAction
): MenuState => {
  switch (action.type) {
    case "HIDE_MENU":
      return {
        ...menuState,
        isMenuOpen: false,
        subMenuIndex: action.subMenuIndex,
      };
    case "OPEN_MENU":
      return {
        ...menuState,
        isMenuOpen: true,
        subMenuIndex: action.subMenuIndex,
      };
    case "OPEN_SUBMENU":
      return {
        ...menuState,
        isSubMenuOpen: true,
        subMenuIndex: action.subMenuIndex,
      };
    case "HIDE_SUBMENU":
      return {
        ...menuState,
        isSubMenuOpen: false,
        subMenuIndex: action.subMenuIndex,
      };

    default:
      return menuState;
  }
};
