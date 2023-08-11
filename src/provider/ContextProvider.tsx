import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import auth from "../firebase/firebase.config";
import {
  ContextProviderProps,
  MenuState,
  ShopContextData,
  User,
} from "../tsInterfaces&types/ContextProvider";
import { menuReducer } from "../utilitesFn/ShopContextProviderFn";

// initial menuState data of useReducer hook for hambergerMenu
const initialMenuState: MenuState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
  subMenuIndex: 0,
};

// intial user of useState
const initialUserState: User = {
  displayName: "",
  email: "",
  photoURL: "",
};

// initial data of shopContext
const initialContextData: ShopContextData = {
  menuState: initialMenuState,
  menuDispatch: () => {},
  user: initialUserState,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
};

// create amazon shop context.
const ShopContext = createContext<ShopContextData>(initialContextData);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // useReducer to controll hambergurMenu
  const [menuState, menuDispatch] = useReducer(menuReducer, initialMenuState);

  // user information state & loading state
  const [user, setUser] = useState<User>(initialUserState);
  const [loading, setLoading] = useState<boolean>(true);
  // track authState change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // TODO: save user to database
      if (currentUser?.email) {
        const user: User = {
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        };
        setUser(user);
      }
    });
    setLoading(false);
    return () => {
      unSubscribe();
    };
  }, []);

  // shop context data
  const shopContextData: ShopContextData = {
    menuState,
    menuDispatch,
    user,
    setUser,
    loading,
    setLoading,
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
