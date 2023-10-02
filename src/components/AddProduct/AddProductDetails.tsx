import { useState } from "react";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { AddProductFormData } from "../../tsInterfaces&types/AddProduct";

type AddProductDetailsPropsType = {
  productDetailsFields: FieldArrayWithId<
    AddProductFormData,
    "product_details",
    "id"
  >[];
  register: UseFormRegister<any>;
  appendProductDetailsInput: UseFieldArrayAppend<
    AddProductFormData,
    "product_details"
  >;
  removeProductDetailsInput: UseFieldArrayRemove;
};

const AddProductDetails = (props: AddProductDetailsPropsType) => {
  const {
    register,
    appendProductDetailsInput,
    productDetailsFields,
    removeProductDetailsInput,
  } = props;
  const [lastInputIndex, setLastInputIndex] = useState(0);

  // product details input field remove and add handler function
  const handleAddInput = () => {
    appendProductDetailsInput({ key: "", value: "" });
    setLastInputIndex(lastInputIndex + 1);
  };

  const handleRemoveInput = () => {
    removeProductDetailsInput(lastInputIndex);
    setLastInputIndex(lastInputIndex - 1);
  };
  return (
    <div className="input-box mb-6">
      <h1 className="text-xl font-semibold mb-1">Product Details</h1>
      <div>
        {productDetailsFields.map((field, index) => (
          <div className="flex items-center w-full gap-4" key={field.id}>
            <div className="w-3/6">
              <label className="input-label">Product Key</label>
              <input
                className="px-2 py-1 border text-sm mb-3 focus:outline-none w-full rounded-md"
                {...register(`product_details.${index}.key`, {
                  required: true,
                })}
                placeholder={
                  index === 0
                    ? "Ex: Brand"
                    : index === 1
                    ? "Ex: Color"
                    : index === 2
                    ? "Ex: Model"
                    : "Ex: Others"
                }
              />
            </div>
            <div className="flex flex-col w-3/6">
              <label className="">Product Value</label>
              <input
                className="px-2 py-1 border text-sm mb-3 focus:outline-none w-full rounded-md"
                {...register(`product_details.${index}.value`, {
                  required: true,
                })}
                placeholder={
                  index === 0
                    ? "Ex: Apple"
                    : index === 1
                    ? "Ex: Blue"
                    : index === 2
                    ? "Ex: D-42i"
                    : "Ex: Others"
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mb-5">
        <button
          type="button"
          className="py-1 px-3 bg-orange-500 hover:bg-orange-600 duration-150 text-white rounded-md"
          onClick={handleAddInput}
        >
          Add Attribute
        </button>
        <button
          type="button"
          className="py-1 px-3 bg-orange-500 hover:bg-orange-600 duration-150 text-white rounded-md"
          onClick={handleRemoveInput}
        >
          Remove Attribute
        </button>
      </div>
    </div>
  );
};

export default AddProductDetails;
