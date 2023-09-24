import { NavLink } from "react-router-dom";

const BuyerFeatures = () => {
  const navLinks = [
    { label: "Update Profile", link: "/user-profile" },
    { label: "Analytics", link: "/user-profile/analytics" },
    { label: "Order History", link: "/user-profile/order-history" },
    { label: "Payment History", link: "/user-profile/payment-history" },
    { label: "Feedback", link: "/user-profile/feedback" },
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

export default BuyerFeatures;
