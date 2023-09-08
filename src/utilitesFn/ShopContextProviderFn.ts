import {
  CartAction,
  MenuAction,
  MenuState,
} from "../tsInterfaces&types/ContextProvider";

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

// cartReducer function to manage cartProducts
export const cartReducer = (
  cartState: string[],
  action: CartAction
): string[] => {
  switch (action.actionType) {
    case "ADD":
      return [...cartState, action._id];

    case "DELETE":
      const remainingIds = cartState.filter((id) => id !== action._id);
      return remainingIds;

    case "RESET":
      return [];

    default:
      return [...cartState];
  }
};
