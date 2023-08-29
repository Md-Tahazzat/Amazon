import { useState } from "react";
import DeliveryDate from "../Products/DeliveryDate";
import ProductPrice from "./ProductPrice";

const AddToCart: React.FC<{ productPrice: number }> = ({ productPrice }) => {
  const [dollars, cents] = productPrice.toFixed(2).split(".");
  const [quantity, setQuantity] = useState<number>(1);

  // quantity handler function
  const handleQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };
  return (
    <>
      <p className="lg:flex hidden">
        $<span className="text-2xl -mt-0.5">{dollars}</span>
        {cents}
      </p>
      <ProductPrice className="lg:hidden" price={productPrice} />
      <DeliveryDate />
      <p className="text-sm mb-3">
        Order's within <span className="text-green-700">10 hrs 35 mins</span>
      </p>

      <p className="text-xl text-green-800 mb-2">In Stock</p>

      {/* quantity options */}
      <div className="inline-flex shadow-md mb-3 bg-blue-50 items-center border px-1 rounded-lg text-sm">
        <span>Qty:</span>

        <select
          onChange={handleQuantity}
          className="focus:outline-none pl-1 bg-blue-50"
        >
          {new Array(30).fill(null).map((el, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      {/* add to cart button */}
      <button className="w-full font-semibold py-1 text-center bg-yellow-300 hover:bg-yellow-400 duration-150 rounded-3xl mb-2">
        Add to Cart
      </button>
      <button className="w-full font-semibold py-1 text-center bg-orange-400 hover:bg-orange-500 duration-150 rounded-3xl mb-4">
        Buy Now
      </button>

      {/* product selling terms */}
      <p className="text-sm flex gap-4">
        Payment: <span className="text-green-700">Secure transaction</span>
      </p>
      <p className="text-sm flex gap-1">
        Ships from: <span className="">Amazon.com</span>
      </p>
      <p className="text-sm flex gap-6">
        Sold by: <span className="">Amazon.com</span>
      </p>
      <p className="text-sm flex gap-6 ">
        Returns:{" "}
        <span className="text-green-700">
          Eligible for Return, Refund or Replacement within 30 day's of receipt
        </span>
      </p>
    </>
  );
};

export default AddToCart;
