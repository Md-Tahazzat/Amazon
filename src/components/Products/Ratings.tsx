import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { RatingsInfo } from "../../tsInterfaces&types/Products";

const Ratings: React.FC<{ ratingsInfo: RatingsInfo }> = ({ ratingsInfo }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold">{ratingsInfo.avg_ratings}</span>

      {/*@ts-ignore */}
      <Rating
        className="mt-1"
        readonly
        placeholderSymbol={<AiFillStar className="text-orange-500" />}
        placeholderRating={parseFloat(ratingsInfo.avg_ratings)}
        emptySymbol={<AiOutlineStar className="text-orange-500" />}
      />
      <span className="text-xs text-green-800">
        {ratingsInfo.total_ratings}
      </span>
    </div>
  );
};

export default Ratings;
