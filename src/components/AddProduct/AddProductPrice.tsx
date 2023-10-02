import { UseFormRegister } from "react-hook-form";

type AddProductPricePropsType = {
  register: UseFormRegister<any>;
};
const AddProductPrice = ({ register }: AddProductPricePropsType) => {
  return (
    <div className="input-box mb-3">
      <label className="input-label">Price</label>
      <input
        className="input-field"
        {...register("price", { required: true })}
        placeholder="$"
      />
    </div>
  );
};

export default AddProductPrice;
