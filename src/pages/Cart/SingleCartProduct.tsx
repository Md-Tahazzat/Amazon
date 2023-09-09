import { useState } from "react";
import { CartProduct } from "../../tsInterfaces&types/cartProduct";
import { updateCartProductOfLocalStorage } from "../../utilitesFn/AddToCart";

const SingleCartProduct = ({ product }: { product: CartProduct }) => {
  const [inputValue, setInputValue] = useState(product.quantity.toString());

  //   product quantity input function handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target?.value;
    value = value.replace(/[^0-9]/g, "");
    setInputValue(value);
  };

  //  product quantity update function
  const handleUpdateQuantity = (id: string) => {
    updateCartProductOfLocalStorage(id, parseInt(inputValue));
    alert("product updated");
  };
  return (
    <div className="flex gap-3 bg-white border-b w-full pb-3 border-slate-300 mt-4">
      <img
        className="w-4/12 md:w-3/12 lg:w-2/12 my-4"
        src={product.image}
        alt=""
      />
      <div>
        <h1 className="lg:hidden">{product.title?.slice(0, 70)}...</h1>
        <h1 className="hidden lg:block font-semibold mb-1">{product.title}</h1>
        <h3 className="md:text-2xl font-semibold mb-1">${product.price}</h3>

        <p className="bg-orange-600 inline-block text-white px-2 text-sm">
          #1 best seller
        </p>
        <p className="text-sm text-green-700 mb-1">In Stock</p>

        {/*TODO:  have to make the learn more page  */}
        <p className="flex gap-1 text-sm mb-2">
          <input type="checkbox" />
          <span>
            This is a gift{" "}
            <span className="text-green-600 cursor-pointer">Learn more</span>
          </span>
        </p>

        {/* quantity and modify buttons */}
        <div>
          <span>
            <span className="mr-1">Qty:</span>
            <input
              className="border border-green-500 outline-none w-10 px-2 mr-3"
              value={inputValue}
              onChange={handleInputChange}
              type="text"
            />
          </span>
          <button
            onClick={() => handleUpdateQuantity(product._id)}
            className="px-2 py-0.5 bg-yellow-600 cursor-pointer rounded-md text-white"
          >
            Update
          </button>
          <button className="hover:underline text-blue-500 mx-2 px-4 border-r border-l">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
