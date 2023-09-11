import { CartProduct } from "../tsInterfaces&types/cartProduct";

const useCartProductModifier = () => {
  /* 
    =========================================
    local storage cartProducts functionality
    =========================================
    */
  const addCartProductToLocalStorage = (product: CartProduct) => {
    let cartProducts = getCartProductsFromLocalStorage();

    //  check if the cart product is exist in the localstorage
    const existProduct =
      cartProducts.length > 0 &&
      cartProducts.find((el) => el._id === product._id);

    if (!!existProduct) {
      existProduct.quantity += product.quantity;
    } else {
      cartProducts = [...cartProducts, product];
    }

    setCartProductToLocalStorage(cartProducts);
  };

  const getCartProductsFromLocalStorage = (): CartProduct[] | [] => {
    const previousCartProductsJSON = localStorage.getItem("cart_products");
    let cartProducts: CartProduct[] | [] = [];

    // check if the any product exist in the local storage
    if (previousCartProductsJSON !== null) {
      cartProducts = JSON.parse(previousCartProductsJSON);
    }
    return cartProducts;
  };

  // set cartProducts to localstorage
  const setCartProductToLocalStorage = (products: CartProduct[]) => {
    localStorage.setItem("cart_products", JSON.stringify(products));
  };

  // update cart product's quantity of localstorage.
  const updateCartProductOfLocalStorage = (_id: string, quantity: number) => {
    let cartProducts = getCartProductsFromLocalStorage();

    const existProduct =
      cartProducts.length > 0 && cartProducts.find((el) => el._id === _id);
    if (!!existProduct) {
      existProduct.quantity = quantity;
      setCartProductToLocalStorage(cartProducts);
    }
  };

  const deleteCartProductFromLocalStorage = (
    productId: string
  ): "FAIL" | "SUCCESS" => {
    let cartProducts = getCartProductsFromLocalStorage();

    if (cartProducts.length > 0) {
      const remainingProducts = cartProducts.filter(
        (el) => el._id !== productId
      );
      setCartProductToLocalStorage(remainingProducts);
    }
    return "SUCCESS";
  };

  /* 
    =====================================
    MongoDB cartProducts functionality 
    =====================================
    */
  const addCartProductToMongoDB = (product: CartProduct, email: string) => {};

  const updateCartProductToMongoDB = (
    email: string,
    productId: string,
    quantity: number
  ) => {};

  const getCartProductsFromMongoDB = (email: string): CartProduct[] | [] => {
    return [];
  };

  const deleteCartProductFromMongoDB = (
    email: string,
    productId: string
  ): "FAIL" | "SUCCESS" => {
    return "FAIL";
  };

  const addCartProductsFromLocalStorageToMongoDB = () => {
    let cartProducts = getCartProductsFromLocalStorage();
    if (cartProducts.length > 0) {
    }
  };
  // get the total product amount
  const getTotalProductsAmount = (products: CartProduct[]): number => {
    // get the total product quantity
    let totalProductCount: number = 0;
    if (products?.length > 0) {
      products.forEach((product) => (totalProductCount += product.quantity));
    }
    return totalProductCount;
  };

  return {
    getTotalProductsAmount,
    deleteCartProductFromLocalStorage,
    addCartProductToLocalStorage,
    getCartProductsFromLocalStorage,
    setCartProductToLocalStorage,
    updateCartProductOfLocalStorage,
    addCartProductToMongoDB,
    updateCartProductToMongoDB,
    getCartProductsFromMongoDB,
    deleteCartProductFromMongoDB,
  };
};

export default useCartProductModifier;
