import { useEffect, useState } from "react";
import useCartProductModifier from "../../hooks/useCartProductModifier";
import { useShopContext } from "../../provider/ContextProvider";
import { CartProduct } from "../../tsInterfaces&types/cartProduct";
import SingleCartProduct from "./SingleCartProduct";

const CartProducts = () => {
  const { cartModified } = useShopContext();
  const { getCartProductsFromLocalStorage } = useCartProductModifier();
  const [cartProducts, setCartProducts] = useState<CartProduct[] | null>(null);
  useEffect(() => {
    const products = getCartProductsFromLocalStorage();
    setCartProducts(products);
  }, [cartModified === true]);
  return (
    <div className="rounded-md w-full px-3 py-2 md:p-3 lg:p-5 md:bg-white md:w-8/12 lg:w-9/12">
      <h1 className="text-2xl md:text-3xl pb-1 font-semibold border-b border-slate-300">
        Shopping Cart
      </h1>

      <div className="w-full">
        {
          /* display all added products */
          cartProducts !== null && cartProducts?.length > 0 ? (
            cartProducts.map((singleProduct) => (
              <SingleCartProduct
                key={singleProduct._id}
                product={singleProduct}
              />
            ))
          ) : (
            <h1 className="text-center md:text-2xl font-semibold my-10 md:my-20">
              Your Cart is Empty
            </h1>
          )
        }
      </div>
    </div>
  );
};

export default CartProducts;
