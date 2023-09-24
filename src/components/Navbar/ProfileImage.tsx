import { Link } from "react-router-dom";
import { useShopContext } from "../../provider/ContextProvider";

const ProfileImage = ({ className }: { className: string }) => {
  const { user } = useShopContext();
  return (
    <Link to="/user-profile" className={`${className} items-center mt-2 `}>
      <img
        title="click to view your profile"
        className="w-10 h-10 rounded-full mr-5"
        src={
          user.photoURL
            ? user.photoURL
            : "https://i.ibb.co/NLxpRjh/photoUrl.jpg"
        }
      />
    </Link>
  );
};

export default ProfileImage;
