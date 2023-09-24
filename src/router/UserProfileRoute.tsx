import AddProduct from "../pages/AddProduct/AddProduct";
import Analytics from "../pages/Analytics/Analytics";
import Feedback from "../pages/Feedback/Feedback";
import InventoryManagement from "../pages/InventoryManagement/InventoryManagement";
import MessagingSystem from "../pages/MessagingSystem/MessagingSystem";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import OrderManagement from "../pages/OrderManagement/OrderManagement";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import StoreSettings from "../pages/StoreSettings/StoreSettings";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

export const userProfileRoute = [
  {
    path: "/user-profile",
    element: <UpdateProfile />,
  },
  {
    path: "/user-profile/analytics",
    element: <Analytics />,
  },
  {
    path: "/user-profile/order-history",
    element: <OrderHistory />,
  },
  {
    path: "/user-profile/payment-history",
    element: <PaymentHistory />,
  },
  {
    path: "/user-profile/feedback",
    element: <Feedback />,
  },
  {
    path: "/user-profile/add-product",
    element: <AddProduct />,
  },
  {
    path: "/user-profile/product-management",
    element: <ProductManagement />,
  },
  {
    path: "/user-profile/order-management",
    element: <OrderManagement />,
  },
  {
    path: "/user-profile/inventory-management",
    element: <InventoryManagement />,
  },
  {
    path: "/user-profile/store-settings",
    element: <StoreSettings />,
  },
  {
    path: "/user-profile/messaging-system",
    element: <MessagingSystem />,
  },
];
