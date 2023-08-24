import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Loading from "../../components/Loading/Loading";
import Details from "../../components/ProductDetails/Details";
import ProductImages from "../../components/ProductDetails/ProductImages";
import TitleAndRatings from "../../components/ProductDetails/TitleAndRatings";
import instance from "../../hooks/useAxiosInstance";
import { ProductType } from "../../tsInterfaces&types/Products";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", id], async () => {
    const res: ProductType = await instance.get(`/products/${id}`);
    return res;
  });

  if (isLoading) {
    return <Loading className="w-full h-[80vh]" />;
  }

  console.log(id, product);
  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:gap-4 py-3">
        {
          // title & ratings info
          product && (
            <TitleAndRatings
              className="lg:hidden"
              title={product.title ? product.title : ""}
              ratings={product.ratings_info}
              showMoreDetails={false}
              // @ts-ignore
              storeName={product.product_details?.Brand}
            />
          )
        }

        {
          // side image & large image
          product?.images !== undefined ? (
            <ProductImages images={product?.images} />
          ) : (
            <p>No image available to display</p>
          )
        }

        {
          // product details
          product && <Details product={product} />
        }
      </div>
    </Container>
  );
};

export default ProductDetails;
