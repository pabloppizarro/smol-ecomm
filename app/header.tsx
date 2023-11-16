"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon, ShoppingBag } from "lucide-react";
import CategoriesNavMenu from "./components/CategoriesNavMenu";
import { Input } from "@/components/ui/input";
const links = [
  { name: "All Products", href: "/products" },
  { name: "Brands", href: "/brands" },
  { name: "Exclusives", href: "/exclusives" },
  { name: "Offers", href: "/offers" },
  { name: "Favorites", href: "/favorites" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="z-10 relative w-[1280px] font-poppinsBold  bg-white">
      <div className="fixed shadow-sm max-w-[inherit] py-4 bg-white">
        <div className="flex items-center justify-center top gap-4 m-auto">
          <Link className=" hover:font-bold text-xl" href={"/"}>
            TechStore
          </Link>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input placeholder="Ryzen, RTX, Gaming keyboard..." />
            <Button type="submit">
              Go!
              <SearchIcon></SearchIcon>
            </Button>
          </div>
          <div className="flex divide-x">
            {/* <Button variant={"ghost"}>
            <span className="hidden sm:block">Cart</span>
            <ShoppingBag />
          </Button> */}
          </div>
        </div>
        <div className="hidden sm:flex m-2 justify-center">
          <CategoriesNavMenu categories={[]}></CategoriesNavMenu>
        </div>
      </div>
    </header>
  );
}
