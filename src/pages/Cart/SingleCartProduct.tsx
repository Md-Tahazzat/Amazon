import { useState } from "react";
import { CartProduct } from "../../tsInterfaces&types/cartProduct";

const SingleCartProduct = ({ product }: { product: CartProduct }) => {
  const [inputValue, setInputValue] = useState(product.quantity.toString());

  //   product quantity input function handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target?.value;
    value = value.replace(/[^0-9]/g, "");
    setInputValue(value);
  };
  return (
    <div>
      <img src={product.image} alt="" />
      <div>
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>
        <p>In Stock</p>

        {/*TODO:  have to make the learn more page  */}
        <p>
          This is a gift <span className="text-green-600">Learn more</span>
        </p>

        {/* quantity and modify buttons */}
        <div>
          <input value={inputValue} onChange={handleInputChange} type="text" />
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
