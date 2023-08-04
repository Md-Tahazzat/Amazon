import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="w-[110px]"
        src="https://i.ibb.co/F6SxYvG/amazon-PNG11.png"
        alt="Amazon"
      />
    </Link>
  );
};

export default Logo;
