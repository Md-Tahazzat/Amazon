import Banner from "../../components/Home/Banner";
import { useShopContext } from "../../provider/ContextProvider";

const Home = () => {
  const { user } = useShopContext();
  console.log(user);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
