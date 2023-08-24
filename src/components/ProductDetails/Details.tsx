import { ProductType } from "../../tsInterfaces&types/Products";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import TitleAndRatings from "./TitleAndRatings";

const Details: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="w-7/12 flex flex-col-reverse lg:gap-2 lg:flex-row">
      <div className="w-full lg:w-4/6">
        {/* title & details */}
        <TitleAndRatings
          className="hidden lg:block"
          title={product.title ? product.title : ""}
          ratings={product.ratings_info}
          showMoreDetails={true}
          // @ts-ignore
          storeName={product.product_details?.Brand}
        />

        {/* product price */}
        <ProductPrice price={product.price} />

        {/* product information (Brand, model etc) */}
        <ProductInfo productInfo={product.product_details} />
      </div>

      {/* add to cart info */}
      <div className="w-full lg:w-2/6">
        <h1>cart information</h1>
      </div>
    </div>
  );
};

export default Details;
