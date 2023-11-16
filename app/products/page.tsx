import Link from "next/link";
import ProductCardList from "./components/ProductCardList";
import { ProductsRequest } from "./types/products";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ProductNavigation from "./(layout)/ProductNavigation";
import FilterMenu from "./(layout)/FilterMenu";

declare type priceFilter = "ASC" | "DESC";
export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const stock = (searchParams.stock || false) as string;
  const price: priceFilter = (searchParams.onDemand || "ASC") as priceFilter;

  const { products, tagsUnique, uniqueBrands }: ProductsRequest = await fetch(
    "https://api.gamehard.tech/producto-venta/web-search"
  ).then((res) => res.json());
  return (
    <div>
      <ProductNavigation></ProductNavigation>
      <div className="flex md:flex-row gap-4 h-full">
        <FilterMenu filters={{ stock, price }}></FilterMenu>
        <ProductCardList products={products}></ProductCardList>
      </div>
    </div>
  );
}
