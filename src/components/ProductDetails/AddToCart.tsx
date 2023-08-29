import DeliveryDate from "../Products/DeliveryDate";

const AddToCart: React.FC<{ productPrice: number }> = ({ productPrice }) => {
  const [dollars, cents] = productPrice.toFixed(2).split(".");
  return (
    <div className="p-4 border">
      <p className="flex">
        $<span className="text-2xl -mt-0.5">{dollars}</span>
        {cents}
      </p>
      <DeliveryDate />
      <p className="text-sm">
        Order's within <span className="text-green-500">10 hrs 35 mins</span>
      </p>
    </div>
  );
};

export default AddToCart;
