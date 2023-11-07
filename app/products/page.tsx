import ProductCardList from "./components/ProductCardList";
import { ProductsRequest } from "./types/products";

export default async function Page() {
  const { products, tagsUnique, uniqueBrands }: ProductsRequest = await fetch(
    "https://api.gamehard.tech/producto-venta/web-search"
  ).then((res) => res.json());
  return (
    <div className="flex md:flex-row gap-4 h-full">
      <aside className=" bg-violet-700">
        <p>Aside</p>
      </aside>
      <section>
        <h1 className=" font-poppins">
          Our Products! (seeing: {products.length})
        </h1>

        <ProductCardList products={products}></ProductCardList>
      </section>
    </div>
  );
}
