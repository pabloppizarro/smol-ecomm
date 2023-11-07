import { Product } from "../types/products";
import ProductCard from "./ProductCard";

export default function ProductCardList({ products }: { products: Product[] }) {
  return (
    <section className="border flex gap-4 flex-wrap">
      {products.map((p: Product, i: number) => (
        <ProductCard product={p} key={i}></ProductCard>
      ))}
    </section>
  );
}
