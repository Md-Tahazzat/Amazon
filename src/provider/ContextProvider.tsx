import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import auth from "../firebase/firebase.config";
import {
  ContextProviderProps,
  MenuState,
  ShopContextData,
  UserInfoState,
} from "../tsInterfaces&types/ContextProvider";
import {
  menuReducer,
  userInfoReducer,
} from "../utilitesFn/ShopContextProviderFn";

// initial menuState data of useReducer hook for hambergerMenu
const initialMenuState: MenuState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
  subMenuIndex: 0,
};

// intial userInfo of useReducer hook
const initialUserInfoState: UserInfoState = {
  loading: false,
  user: {
    displayName: "",
    email: "",
    photoUrl: "",
  },
};

// initial data of shopContext
const initialContextData: ShopContextData = {
  menuState: initialMenuState,
  menuDispatch: () => {},
  userInfoState: initialUserInfoState,
  userInfoDispatch: () => {},
};

// create amazon shop context.
const ShopContext = createContext<ShopContextData>(initialContextData);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // useReducer to controll hambergurMenu
  const [menuState, menuDispatch] = useReducer(menuReducer, initialMenuState);

  // user info useReducer.
  const [userInfoState, userInfoDispatch] = useReducer(
    userInfoReducer,
    initialUserInfoState
  );

  // track authState change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // TODO: save user to database
      if (currentUser?.email) {
        userInfoDispatch({
          target: "USER",
          loading: false,
          user: {
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoUrl: currentUser.photoURL,
          },
        });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // shop context data
  const shopContextData: ShopContextData = {
    menuState,
    menuDispatch,
    userInfoState,
    userInfoDispatch,
  };

  console.log(userInfoState);
  return (
    <ShopContext.Provider value={shopContextData}>
      {children}
    </ShopContext.Provider>
  );
};
export default ContextProvider;

// create custom hook to use Shop context
export const useShopContext = () => useContext(ShopContext);
