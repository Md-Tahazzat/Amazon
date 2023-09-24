import { NavLink } from "react-router-dom";

const SellerFeatures = () => {
  const navLinks = [
    { label: "Update Profile", link: "/user-profile" },
    { label: "Analytics", link: "/user-profile/analytics" },
    { label: "Add Product", link: "/user-profile/add-product" },
    { label: "Product Management", link: "/user-profile/product-management" },
    { label: "Order Management", link: "/user-profile/order-management" },
    {
      label: "Inventory Management",
      link: "/user-profile/inventory-management",
    },
    { label: "Store Settings", link: "/user-profile/store-settings" },
    { label: "Messaging System", link: "/user-profile/messaging-system" },
  ];
  const activeLink = location.href.split(location.origin)[1];
  return (
    <>
      {navLinks.map((item) => (
        <li key={item.link}>
          <NavLink
            className={`user-profile-links block ${
              activeLink === item.link && "bg-slate-500 text-slate-50"
            }`}
            to={item.link}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default SellerFeatures;
