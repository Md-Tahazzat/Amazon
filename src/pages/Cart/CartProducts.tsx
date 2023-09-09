import { useEffect, useState } from "react";
import { CartProduct } from "../../tsInterfaces&types/cartProduct";
import { getCartProductFromLocalStorage } from "../../utilitesFn/AddToCart";
import SingleCartProduct from "./SingleCartProduct";

const CartProducts = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[] | null>(null);
  useEffect(() => {
    const products = getCartProductFromLocalStorage();
    setCartProducts(products);
  }, []);
  return (
    <div className="h-screen rounded-md w-full py-2 md:p-3 lg:p-5 md:bg-white md:w-8/12 lg:w-9/12">
      <h1 className="text-2xl md:text-3xl pb-1 font-semibold border-b border-slate-300">
        Shopping Cart
      </h1>

      <div>
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
            <h1>Your Cart is Empty</h1>
          )
        }
      </div>
    </div>
  );
};

export default CartProducts;
