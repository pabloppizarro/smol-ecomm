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
      <article className=" relative border rounded-md   w-[250px] shadow-sm hover:shadow-lg">
        {/* <button className="m-2 absolute top-0 right-0">
          <svg
            className=" w-6 h-6 text-red-500"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button> */}
        <div className="h-[250px] flex">
          <Image
            src={`${product.productMedia}`}
            loading="lazy"
            width={300}
            height={300}
            quality={80}
            style={{ objectFit: "contain" }}
            alt={product.name}
          />
        </div>
        <div className=" grid p-2 border-t h-[150px]">
          <h3 className=" text-lg font-poppinsBold ">{product.name}</h3>
          <p className=" bg-violet-500 text-white h-fit  w-fit rounded-full px-2 font-poppinsBold">
            {product.brand}
          </p>
          <p className=" text-2xl font-poppinsBold">
            ${product.listaPrecioItem}
          </p>
        </div>
      </article>
    </Link>
  );
}
