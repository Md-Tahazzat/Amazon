import { useState } from "react";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { AddProductFormData } from "../../tsInterfaces&types/AddProduct";

type AddAboutProductPropsType = {
  aboutProductFields: FieldArrayWithId<AddProductFormData, "about", "id">[];
  register: UseFormRegister<any>;
  appendAboutProductInput: UseFieldArrayAppend<AddProductFormData, "about">;
  removeAboutProductInput: UseFieldArrayRemove;
};

const AddAboutProduct = (props: AddAboutProductPropsType) => {
  const {
    aboutProductFields,
    appendAboutProductInput,
    removeAboutProductInput,
    register,
  } = props;
  const [lastInputIndex, setLastInputIndex] = useState(0);

  // add and remove functionality for about product input
  const handleAddInput = () => {
    appendAboutProductInput({ key: "" });
    setLastInputIndex(lastInputIndex + 1);
  };

  const handleRemoveInput = () => {
    removeAboutProductInput(lastInputIndex);
    setLastInputIndex(lastInputIndex - 1);
  };

  return (
    <div className="input-box mb-6">
      <h1 className="text-xl font-semibold mb-1">About Product</h1>
      <div>
        {aboutProductFields.map((field, index) => (
          <div className="w-full" key={field.id}>
            <label className="input-label">Product features</label>
            <textarea
              className="px-2 resize-none py-1 border text-sm focus:outline-none w-full rounded-md"
              {...register(`about.${index}.key`, { required: true })}
              placeholder="Enter your product features, quality, short info."
            ></textarea>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mb-5">
        <button
          type="button"
          className="py-1 px-3 mt-1 bg-orange-500 hover:bg-orange-600 duration-150 text-white rounded-md"
          onClick={handleAddInput}
        >
          Add info input
        </button>
        <button
          type="button"
          className="py-1 px-3 mt-1 bg-orange-500 hover:bg-orange-600 duration-150 text-white rounded-md"
          onClick={handleRemoveInput}
        >
          Remove info input
        </button>
      </div>
    </div>
  );
};

export default AddAboutProduct;
