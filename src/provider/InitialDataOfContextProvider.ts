import {
  MenuState,
  ShopContextData,
  User,
} from "../tsInterfaces&types/ContextProvider";

// initial menuState data of useReducer hook for hambergerMenu
export const initialMenuState: MenuState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
  subMenuIndex: 0,
};

// intial user of useState
export const initialUserState: User = {
  displayName: null,
  email: null,
  photoURL: null,
  role: null,
};

// initial data of shopContext
export const initialContextData: ShopContextData = {
  menuState: initialMenuState,
  menuDispatch: () => {},
  user: initialUserState,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
  cartProductCount: 0,
  setCartProductCount: () => {},
  cartModified: false,
  setCartModified: () => {},
};
