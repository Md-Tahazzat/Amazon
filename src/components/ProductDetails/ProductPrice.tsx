import React from "react";

const ProductPrice: React.FC<{ price: number }> = ({ price }) => {
  const [dollars, cents] = price.toFixed(2).split(".");
  const discountPrice = (price * 10) / 100;
  return (
    <div className="py-0.5 lg:pb-1 mb-1 lg:border-b-2">
      <p className="text-sm flex mt-0.5 items-start">
        <span className="text-2xl mr-3 text-red-500 -mt-1 font-thin">-10%</span>
        <span>$</span>
        <span className="text-2xl font-semibold ml-0.5 -mt-1">{dollars}</span>
        <span>{cents === "00" ? "" : cents}</span>
      </p>
      <p className="text-sm mt-0.5">
        List price{" "}
        <span className="line-through">${price + discountPrice}</span>
      </p>
    </div>
  );
};

export default ProductPrice;
