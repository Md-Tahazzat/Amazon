import { useEffect } from "react";
import { useShopContext } from "../../provider/ContextProvider";
import { CartProduct } from "../../tsInterfaces&types/cartProduct";

const Cart = () => {
  const { cartProductCount, setCartProductCount } = useShopContext();
  useEffect(() => {
    // get the previous cart products
    const previousCartProductsJSON = localStorage.getItem("cart_products");
    let cartProducts: CartProduct[] | [] = [];

    // check if the any product exist in the local storage
    if (previousCartProductsJSON !== null) {
      cartProducts = JSON.parse(previousCartProductsJSON);
    }

    // get the total product quantity
    let totalProductCount: number = 0;
    if (cartProducts.length > 0) {
      cartProducts.forEach(
        (product) => (totalProductCount += product.quantity)
      );

      setCartProductCount(totalProductCount);
    }
  }, []);

  return (
    <div className="flex hover-border items-end text-lg relative lg:mt-1">
      <img
        className={`${
          cartProductCount > 9 ? "w-10" : "w-9 lg:w-10"
        } h-8 lg:h-9`}
        src="https://i.ibb.co/Hnxbm42/Amazon-cart.png"
        alt="Cart"
      />
      <span className="hidden lg:block font-bold -ml-1 text-white">cart</span>

      {/* cart product amount */}
      <span
        className={`absolute text-sm lg:text-md -top-0.5 lg:top-0 font-bold ${
          cartProductCount > 9 ? "left-[18px]" : "left-[20px] lg:left-[22px]"
        }  rounded-md bg-transparent text-orange-300`}
      >
        {cartProductCount}
      </span>
    </div>
  );
};

export default Cart;
