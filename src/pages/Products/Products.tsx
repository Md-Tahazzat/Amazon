import queryString from "query-string";
import { useQuery } from "react-query";
import Container from "../../components/Container/Container";
import Loading from "../../components/Loading/Loading";
import Product from "../../components/Products/Product";
import instance from "../../hooks/useAxiosInstance";
import { ProductType } from "../../tsInterfaces&types/Products";

const Products = () => {
  const { category, sub_category } = queryString.parse(location.search);

  // fetch products according to category & sub_category
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery([category, 2], async () => {
    const res: ProductType[] = await instance.get(
      `/products?category=${category}`
    );
    return res;
  });
  console.log(products);
  if (isLoading) return <Loading className="w-full h-[70vh]" />;
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-1">Results</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 md:gap-3">
        {products !== undefined && products.length > 0 ? (
          products.map((product, index) => (
            <Product className="w-full" product={product} key={index} />
          ))
        ) : (
          <p>0 products available</p>
        )}
      </div>
    </Container>
  );
};

export default Products;
