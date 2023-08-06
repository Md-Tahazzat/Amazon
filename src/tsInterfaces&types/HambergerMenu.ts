export interface Category {
  _id: string;
  name: string;
  subcategories: {
    _id: string;
    label: string;
    href: string;
  }[];
}
