"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductDetail } from "../types/products";
export default function ProductViewPage() {
  const pathname: string = usePathname();
  const url = pathname.split("/").pop();
  const [product, setProduct] = useState<ProductDetail>();
  useEffect(() => {
    const fetchProd = async () => {
      const res = await fetch(
        `https://api.gamehard.tech/producto-venta/web-product?url=${url}`
      );
      const json = await res.json();
      setProduct(json);
    };

    fetchProd().catch(console.error);
  }, []);

  return (
    <article>
      {product ? (
        <>
          <h1>{product.name}</h1>
        </>
      ) : (
        <p>loading...</p>
      )}
    </article>
  );
}
