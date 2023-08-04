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
        path: "/login",
        element: <p>Defaut login</p>,
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
]);
export default router;
