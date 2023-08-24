import Banner from "../../components/Home/Banner";
import { useShopContext } from "../../provider/ContextProvider";

const Home = () => {
  const { user } = useShopContext();
  console.log(user);
  return (
    <div className="bg-[#f1f3f4]">
      <Banner />
      <div id="magnify-container" className="my-20 mx-auto">
        <p>From home</p>
      </div>
    </div>
  );
};

export default Home;
