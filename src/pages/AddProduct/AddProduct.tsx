import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import AddAboutProduct from "../../components/AddProduct/AddAboutProduct";
import AddCategories from "../../components/AddProduct/AddCategories";
import AddProductDescription from "../../components/AddProduct/AddProductDescription";
import AddProductDetails from "../../components/AddProduct/AddProductDetails";
import AddProductImages from "../../components/AddProduct/AddProductImages";
import AddProductPrice from "../../components/AddProduct/AddProductPrice";
import AddProductTitle from "../../components/AddProduct/AddProductTitle";
import instance from "../../hooks/useAxiosInstance";
import { useShopContext } from "../../provider/ContextProvider";
import { AddProductFormData } from "../../tsInterfaces&types/AddProduct";
import { ProductType } from "../../tsInterfaces&types/Products";

const AddProduct = () => {
  const { user } = useShopContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
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
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const productDetails: Record<string, any> = {};
    for (let item of data.product_details) {
      productDetails[item.key] = item.value;
    }
    const aboutProduct = [];
    for (let item of data.about) {
      aboutProduct.push(item.key);
    }
    const product: ProductType = {
      title: data.title,
      images: [
        data.product_image_1,
        data.product_image_2,
        data.product_image_3,
        data.product_image_4,
      ],
      ratings_info: {
        avg_ratings: "",
        total_ratings: 0,
        answered_question: 0,
      },
      price: +data.price,
      product_details: productDetails,
      about: aboutProduct,
      description: data.description,
      comments: [],
      category: data.category,
      sub_category: data.sub_category,
      email: user.email,
      status: "pending",
    };

    instance.post("/products/add-product", product).then((res) => {
      if (res.status === 200) {
        // TODO: have to make the alert beautiful
        alert("insert successfull"), reset();
      }
    });
  });

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
        <AddCategories register={register} />

        <input
          className="py-1 px-3 w-full bg-orange-500 hover:bg-orange-600 duration-150 rounded-md text-white font-bold"
          type="submit"
          value="Add product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
