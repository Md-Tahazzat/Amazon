import { ReactNode } from "react";
// interface of react children for ContextProvider,
export interface ContextProviderProps {
  children: ReactNode;
}

// interface for user information
export interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

//interface for menuState value of useReducer hook to control hambergerMenu.
export interface MenuState {
  subMenuIndex: number;
  isMenuOpen: boolean;
  isSubMenuOpen: boolean;
}

// interface for action parameter of menuReducer function
export interface MenuAction {
  target: "MENU" | "SUBMENU" | "ALL";
  actionType: "CLOSE" | "OPEN";
  subMenuIndex?: number;
}

// interface for shopContext data.
export interface ShopContextData {
  menuState: MenuState;
  menuDispatch: React.Dispatch<MenuAction>;
  user: User;
  setUser: React.Dispatch<User>;
  loading: boolean;
  setLoading: React.Dispatch<boolean>;
}
