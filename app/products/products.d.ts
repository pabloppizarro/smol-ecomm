export type Product = {
  name: string;
  brand: string;
  defaultPrice: number;
  media: string;
};

export type ProductRequest = {
  products: [];
  tagsUnique: [];
  uniqueBrands: [];
};
