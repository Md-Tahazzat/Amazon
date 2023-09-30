import { UseFormRegister } from "react-hook-form";

type AddProductDescriptionPropsType = {
  register: UseFormRegister<any>;
};
const AddProductDescription = ({
  register,
}: AddProductDescriptionPropsType) => {
  return (
    <div className="w-full mb-6">
      <label className="input-label">Product description</label>
      <textarea
        rows={4}
        className="px-2 resize-none py-1 border focus:outline-none w-full rounded-md"
        {...register(`description`)}
        placeholder="Enter a description about product"
      ></textarea>
    </div>
  );
};

export default AddProductDescription;
