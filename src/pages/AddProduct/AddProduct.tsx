import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import AddAboutProduct from "../../components/AddProduct/AddAboutProduct";
import AddProductDescription from "../../components/AddProduct/AddProductDescription";
import AddProductDetails from "../../components/AddProduct/AddProductDetails";
import AddProductImages from "../../components/AddProduct/AddProductImages";
import AddProductPrice from "../../components/AddProduct/AddProductPrice";
import AddProductTitle from "../../components/AddProduct/AddProductTitle";
import { AddProductFormData } from "../../tsInterfaces&types/AddProduct";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddProductFormData>();

  // useField array for product_details
  const {
    fields: productDetailsFields,
    append: appendProductDetailsInput,
    remove: removeProductDetailsInput,
  } = useFieldArray({
    control,
    name: "product_details",
  });

  const {
    fields: aboutProductFields,
    append: appendAboutProductInput,
    remove: removeAboutProductInput,
  } = useFieldArray({
    control,
    name: "about",
  });

  // useEffect to add default single input of product details
  useEffect(() => {
    appendProductDetailsInput({ key: "", value: "" });
    appendAboutProductInput({ key: "" });
  }, []);

  // submit handler
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="w-full p-4 rounded-lg py-8 lg:px-12 max-w-[700px] mx-auto bg-slate-200">
      <h1 className="text-center text-2xl mb-4 font-semibold">
        Add your product
      </h1>
      <form className="" onSubmit={onSubmit}>
        <AddProductTitle register={register} />
        <AddProductImages register={register} />
        <AddProductPrice register={register} />
        <AddProductDetails
          appendProductDetailsInput={appendProductDetailsInput}
          productDetailsFields={productDetailsFields}
          register={register}
          removeProductDetailsInput={removeProductDetailsInput}
        />

        <AddAboutProduct
          aboutProductFields={aboutProductFields}
          appendAboutProductInput={appendAboutProductInput}
          register={register}
          removeAboutProductInput={removeAboutProductInput}
        />

        <AddProductDescription register={register} />

        <input
          className="py-1 px-3 w-full bg-orange-500 hover:bg-orange-600 duration-150 rounded-md text-white font-bold"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
