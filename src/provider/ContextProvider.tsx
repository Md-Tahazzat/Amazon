import { ReactNode, createContext, useContext, useState } from "react";

// interface for react children,
interface ContextProviderProps {
  children: ReactNode;
}

// interface for context data.
interface ShopContextData {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// initial context data
const initialContextData: ShopContextData = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
};

// create amazon shop context.
const ShopContext = createContext<ShopContextData>(initialContextData);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // state for hamburger menu open close
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // shop context data
  const shopContextData: ShopContextData = {
    isMenuOpen,
    setIsMenuOpen,
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
