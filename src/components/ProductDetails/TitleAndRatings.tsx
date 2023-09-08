import React from "react";
import { TitleAndRatingsProps } from "../../tsInterfaces&types/ProductDetails";
import Ratings from "../Products/Ratings";

const TitleAndRatings: React.FC<TitleAndRatingsProps> = (
  props: TitleAndRatingsProps
) => {
  const { className, ratings, storeName, title, showMoreDetails } = props;
  return (
    <div
      className={`flex flex-col-reverse lg:flex-col lg:z-50 lg:border-b-2 pb-1 lg:mb-1 ${className}`}
    >
      <h1 className=" text-base lg:text-2xl font-semibold">{title}</h1>
      <div className="flex justify-between lg:flex-col">
        <p className="text-blue-500 inline hover:underline cursor-pointer hover:text-red-700">
          Visit the {storeName} Store
        </p>
        <Ratings ratingsInfo={ratings} showMoreDetails={showMoreDetails} />
      </div>
    </div>
  );
};

export default TitleAndRatings;
