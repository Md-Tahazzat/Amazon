import { useQuery } from "react-query";
import instance from "../../hooks/useAxiosInstance";
import { SimiliarProductsType } from "../../tsInterfaces&types/ProductDetails";
import { ProductType } from "../../tsInterfaces&types/Products";
import Loading from "../Loading/Loading";
import Product from "../Products/Product";

const SimiliarProducts = ({
  id,
  category,
  subcategory,
}: SimiliarProductsType) => {
  // get all the similiar products by category & sub_category
  const { data: products, isLoading } = useQuery(
    [category, subcategory],
    async () => {
      const res: { data: ProductType[] } = await instance.get(
        `products?category=${category}&sub_category=${subcategory}`
      );
      return res ? res.data.filter((product) => product._id !== id) : [];
    }
  );

  if (isLoading) return <Loading className="w-full h-44" />;
  return (
    <>
      <h4 className="mt-10 lg:mt-20 mb-3 text-2xl font-semibold">
        Similiar products
      </h4>
      <div className="flex mb-10 lg:mb-20 overflow-auto gap-4">
        {products?.map((product, index) => (
          <Product
            key={index}
            className="min-w-[300px] lg:max-w-[300px]"
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default SimiliarProducts;
