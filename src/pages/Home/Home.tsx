import ReactImageMagnify from "react-image-magnify";
import Banner from "../../components/Home/Banner";
import { useShopContext } from "../../provider/ContextProvider";

const Home = () => {
  const { user } = useShopContext();
  console.log(user);
  return (
    <div className="bg-[#f1f3f4]">
      <Banner />
      <div id="" className="my-20 lg:w-[400px] lg:h-[400px]">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: "https://m.media-amazon.com/images/I/81TUnaSLzoL._AC_SX450_.jpg",
            },
            largeImage: {
              src: "https://m.media-amazon.com/images/I/81TUnaSLzoL._AC_SX450_.jpg",
              width: 2000,
              height: 2000,
            },

            enlargedImageClassName: "react-magnify-large-image",
            enlargedImageContainerDimensions: {
              width: "120%",
              height: "120%",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Home;
