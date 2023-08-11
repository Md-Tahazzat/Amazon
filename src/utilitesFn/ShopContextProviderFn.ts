import { MenuAction, MenuState } from "../tsInterfaces&types/ContextProvider";

// menuReducer function for useReducer hook to controll hamberger menu state.
export const menuReducer = (
  menuState: MenuState,
  menuAction: MenuAction
): MenuState => {
  switch (menuAction.target) {
    case "MENU":
      return {
        ...menuState,
        isMenuOpen: menuAction.actionType === "OPEN" ? true : false,
      };
    case "SUBMENU":
      if (menuAction.actionType === "OPEN" && menuAction.subMenuIndex) {
        return {
          ...menuState,
          isSubMenuOpen: true,
          subMenuIndex: menuAction.subMenuIndex,
        };
      } else {
        return {
          ...menuState,
          isSubMenuOpen: false,
          subMenuIndex: 0,
        };
      }
    default:
      return menuState;
  }
};
