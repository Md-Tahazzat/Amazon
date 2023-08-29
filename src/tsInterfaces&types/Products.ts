export interface RatingsInfo {
  avg_ratings: string;
  total_ratings: number;
  answered_question: number;
}

export interface CommentType {
  _id: string;
  name: string;
  image: string | undefined;
  rating: string;
  date: string;
  location: string | undefined;
  comment_title: string;
  comment_text: string;
  product_img: [string] | undefined;
}

export type ProductDetails = Record<string, any>;

export interface ProductType {
  _id: string;
  title: string | undefined;
  images: string[];
  ratings_info: RatingsInfo;
  price: number;
  product_details: ProductDetails[];
  about: string[];
  description: string;
  comments: CommentType[];
  category: string;
  sub_category: string;
}
