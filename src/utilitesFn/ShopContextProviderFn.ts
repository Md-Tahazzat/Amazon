import {
  MenuAction,
  MenuState,
  UserInfoAction,
  UserInfoState,
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

// userInfoReducer of useReducer hook to control useInformation.
export const userInfoReducer = (
  state: UserInfoState,
  action: UserInfoAction
): UserInfoState => {
  switch (action.target) {
    case "LOADING":
      return {
        ...state,
        loading: action.loading === undefined ? state.loading : action.loading,
      };
    case "USER":
      return {
        ...state,
        user: action.user === undefined ? state.user : action.user,
      };

    default:
      return state;
  }
};
