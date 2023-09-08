import { CartProduct } from "../tsInterfaces&types/cartProduct";

export const updateCartProductOfLocalStorage = (product: CartProduct) => {
  // get the previous cart products
  const previousCartProductsJSON = localStorage.getItem("cart_products");
  let cartProducts: CartProduct[] | [] = [];

  // check if the any product exist in the local storage
  if (previousCartProductsJSON !== null) {
    cartProducts = JSON.parse(previousCartProductsJSON);
  }

  //  check if the cart product is exist in the localstorage
  const existProduct =
    cartProducts.length > 0 &&
    cartProducts.find((el) => el._id === product._id);

  if (!!existProduct) {
    existProduct.quantity += product.quantity;
  } else {
    cartProducts = [...cartProducts, product];
  }

  // set to local storage
  localStorage.setItem("cart_products", JSON.stringify(cartProducts));
};
