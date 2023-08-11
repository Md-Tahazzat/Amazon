import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import UserProfile from "../layoutes/UserProfile";
import Home from "../pages/Home/Home";
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
        path: "/computer",
        element: <p>From Computer</p>,
      },
      {
        path: "/electronics",
        element: <p>From Electronics</p>,
      },
      {
        path: "/home-and-kitchen",
        element: <p>From Home and kitchen</p>,
      },
      {
        path: "/luggage",
        element: <p>From Luggage</p>,
      },
      {
        path: "/mens-fashion",
        element: <p>From Men's fashion</p>,
      },
      {
        path: "/personal-care",
        element: <p>From personal care</p>,
      },
      {
        path: "/software",
        element: <p>From software</p>,
      },
      {
        path: "/toys-and-games",
        element: <p>From Toys and games</p>,
      },
      {
        path: "/womens-fashion",
        element: <p>From women's fashion</p>,
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
