export interface AddProductFormData {
  title: string;
  product_image_1: string;
  product_image_2: string;
  product_image_3: string;
  product_image_4: string;
  price: number;
  product_details: ProductDetails;
  about: AboutProduct;
  description: string;
  category: string;
  sub_category: string;
}

export type ProductDetails = Array<{ key: string; value: string }>;
export type AboutProduct = Array<{ key: string }>;
