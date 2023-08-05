const Cart = () => {
  const count = 10;
  return (
    <div className="flex hover-border items-end text-lg relative lg:mt-1">
      <img
        className={`${count > 9 ? "w-12" : "w-10"} h-8 lg:h-10 lg:w-14`}
        src="https://i.ibb.co/Hnxbm42/Amazon-cart.png"
        alt="Cart"
      />
      <span
        className={`absolute text-base lg:text-md -top-1 lg:top-0 font-bold ${
          count > 9 ? "left-5 lg:left-6" : "left-[21px] lg:left-7"
        }  rounded-md bg-transparent text-orange-300`}
      >
        {count}
      </span>
      <span className="hidden lg:block font-bold -ml-2">cart</span>
    </div>
  );
};

export default Cart;
