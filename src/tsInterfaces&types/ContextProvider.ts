import { ReactNode } from "react";
// interface of react children for ContextProvider,
export interface ContextProviderProps {
  children: ReactNode;
}

//interface for menuState value of useReducer hook to control hambergerMenu.
export interface MenuState {
  subMenuIndex: number;
  isMenuOpen: boolean;
  isSubMenuOpen: boolean;
}

// interface for action parameter of menuReducer function
export type menuAction = {
  type: "HIDE_SUBMENU" | "OPEN_SUBMENU" | "OPEN_MENU" | "HIDE_MENU";
  subMenuIndex: number;
};

// interface for shopContext data.
export interface ShopContextData {
  menuState: MenuState;
  menuDispatch: React.Dispatch<menuAction>;
}
