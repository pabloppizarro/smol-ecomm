import { ProductRequest } from "./products";

export default async function Page() {
  const { products, tagsUnique, uniqueBrands }: ProductRequest = await fetch(
    "https://api.gamehard.tech/producto-venta/web-search"
  ).then((res) => res.json());
  return (
    <div className="flex md:flex-row gap-4 h-full">
      <aside className=" bg-violet-700">
        <p>Aside</p>
      </aside>
      <section>
        <h1>Products!{products?.length}</h1>
        <article>
          <h3>Mouse Redragon</h3>
          <p>$2342</p>
        </article>
      </section>
    </div>
  );
}
