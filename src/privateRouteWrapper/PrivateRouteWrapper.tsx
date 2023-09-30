import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useShopContext } from "../provider/ContextProvider";

const PrivateRouteWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  // userInfoState from userInfo useReducer hook.
  const { user, loading } = useShopContext();

  // return loading if the userdetails is still loading.
  if (loading) return <Loading className="w-full h-[80vh]" />;

  // if user is not signIn then send the user to sign-in page.
  if (!user.email) {
    return <Navigate to="/sign-in" state={location.pathname} replace={true} />;
  }

  // return the protected router page if the user is sign in.
  return children;
};

export default PrivateRouteWrapper;
