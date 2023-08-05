import { createContext, useContext, useReducer } from "react";
import {
  ContextProviderProps,
  MenuState,
  ShopContextData,
} from "../tsInterfaces&types/ContextProvider";
import { menuReducer } from "../utilitesFn/ShopContextProviderFn";

// initial menuState data of useReducer hook of hambergerMenu
const initialMenuState: MenuState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
  subMenuIndex: 0,
};

// initial shopContext data
const initialContextData: ShopContextData = {
  menuState: initialMenuState,
  menuDispatch: () => {},
};

// create amazon shop context.
const ShopContext = createContext<ShopContextData>(initialContextData);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // hambergurMenu control useReducer
  const [menuState, menuDispatch] = useReducer(menuReducer, initialMenuState);

  // shop context data
  const shopContextData: ShopContextData = {
    menuState,
    menuDispatch,
  };
  return (
    <ShopContext.Provider value={shopContextData}>
      {children}
    </ShopContext.Provider>
  );
};
export default ContextProvider;

// create custom hook to use Shop context
export const useShopContext = () => useContext(ShopContext);
