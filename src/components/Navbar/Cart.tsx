import { useEffect } from "react";
import { Link } from "react-router-dom";
import useCartProductModifier from "../../hooks/useCartProductModifier";
import { useShopContext } from "../../provider/ContextProvider";

const Cart = () => {
  const {
    cartProductCount,
    setCartProductCount,
    user,
    setCartModified,
    cartModified,
  } = useShopContext();

  const {
    getCartProductsFromLocalStorage,
    getCartProductsFromMongoDB,
    getTotalProductsAmount,
  } = useCartProductModifier();

  useEffect(() => {
    // get products from database.
    if (user.email) {
      const cartProductsFromMongoDB = getCartProductsFromMongoDB(user.email);

      // check if any product exist on cartProducts
      if (cartProductsFromMongoDB?.length > 0) {
        const totalProductCount = getTotalProductsAmount(
          cartProductsFromMongoDB
        );
        setCartProductCount(totalProductCount);
        setCartModified(false);
      }
    } else {
      // get products from LocalStorage.
      const cartProductsFromLocalStorage = getCartProductsFromLocalStorage();
      if (cartProductsFromLocalStorage?.length > 0) {
        const totalProductCount = getTotalProductsAmount(
          cartProductsFromLocalStorage
        );
        setCartProductCount(totalProductCount);
        setCartModified(false);
      } else {
        setCartProductCount(0);
      }
    }
  }, [cartModified === true]);
  return (
    <Link
      to="/cart"
      className="flex hover-border items-end text-lg relative lg:mt-1"
    >
      <img
        className={`cursor-pointer ${
          cartProductCount > 9 ? "w-10" : "w-9 lg:w-10"
        } h-8 lg:h-9`}
        src="https://i.ibb.co/Hnxbm42/Amazon-cart.png"
        alt="Cart"
      />
      <span className="hidden cursor-pointer lg:block font-bold -ml-1 text-white">
        cart
      </span>

      {/* cart product amount */}
      <span
        className={`absolute cursor-pointer text-sm lg:text-md -top-0.5 lg:top-0 font-bold ${
          cartProductCount > 9 ? "left-[18px]" : "left-[20px] lg:left-[22px]"
        }  rounded-md bg-transparent text-orange-300`}
      >
        {cartProductCount}
      </span>
    </Link>
  );
};

export default Cart;
