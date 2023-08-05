import { useShopContext } from "../../provider/ContextProvider";

const Login = () => {
  const { isMenuOpen } = useShopContext();
  console.log(isMenuOpen);
  return (
    <div>
      <h1>from login page</h1>
    </div>
  );
};

export default Login;
