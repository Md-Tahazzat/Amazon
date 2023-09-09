import { FaCircleCheck } from "react-icons/fa6";
import { useShopContext } from "../../provider/ContextProvider";

const CartAmount = () => {
  const { cartProductCount } = useShopContext();
  return (
    <div className="w-full md:bg-white mb-5 md:mb-0 rounded-md md:w-4/12 lg:w-3/12 py-2 md:p-3 lg:p-5  md:sticky top-3">
      <div className="flex flex-col md:flex-col-reverse">
        {/* TODO: have make the subtotal amount dynamic */}
        <h1 className="text-2xl md:text-[1.3rem] font-semibold mb-2">
          Subtotal{" "}
          <span className="hidden md:inline-block">
            {" "}
            ({cartProductCount} items) :
          </span>{" "}
          $959.68
        </h1>
        <p className="flex items-start text-base md:text-sm mb-4 md:mb-2">
          <FaCircleCheck className="mt-[1px] text-2xl mr-1 text-green-700" />
          <span>
            Your Order qualifies for FREE Shipping. Choose this option at
            checkout.
            <span className="text-green-600 md:text-sm"> See details</span>
          </span>
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        {/* TODO: Have to implement this custom message. */}
        <span className="flex items-start gap-1 mb-2 text-[15px]">
          <input type="checkbox" className="mt-1.5" />{" "}
          <span>Sent as a gift including custom message</span>
        </span>
        <button className="py-1 mb-2 w-full text-lg bg-yellow-400 font-semibold rounded-md hover:bg-yellow-500 duration-150">
          Proceed to checkout
          <span className="md:hidden"> ({cartProductCount} items)</span>
        </button>
      </div>
    </div>
  );
};

export default CartAmount;
