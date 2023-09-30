import { UseFormRegister } from "react-hook-form";

type AddProductTitlePropsType = {
  register: UseFormRegister<any>;
};

const AddProductTitle = ({ register }: AddProductTitlePropsType) => {
  return (
    <div className="input-box mb-2">
      <label className="input-label">Product Title</label>
      <input
        className="input-field"
        {...register("title")}
        placeholder="Product title"
      />
    </div>
  );
};

export default AddProductTitle;
