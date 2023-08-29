import { CommentType } from "../../tsInterfaces&types/Products";
import Comment from "./Comment";

const ProductComments: React.FC<{ comments: CommentType[] }> = ({
  comments,
}) => {
  return (
    <div className="w-full lg">
      <h1 className="text-2xl text-center mt-20 lg:mt-32 font-semibold">
        Customer reviews
      </h1>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default ProductComments;
