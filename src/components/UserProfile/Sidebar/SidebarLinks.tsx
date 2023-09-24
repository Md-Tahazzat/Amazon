import { useNavigate } from "react-router-dom";
import { useShopContext } from "../../../provider/ContextProvider";
import Loading from "../../Loading/Loading";
import AdminFeatures from "./AdminFeatures";
import BuyerFeatures from "./BuyerFeatures";
import BuyerSellerToggler from "./BuyerSellerToggler";
import SellerFeatures from "./SellerFeatures";

const SidebarLinks = () => {
  const { loading, user } = useShopContext();
  const navigate = useNavigate();

  if (loading || !user.email)
    return <Loading className="w-full text-sm mt-32" />;

  const { email, role } = user;

  //  get user features according to user role
  // const { data } = useQuery([email, 10], async () => {
  //   const res: AxiosResponse<UserFeaturesResponse, UserFeaturesResponse> =
  //     await instance.put("/user-features", { email, role });
  // });

  // handle logout
  const handleLogOut = () => {
    // signOut(auth);
    navigate("/", { replace: true });
  };

  return (
    <ul className="ml-6 mt-5">
      {role === "admin" ? (
        <AdminFeatures />
      ) : role === "seller" ? (
        <SellerFeatures />
      ) : (
        <BuyerFeatures />
      )}
      {/* set role as a buyer or seller */}
      {role !== "admin" && <BuyerSellerToggler />}
      <li
        onClick={handleLogOut}
        className="user-profile-links hover:bg-red-500"
      >
        <button>Log Out</button>
      </li>
    </ul>
  );
};

export default SidebarLinks;
