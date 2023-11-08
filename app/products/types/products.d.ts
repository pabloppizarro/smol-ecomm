import { ProductMedia } from "./product-media";

export type Product = {
  name: string;
  brand: string;
  listaPrecioItem: number; //listaPrecioItem
  productMedia: string;
  url: string;
  featured: Boolean;
};
export type ProductDetail = {
  name: string;
  brand: string;
  defaultPrice: number;
  productMedia: ProductMedia[];
  url: string;
  featured: Boolean;
};

export type ProductsRequest = {
  products: Product[];
  tagsUnique: [];
  uniqueBrands: [];
};
