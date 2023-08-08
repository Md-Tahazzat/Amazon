import { Link } from "react-router-dom";

const UserAccountFooter = () => {
  return (
    <div className="w-full border-t-2 mt-5 pt-5 mb-20 border-slate-200">
      <div className="flex items-center justify-evenly text-blue-500 text-sm mb-1">
        <Link to="/conditions-of-use">Condition of Use</Link>
        <Link to="/privacy-notice">Privacy Notice</Link>
        <Link to="/help">Help</Link>
      </div>
      <p className="text-sm text-center">
        &copy; 1996 to 2023, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
};

export default UserAccountFooter;
