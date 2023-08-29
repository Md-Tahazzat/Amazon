import React from "react";
import { ProductDetails } from "../../tsInterfaces&types/Products";

const ProductInfo: React.FC<{ productInfo: ProductDetails }> = ({
  productInfo,
}) => {
  const keys = Object.keys(productInfo);
  return (
    <div className="mb-1 pb-1 w-full flex items-start gap-3 border-b-2 ">
      <ul>
        {keys.length > 0 &&
          keys.map((key, index) => {
            return (
              <li className="flex my-2 leading-4" key={index}>
                <span className="font-semibold w-3/6">{key}</span>{" "}
                <span className="w-3/6">{productInfo[key]}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductInfo;
