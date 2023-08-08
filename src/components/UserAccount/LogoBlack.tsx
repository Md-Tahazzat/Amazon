import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import amazon_lottie_logo from "../../assets/lottieAnimation/amazon_logo.json";

const LogoBlack = () => {
  return (
    <Link
      className=" w-36 mb-4 block md:w-44 mx-auto -mt-5"
      title="Click for Home Page"
      to="/"
    >
      <Lottie
        onClick={() => console.log("clicking")}
        loop={false}
        animationData={amazon_lottie_logo}
        play
        className="w-36 md:w-44"
      />
    </Link>
  );
};

export default LogoBlack;
