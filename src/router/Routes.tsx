import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <p>Defaut home</p>,
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
    path: "/without-nav",
    element: <p>Without nav bar </p>,
  },
]);
export default router;
