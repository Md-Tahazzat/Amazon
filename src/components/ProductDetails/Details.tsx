import { ProductType } from "../../tsInterfaces&types/Products";
import AboutProduct from "./AboutProduct";
import AddToCart from "./AddToCart";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import TitleAndRatings from "./TitleAndRatings";

const Details: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="w-full lg:w-7/12 flex flex-col-reverse lg:gap-2 lg:flex-row">
      <div className="w-full lg:w-9/12">
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

        {/* about product */}
        <AboutProduct about={product.about} />
      </div>

      {/* add to cart info */}
      <div className="w-full lg:w-3/12">
        <AddToCart productPrice={product.price} />
      </div>
    </div>
  );
};

export default Details;
