import Container from "../../components/Container/Container";
import CartAmount from "./CartAmount";
import CartProducts from "./CartProducts";
const Cart = () => {
  return (
    <Container>
      <div className="flex mt-3 flex-col-reverse md:items-start md:flex-row md:gap-5">
        <CartProducts />
        <CartAmount />
      </div>
    </Container>
  );
};

export default Cart;
