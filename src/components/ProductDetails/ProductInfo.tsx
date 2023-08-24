import React from "react";
import { ProductDetails } from "../../tsInterfaces&types/Products";

const ProductInfo: React.FC<{ productInfo: ProductDetails }> = ({
  productInfo,
}) => {
  const keys = Object.keys(productInfo);
  return (
    <ul className="mb-1 lg:pb-1 lg:border-b-2 ">
      {keys.length > 0 &&
        keys.map((key) => {
          return (
            <li>
              <span className="font-semibold">{key}</span>: {productInfo[key]}
            </li>
          );
        })}
    </ul>
  );
};

export default ProductInfo;
