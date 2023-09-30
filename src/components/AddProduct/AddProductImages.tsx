import { UseFormRegister } from "react-hook-form";

type AddProductImagesPropsType = {
  register: UseFormRegister<any>;
};

const AddProductImages = ({ register }: AddProductImagesPropsType) => {
  return (
    <div className="input-box mb-4">
      <label className="input-label">Product image 1</label>
      <input
        className="input-field"
        {...register("product_image_1")}
        placeholder="Image 1 link"
      />
      <label className="input-label">Product image 2</label>
      <input
        className="input-field"
        {...register("product_image_2")}
        placeholder="Image 2 link"
      />
      <label className="input-label">Product image 3</label>
      <input
        className="input-field"
        {...register("product_image_3")}
        placeholder="Image 3 link"
      />
      <label className="input-label">Product image 4</label>
      <input
        className="input-field"
        {...register("product_image_4")}
        placeholder="Image 4 link"
      />
    </div>
  );
};

export default AddProductImages;
