import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { Category } from "../../tsInterfaces&types/HambergerMenu";
import { getCategories } from "../../utilitesFn/GetCategories";

type AddCategoriesPropsType = {
  register: UseFormRegister<any>;
};

const AddCategories = ({ register }: AddCategoriesPropsType) => {
  const categories: Category[] = getCategories();
  const [selectCategory, setSelectCategory] = useState("");

  // sub_category selector functionality
  const handleDisplaySubCategories = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectCategory(event?.target.value);
  };

  const subCategories = categories?.filter(
    (category) => category.href === selectCategory
  );
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex items-center gap-2">
        <label htmlFor="category">Set Category</label>
        <select
          className="rounded-md outline-none px-2"
          id="category"
          {...register("category", {
            required: true,
            onChange: handleDisplaySubCategories,
          })}
        >
          {categories.map((category) => (
            <option key={category._id} value={category.href}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        {/* add sub_categories */}
        <label htmlFor="category">Set Sub Category</label>
        {subCategories[0]?.subcategories.length > 0 ? (
          <select
            className="rounded-md outline-none px-2"
            id="subCategory"
            {...register("sub_category", {
              required: true,
            })}
          >
            {subCategories[0]?.subcategories.map((subCategory) => (
              <option key={subCategory._id} value={subCategory.href}>
                {subCategory.label}
              </option>
            ))}
          </select>
        ) : (
          <select
            className="rounded-md outline-none px-2"
            id="sub_category"
            {...register("sub_category", {
              required: true,
            })}
          >
            {categories[0]?.subcategories.map((subCategory) => (
              <option key={subCategory._id} value={subCategory.href}>
                {subCategory.label}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default AddCategories;
