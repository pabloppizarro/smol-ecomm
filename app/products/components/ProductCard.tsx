import Link from "next/link";
import { Product } from "../types/products";
import Image from "next/image";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={{
        pathname: `/products/${product.url}`,
      }}
    >
      <article className="border rounded-md  h-[300px] w-[250px] shadow-sm hover:shadow-lg">
        <Image
          src={`${product.productMedia}`}
          loading="lazy"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h3>{product.name}</h3>
        <p>{product.defaultPrice}</p>
        <p>{product.brand}</p>
      </article>
    </Link>
  );
}
