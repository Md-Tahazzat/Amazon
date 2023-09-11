import CartAmount from "../../components/Cart/CartAmount";
import CartProducts from "../../components/Cart/CartProducts";

const Cart = () => {
  return (
    <div className="flex md:px-4 bg-white md:bg-transparent lg:px-10 pt-3 flex-col-reverse md:items-start md:flex-row md:gap-5">
      <CartProducts />
      <CartAmount />
    </div>
  );
};
export default Cart;
