import Banner from "../../components/Home/Banner";
import { useShopContext } from "../../provider/ContextProvider";

const Home = () => {
  const { user } = useShopContext();
  console.log(user);
  return (
    <div>
      <Banner />
      <div id="magnify-container" className="my-20 mx-auto">
        <p>From home</p>
      </div>
    </div>
  );
};

export default Home;
