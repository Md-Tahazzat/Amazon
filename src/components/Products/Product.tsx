import { ProductType } from "../../tsInterfaces&types/Products";
import DeliveryDate from "./DeliveryDate";
import Ratings from "./Ratings";

const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  // get the dollars & cents
  const priceString = product.price.toFixed(2);
  const [dollars, cents] = priceString.split(".");

  // product details navigator function.
  const navigateDetailsPage = (id: string): void => {
    console.log(id);
  };

  return (
    <div
      onClick={() => navigateDetailsPage(product._id)}
      title="click to view details"
      className="flex md:flex-col hover:border-orange-400 w-full duration-200 rounded-md cursor-pointer overflow-hidden bg-slate-50 mb-3 md:mb-0 border md:pb-2"
    >
      <div className="w-2/6 md:w-full md:h-[170px] bg-white flex items-center justify-center rounded-sm">
        <img
          className=" max-w-full md:max-w-[223px] lg:max-w-[235px] md:py-2 max-h-[165px]"
          src={product.images[0]}
          alt=""
        />
      </div>

      {/* product information */}
      <div className="mx-2 mt-1">
        <h1 className="text-base md:text-base font-semibold">
          {product.title
            ? product.title.length > 85
              ? product.title.slice(0, 85) + "..."
              : product.title
            : ""}
        </h1>

        <Ratings ratingsInfo={product.ratings_info} />
        {/* price */}
        <p className="text-sm flex mt-0.5 items-start">
          <span>$</span>
          <span className="text-2xl font-semibold ml-0.5 -mt-1">{dollars}</span>
          <span>{cents === "00" ? "" : cents}</span>
        </p>
        <DeliveryDate />
      </div>
    </div>
  );
};

export default Product;
