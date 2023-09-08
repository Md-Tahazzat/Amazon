import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { RatingsInfo } from "../../tsInterfaces&types/Products";

type RatingPropsType = {
  ratingsInfo: RatingsInfo;
  showMoreDetails: boolean;
};

const Ratings = ({ ratingsInfo, showMoreDetails }: RatingPropsType) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold">{ratingsInfo.avg_ratings}</span>

      {/*@ts-ignore */}
      <Rating
        className="mt-1 z-50"
        readonly
        placeholderSymbol={<AiFillStar className="text-orange-500" />}
        placeholderRating={parseFloat(ratingsInfo.avg_ratings)}
        emptySymbol={<AiOutlineStar className="text-orange-500" />}
      />
      <span className="text-xs text-blue-500">
        <span className=" hover:text-red-700 hover:underline cursor-pointer">
          {ratingsInfo.total_ratings}
          {showMoreDetails && " ratings"}
        </span>
        {showMoreDetails && (
          <>
            <span> | </span>
            <span className=" hover:text-red-700 hover:underline cursor-pointer">
              {ratingsInfo.answered_question} answered questions
            </span>
          </>
        )}
      </span>
    </div>
  );
};

export default Ratings;
