import { CartProduct } from "../tsInterfaces&types/cartProduct";

export const addCartProductToLocalStorage = (product: CartProduct) => {
  let cartProducts = getCartProductFromLocalStorage();

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

export const getCartProductFromLocalStorage = (): CartProduct[] => {
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
export const updateCartProductOfLocalStorage = (
  _id: string,
  quantity: number
) => {
  let cartProducts = getCartProductFromLocalStorage();

  const existProduct =
    cartProducts.length > 0 && cartProducts.find((el) => el._id === _id);
  if (!!existProduct) {
    existProduct.quantity = quantity;
    setCartProductToLocalStorage(cartProducts);
  }
};
