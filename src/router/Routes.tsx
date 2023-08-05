import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import Login from "../pages/Shared/Login";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <p>Defaut register</p>,
      },
      {
        path: "/dashboard",
        element: <p>Defaut dashboard</p>,
      },
    ],
  },
  {
    path: "/without-nav",
    element: <p>Without nav bar </p>,
  },
]);
export default router;
