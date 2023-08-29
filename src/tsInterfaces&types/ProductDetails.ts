import { RatingsInfo } from "./Products";

export interface TitleAndRatingsProps {
  className: string;
  title: string;
  storeName: any;
  ratings: RatingsInfo;
  showMoreDetails: boolean;
}

export interface SimiliarProductsType {
  category: string;
  id: string;
  subcategory: string;
}
