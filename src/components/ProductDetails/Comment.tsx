import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { CommentType } from "../../tsInterfaces&types/Products";

const Comment = ({ comment }: { comment: CommentType }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  //   TODO: it should take from the database dynamically.
  const getRandomNumber = (): number => {
    const number = Math.round(Math.random() * 10) + 10;
    return number;
  };

  return (
    <div className="w-full lg:w-3/6 mx-auto mb-7">
      <div className="flex items-center gap-2 mb-1">
        <img
          className="w-8 h-8 rounded-full"
          src={
            comment.image
              ? comment.image
              : "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
          }
          alt=""
        />
        <h3>{comment.name}</h3>
      </div>

      {/* customer rating */}
      <div className="flex items-center gap-2 ">
        {/*@ts-ignore */}
        <Rating
          readonly
          placeholderSymbol={<AiFillStar className="text-orange-500" />}
          placeholderRating={parseFloat(comment.rating)}
          emptySymbol={<AiOutlineStar className="text-orange-500" />}
        />{" "}
        <span className="-mt-1.5 text-xs font-semibold text-orange-600">
          verified purchase
        </span>
      </div>

      <h1 className="text-xl font-semibold">{comment.comment_title}</h1>
      <p>
        Reviewd in the {comment.location} on {comment.date.split("T")[0]}
      </p>

      {/* comment_text  */}
      <p className="mb-2">
        {comment.comment_text.length > 500 ? (
          <>
            {showMore ? (
              comment.comment_text
            ) : (
              <>{comment.comment_text.slice(0, 500)}...</>
            )}
            <span
              className="cursor-pointer ml-3 text-sm text-blue-400 font-semibold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See less" : "See more"}
            </span>
          </>
        ) : (
          comment.comment_text
        )}
      </p>

      {/* your feedback */}
      <p className="text-sm mb-2">
        {getRandomNumber()} people found this helpful
      </p>
      <div className="flex gap-10">
        <button className="py-0.5 px-3 rounded-lg border border-slate-300 shadow-md duration-150 hover:shadow-lg">
          Helpful
        </button>{" "}
        |<button>Report</button>
      </div>
    </div>
  );
};

export default Comment;
