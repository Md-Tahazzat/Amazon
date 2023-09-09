import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Loading from "../../components/Loading/Loading";
import Details from "../../components/ProductDetails/Details";
import ProductComments from "../../components/ProductDetails/ProductComments";
import ProductImages from "../../components/ProductDetails/ProductImages";
import ProductPhotoGallery from "../../components/ProductDetails/ProductPhotoGallery";
import SimiliarProducts from "../../components/ProductDetails/SimiliarProducts";
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
  return (
    <Container>
      <div className="flex flex-col mb-1 border-b-2 lg:flex-row items-start lg:gap-4 py-3">
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

      {/* product description */}
      <p className=" border-b-2 pb-1 mb-1">
        <span className="font-semibold">Product description: </span>
        {product?.description}
      </p>

      {
        // similiar products
        product?.category && product.sub_category && (
          <SimiliarProducts
            id={product._id}
            category={product?.category}
            subcategory={product?.sub_category}
          />
        )
      }

      {
        // product photo gallery
        product?.images && (
          <ProductPhotoGallery galleryPhotos={product?.images} />
        )
      }

      {
        // product comments
        product?.comments && <ProductComments comments={product.comments} />
      }
    </Container>
  );
};

export default ProductDetails;
