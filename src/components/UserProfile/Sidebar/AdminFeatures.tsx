import queryString from "query-string";
import { NavLink } from "react-router-dom";

const AdminFeatures = () => {
  const href = queryString.parse(location.search);
  console.log(location, href);
  return (
    <>
      <li className="user-profile-links">
        <NavLink to="/profile/update-profile">Update Profile</NavLink>
      </li>
      <li className="user-profile-links">
        <NavLink to="/profile/analytics-and-reporting">
          Analytics & Reporting
        </NavLink>
      </li>
      <li className="user-profile-links">
        <NavLink to="/profile/user-management">User Management</NavLink>
      </li>
      <li className="user-profile-links">
        <NavLink to="/profile/order-management"> Order Management</NavLink>
      </li>
      <li className="user-profile-links">
        <NavLink to="/profile/seller-verification">Seller Management</NavLink>
      </li>
      <li className="user-profile-links">
        <NavLink to="/profile/content-management">Content Management</NavLink>
      </li>
    </>
  );
};

export default AdminFeatures;
