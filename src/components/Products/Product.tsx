import { useNavigate } from "react-router-dom";
import { ProductType } from "../../tsInterfaces&types/Products";
import DeliveryDate from "./DeliveryDate";
import Ratings from "./Ratings";

type ProductPropsType = {
  product: ProductType;
  className: string;
};

const Product = ({ product, className }: ProductPropsType) => {
  const navigate = useNavigate();
  // get the dollars & cents
  const priceString = product.price.toFixed(2);
  const [dollars, cents] = priceString.split(".");

  return (
    <div
      onClick={() => navigate(`/products/${product._id}`, { replace: true })}
      title="click to view details"
      className={`${className} flex md:flex-col hover:border-orange-400 duration-200 rounded-md cursor-pointer overflow-hidden bg-slate-50 mb-3 md:mb-0 border md:pb-2`}
    >
      <div className="w-5/12 md:w-full md:h-[170px] bg-white flex items-center justify-center rounded-sm">
        <img
          className=" md:max-w-[223px] lg:max-w-[235px] p-3 md:py-2 md:px-2 max-h-[165px]"
          src={product.images[0]}
          alt=""
        />
      </div>

      {/* product information */}
      <div className="mx-2 mt-1 w-7/12 md:w-full">
        <h1 className="text-base md:text-base font-semibold">
          {product.title
            ? product.title.length > 85
              ? product.title.slice(0, 85) + "..."
              : product.title
            : ""}
        </h1>

        <Ratings ratingsInfo={product.ratings_info} showMoreDetails={false} />
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
