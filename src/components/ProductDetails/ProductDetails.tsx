import { ProductDetailsType } from "../../tsInterfaces&types/Products";

const ProductDetails = ({
  productDetails,
}: {
  productDetails: ProductDetailsType;
}) => {
  console.log(productDetails);
  const keys = Object.keys(productDetails);
  return (
    <div className="mb-1 pb-1 w-full flex items-start gap-3 border-b-2 ">
      <ul>
        {keys.length > 0 &&
          keys.map((key, index) => {
            return (
              <li className="flex my-2 leading-4" key={index}>
                <span className="font-semibold w-3/6">{key}</span>{" "}
                <span className="w-3/6">{productDetails[key]}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductDetails;
