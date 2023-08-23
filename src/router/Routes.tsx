import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import UserProfile from "../layoutes/UserProfile";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import SignIn from "../pages/UserAccount/SignIn";
import SignUp from "../pages/UserAccount/SignUp";
import PrivateRouteWrapper from "../privateRouteWrapper/PrivateRouteWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/user-profile",
    element: (
      <PrivateRouteWrapper>
        <UserProfile />
      </PrivateRouteWrapper>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
export default router;
