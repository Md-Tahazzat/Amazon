export interface Category {
  _id: string;
  name: string;
  href: string;
  subcategories: {
    _id: string;
    label: string;
    href: string;
  }[];
}

// interfaces for Submenu
export interface SubMenuItems {
  label: string;
  href: string;
}
