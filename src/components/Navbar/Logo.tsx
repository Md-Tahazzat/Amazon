import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="hover-border">
      <img
        className="w-[85px] h-[26px] lg:w-[100px] lg:h-[35px] mt-2 "
        src="https://i.ibb.co/F6SxYvG/amazon-PNG11.png"
        alt="Amazon"
      />
    </Link>
  );
};

export default Logo;
